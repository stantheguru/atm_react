import '../App.css';
import logo from './assets/red.png'
import { useState } from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight, FaPrint, FaWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';




function Balance() {
 const navigate = useNavigate()
 const [other_amount, setAmount] = useState("")
 const [error, setError] = useState("")

 function go(amount){
  
    navigate("/take_card")
 }

 function submitOther(){
  if(other_amount==""){
    setError("Please enter amount");
  }else if(other_amount<500){
    setError("Amount should be at least KES500")
  }else if(other_amount>40000){
    setError("Amount cannot exceed 40,000")
  }else{
    navigate("/take_card")
  }

 }

  return (
      <>
       

          <div className='outerViewBalance'>

          <button onClick={()=>navigate("/home")} className='back btn btn-warning balanceBack'><FaArrowCircleLeft class='#F0182D'/></button>
            <img alt='logo' className='logoBalance' src={logo} />
            <button onClick={()=>navigate("/")} className='back btn btn-warning balanceExit'><FaWindowClose color='#F0182D'/></button>

            <div className='cardInnerBalance'>
              <div className='cardBalanceLeft'>
                
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balItem">ACCOUNT NAME</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balItem">ACCOUNT NUMBER</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balItem">AVAILABLE BALANCE</div>
              <div className="shadow-lg p-4 mb-5 bg-white rounded balItem">ACTUAL BALANCE</div>

              </div>
              

              <div className='cardBalanceRight'>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">JOE DISPENSA</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">0373839399</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">30,000.00</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">30,000.00</div>
              
             
              
             
              
            </div>
           
              
          </div>
          <button  className='printBal btn btn-success'>Print Receipt <FaPrint/></button>
        </div>

      </>
    );
  }

  export default Balance;
