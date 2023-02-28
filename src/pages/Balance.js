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

 function print(){
    var divToPrint=document.getElementById('receipt');


	var newWin=window.open('','Print-Window');
  
	newWin.document.open();
  
  
	newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
	divToPrint.style.display = "none"
	
	newWin.document.close();
	
	setTimeout(function(){newWin.close();
		window.location.replace("/thank_you")
		

	},0);

	
 
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
          <button onClick={print} className='printBal btn btn-success'>Print Receipt <FaPrint/></button>
        </div>

        



        
<div hidden id="receipt">
    <center><h3>RED PHEONIX BANK</h3></center>
    <center>P.O. Box 100 - 00100 Nairobi</center>
    <center>Tel: 0700627742</center>

    <center>
    <hr className='hr'></hr>
        <h4>BALANCE RECEIPT</h4>
       
        <hr className="hr"></hr>
    </center>

    <div>
        <center>
            <table width="100%">
               
            </table>
        </center>

        <center>
            <center>
            <hr className="hr"></hr>
            </center>
           
            <table width="80%">
                <thead>
                    <tr>
                        <th></th>
                      
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td className='receiptItem'  data-title="Item">Account Name</td>
                        
                        <td id="net_total" className='receiptItem'>Joe Dispensa</td>
                    </tr>
                    <tr>
                        <td className='receiptItem'>Account Name</td>
                        
                        <td id="vat" className='receiptItem'>1235969696</td>
                    </tr>

                    <tr className='receiptItem'>
                        <td className='receiptItem'>Available Balance</td>
                        
                        <td className='receiptItem'>5078.00</td>
                    </tr>

                    
                    

                    <tr>
                        <td className='receiptItem'>Actual Balance</td>
                        
                        <td id="cash" className='receiptItem'>5078.00</td>
                    </tr>

                    

                </tbody>
               
               
            </table>
            <center>
            <hr className="hr"></hr>
            </center>

           
            <div className='topStars'>
<h4>THANK YOU FOR BANKING WITH US</h4>
            </div>
        </center>
           
          
    </div>

    


    </div>

      </>
    );
  }

  export default Balance;
