import '../App.css';
import { useState, useEffect } from 'react';
import logo from './assets/red.png'
import pin from './assets/cards.png'
import { useNavigate } from 'react-router-dom';
import { FaWindowClose, FaArrowCircleRight } from 'react-icons/fa';
import * as base from '../env'


var url = base.BASE_URL



function Transfer() {
  const [account, setAccount] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function checkLogin(){
 
    if(sessionStorage.getItem("session")===null){
      navigate("/")
    }
   }
  /* eslint-disable */
   useEffect(()=>{
  checkLogin()
   }, [])

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
      } else if (amount < 100) {
        setError("The amount should be at least 100 shillings")
      } else {
        setError("")
        //Transfer funds
        var session = sessionStorage.getItem("session")
        var jsession = JSON.parse(session)

        var formData = new FormData()
        formData.append("SenderEmail", jsession.Email)
        formData.append("RecipientAccount", account)
        formData.append("Amount", amount)

        



        const response = await fetch(url + "/transfer", {
          method: 'POST',
          body: formData,

        });

        const json = await response.json();
        var success = json.success
        var raccount = json.account
        if(success ==="Request success"){
          sessionStorage.removeItem("transaction")
          var transaction = '{"Type":"transfer","Amount":"' + amount + '", "AccountName":"' + raccount + '", "AccountNumber":"' + account + '"}'
          sessionStorage.setItem("transaction", transaction)
          navigate("/take_card")
        }else if (success === "No enough funds"){
          setError("You do not have enough funds")
        }else if (success === "Request failed"){
          setError("The transaction failed! Try again")
        }else{
          setError("An error occurred")
        }
        //navigate("/thank_you")

      }
    } catch (e) {
      alert(e)
    }

  }


  return (
    <>

      <div className='outerView'>


        <img onClick={()=>navigate("/home")} alt='logo' className='logo' src={logo} />

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
              <button onClick={clear} className='clear btn btn-warning'>CLEAR <FaWindowClose /></button>
              <div className='separator'></div>
              <button onClick={transfer} className='enter btn btn-success'>SUBMIT <FaArrowCircleRight /></button>
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
