import '../App.css';
import { PinInput } from 'react-input-pin-code' // ES Module
import { useState } from 'react';
import logo from './assets/red.png'
import pin from './assets/atm.png'
import { useNavigate } from 'react-router-dom';
import { FaWindowClose, FaUnlockAlt } from 'react-icons/fa';
import * as base from "../env";

var url = base.BASE_URL


function Login() {
  const [values, setValues] = useState(['', '', '', ''])
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function clear() {
    //clear fields
    setValues(['', '', '', ''])
    setEmail("")

  }
  const login = async () => {
    try {
      var pinCode = values.toString().replaceAll(",", "")
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      //validate pin
      if (pinCode === "") {
        setError("Please enter PIN")
      } else if (pinCode.length < 4) {
        setError("Password nust be 4 digits")
      } 
      //validate email
      else if (email === "") {
        setError("Please enter email")
      } else if (reg.test(email) == false) {
        setError("The email is invalid")
        return false;
      } else  {
        setError("")
        //Authenticate User

        var formData = new FormData()
        formData.append("Email", email)
        formData.append("PIN", pinCode)
        

        const response = await fetch(url+"/login", {
          method: 'POST',
          body: formData,
          
      });

      const json = await response.json();
    
      if (json.exists == "YES") {
        sessionStorage.removeItem("session")
        var session = '{"Email":"' + email + '", "AccountName":"' + json.AccountName + '",  "MobileNumber":"' + json.MobileNumber + '"}'

        
        sessionStorage.setItem("session", session)
     
        navigate("/home")
      }else{
        setError("Incorrect login credentials!!")
      }
        
      }
      }catch (e) {

      }

    }


  return (
      <>
       
          <div className='outerView'>


            <img alt='logo' className='logo' src={logo} />

            <div className='cardInnerLogin'>
              <div className='cardPin'>

                <h4 className="pinHeader">ENTER PIN</h4>

                <PinInput

                  values={values}
                  size="lg"
                  borderColor='#4865b8'
                  onChange={(value, index, values) => setValues(values)}
                />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' className='email form-control' type='email' name='email' />

                <div className='buttons'>
                  <button onClick={clear} className='clear btn btn-warning'>CLEAR <FaWindowClose/></button>
                  <div className='separator'></div>
                  <button onClick={login} className='enter btn btn-success'>ENTER <FaUnlockAlt/></button>
                </div>
                <h6 className='error'>{error}</h6>
              </div>
              

              <div className='imageRightDivLogin'>
                <img alt='atm' className='imageRightLogin' src={pin} />
              </div>
            </div>
           

        
        </div>

      </>
    );
  }

  export default Login;
