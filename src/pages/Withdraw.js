import '../App.css';
import logo from './assets/red.png'
import { useState } from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';




function Withdraw() {
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
        <div className='app'>

          <div className='outerViewWithdraw'>

          <button onClick={()=>navigate("/home")} className='back btn btn-warning'><FaArrowCircleLeft color='#F0182D'/></button>
            <img alt='logo' className='logoWithdraw' src={logo} />

            <div className='cardInnerWithdraw'>
              <div className='cardWithdrawLeft'>
                
              <div onClick={(amount)=>go(1000)} className="shadow-lg p-4 mb-5 bg-white rounded action">1,000.00</div>
              <div onClick={(amount)=>go(2000)} className="shadow-lg p-4 mb-5 bg-white rounded action">2,000.00</div>
              <div onClick={(amount)=>go(5000)} className="shadow-lg p-4 mb-5 bg-white rounded action">5,000.00</div>
              
              </div>
              

              <div className='cardWithdrawRight'>
              <div onClick={(amount)=>go(10000)} className="shadow-lg p-4 mb-5 bg-white rounded action">10,000.00</div>
              <div onClick={(amount)=>go(20000)} className="shadow-lg p-4 mb-5 bg-white rounded action">20,000.00</div>
              <div onClick={(amount)=>go(30000)} className="shadow-lg p-4 mb-5 bg-white rounded action">30,000.00</div>
              
             
              
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
