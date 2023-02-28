import '../App.css';
import { PinInput } from 'react-input-pin-code' // ES Module
import { useState } from 'react';
import logo from './assets/red.png'
import pin from './assets/cards.png'
import { useNavigate } from 'react-router-dom';
import { FaWindowClose, FaUnlockAlt, FaArrowCircleRight } from 'react-icons/fa';



function Transfer() {
  const [account, setAccount] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function clear() {
    //clear fields
    setAccount('')
    setAmount("")

  }
  const transfer = async () => {
    try {
      
      //validate pin
      if (account === "") {
        setError("Please enter Recipient's Account Number")
      } else if (account.length < 6) {
        setError("Account nust be 6 digits")
      } 
      //validate email
      else if (amount === "") {
        setError("Please enter amount")
      } else if (amount<100) {
        setError("The amount should be at least 100 shillings")
      } else  {
        setError("")
        //Authenticate User

        var formData = new FormData()
        formData.append("account", account)
        formData.append("amount", amount)
        navigate("/thank_you")
        
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

                <h4 className="pinHeader">TRANSFER FUNDS</h4>

                
                <input min={1} value={account} onChange={(e) => setAccount(e.target.value)} 
                placeholder="Enter Recipient's Account Number" className='email form-control'
                 type='number' name='account' />

<input value={amount} min={100} onChange={(e) => setAmount(e.target.value)} 
                placeholder="Enter Amount" className='email form-control'
                 type='number' name='amount' />

                <div className='buttons'>
                  <button onClick={clear} className='clear btn btn-warning'>CLEAR <FaWindowClose/></button>
                  <div className='separator'></div>
                  <button onClick={transfer} className='enter btn btn-success'>SUBMIT <FaArrowCircleRight/></button>
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

  export default Transfer;
