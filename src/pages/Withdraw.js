import '../App.css';
import logo from './assets/red.png'
import { useState, useEffect } from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as base from '../env'

var url = base.BASE_URL




function Withdraw() {
 const navigate = useNavigate()
 const [other_amount, setAmount] = useState("")
 const [error, setError] = useState("")
 var session = sessionStorage.getItem("session")
    var jsession = JSON.parse(session)

    function checkLogin(){
 
      if(sessionStorage.getItem("session")===null){
        navigate("/")
      }
     }
    /* eslint-disable */
     useEffect(()=>{
    checkLogin()
     }, [])

 function go(amount){
  withdraw(amount)
    //navigate("/take_card")
 }

 async function withdraw(amount){
  try{
    
    
    var formData = new FormData()
        formData.append("CustomerID", jsession.CustomerID)
        formData.append("Amount", amount)
        

        const response = await fetch(url+"/withdraw", {
          method: 'POST',
          body: formData,
          
      });

      const json = await response.json();
      var success = json.success
      if(success ==="Request success"){
        sessionStorage.removeItem("transaction")
        var transaction = '{"Type":"withdraw","Amount":"' + amount + '"}'
        sessionStorage.setItem("transaction", transaction)
        navigate("/take_card")
      }else if (success === "No enough funds"){
        setError("You do not have enough funds")
      }else if (success === "Request failed"){
        setError("The transaction failed! Try again")
      }else{
        setError("An error occurred")
      }
   
   
  }catch(e){
    alert(e)
  }
 }

 function submitOther(){
  
  if(other_amount===""){
    setError("Please enter amount");
  }else if(other_amount<500){
    setError("Amount should be at least KES500")
  }else if(other_amount>jsession.Limit){
    setError("Amount cannot exceed your Withdraw limit of KES"+jsession.Limit)
  }else{
    setError("")
    withdraw(other_amount)
    
  }

 }

  return (
      <>
        <div className='app'>

          <div className='outerViewWithdraw'>

          <button onClick={()=>navigate("/home")} className='back btn btn-warning'><FaArrowCircleLeft color='#F0182D'/></button>
            <img onClick={()=>navigate("/home")} alt='logo' className='logoWithdraw' src={logo} />

            <div className='cardInnerWithdraw'>
              <div className='cardWithdrawLeft'>
                
              <div onClick={(amount)=>go(1000)} className="shadow-lg p-4 mb-5 bg-white rounded action">1,000.00</div>
              <div onClick={(amount)=>go(2000)} className="shadow-lg p-4 mb-5 bg-white rounded action">2,000.00</div>
              <div onClick={(amount)=>go(5000)} className="shadow-lg p-4 mb-5 bg-white rounded action">5,000.00</div>
              
              </div>
              

              <div className='cardWithdrawRight'>
              <div onClick={(amount)=>go(10000)} className="shadow-lg p-4 mb-5 bg-white rounded action">10,000.00</div>
              <div onClick={(amount)=>go(15000)} className="shadow-lg p-4 mb-5 bg-white rounded action">15,000.00</div>
              <div onClick={(amount)=>go(20000)} className="shadow-lg p-4 mb-5 bg-white rounded action">20,000.00</div>
              
             
              
              </div>
              
            </div>
           
              <h6 className='otherTitle'>OTHER AMOUNT</h6>
              <div className="shadow-lg p-4 mb-5 bg-white rounded otherAmount">
               
               <input onChange={(e)=>setAmount(e.target.value)} placeholder='eg. 1500' className='other' type='number' />
               <button onClick={submitOther} className='btn btn-success buttonGo'>GO <FaArrowCircleRight/></button>
             </div>
             <h6 className='errorAmount'>{error}</h6>
          </div>
        </div>

      </>
    );
  }

  export default Withdraw;
