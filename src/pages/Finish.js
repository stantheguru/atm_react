import '../App.css';

import money from './assets/money.png'
import logo from './assets/red.png'
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight} from 'react-icons/fa';
import * as base from '../env'
import { useState, useEffect } from 'react';

var url = base.BASE_URL




function Finish() {
  const navigate = useNavigate()
  const [data, setData] = useState({})
  var transaction = sessionStorage.getItem("transaction")
  var jtransaction = JSON.parse(transaction)
  const [title, setTitle] = useState("Please take your cash...")

  function checkLogin(){
 
    if(sessionStorage.getItem("session")===null){
      navigate("/")
    }
   }


   
const fetchData=async()=>{
  var session = sessionStorage.getItem("session")
  var jsession = JSON.parse(session)
  if(jtransaction.Type==="transfer"){
    setTitle("Press FINISH to finish transaction...")
  }else{
setTitle("Please take your cash...")
  }


  var formData = new FormData()
      formData.append("Email", jsession.Email)
 

      const response = await fetch(url+"/balance", {
        method: 'POST',
        body: formData,
        
    });

    const json = await response.json();
    setData(json)
    //await new Promise(resolve => setTimeout(resolve, 1000));
}
/* eslint-disable */
  useEffect(()=>{
    checkLogin()
fetchData()
  }, [])
  

  function print(){
    if(jtransaction.Type==="withdraw"){
        var divToPrint = ""
    divToPrint=document.getElementById('receipt');
    }else{
      divToPrint=document.getElementById('receiptTransfer');
    }


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
      

        <div className='outerFinish'>

        <img alt='logo' className='logoFinish' src={logo} />


          <div className='cardFinish'>
            <div className='cardOuterFinish'>
            <h5 className='pleaseTitle'>{title}</h5>
            <div className='cardInnerFinish'>
              <button onClick={print} className='getstarted btn btn-success'>FINISH <FaArrowCircleRight/></button>
            </div>
            </div>
           

            <div className='imageRightDivFinish'>
              <img alt='atm' className='imageRightFinish' src={money} />
            </div>


          </div>
         
        </div>
      
             
<div hidden id="receipt">
    <center><h3>RED PHEONIX BANK</h3></center>
    <center>P.O. Box 100 - 00100 Nairobi</center>
    <center>Tel: 0700627742</center>

    <center>
    <hr className='hr'></hr>
        <h4>WITHDRAWAL RECEIPT</h4>
       
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
                        
                        <td id="net_total" className='receiptItem'><b>{data.AccountName}</b></td>
                    </tr>

                    <tr>
                        <td className='receiptItem'  data-title="Item">Amount</td>
                        
                        <td id="net_total" className='receiptItem'><b>{jtransaction!=null?jtransaction.Amount:0}</b></td>
                    </tr>
                    <tr>
                        <td className='receiptItem'>Account Name</td>
                        
                        <td id="vat" className='receiptItem'><b>{data.AccountNumber}</b></td>
                    </tr>

                    <tr className='receiptItem'>
                        <td className='receiptItem'>Available Balance</td>
                        
                        <td className='receiptItem'><b>{data.AvailableBalance}</b></td>
                    </tr>

                    
                    

                    <tr>
                        <td className='receiptItem'>Actual Balance</td>
                        
                        <td id="cash" className='receiptItem'><b>{data.ActualBalance}</b></td>
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


                
<div hidden id="receiptTransfer">
    <center><h3>RED PHEONIX BANK</h3></center>
    <center>P.O. Box 100 - 00100 Nairobi</center>
    <center>Tel: 0700627742</center>

    <center>
    <hr className='hr'></hr>
        <h4>TRANSFER RECEIPT</h4>
       
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
                        
                        <td id="net_total" className='receiptItem'><b>{jtransaction!=null?jtransaction.AccountName:0}</b></td>
                    </tr>

                    <tr>
                        <td className='receiptItem'  data-title="Item">Amount</td>
                        
                        <td id="net_total" className='receiptItem'><b>{jtransaction!=null?jtransaction.Amount:0}</b></td>
                    </tr>
                    <tr>
                        <td className='receiptItem'>Account Number</td>
                        
                        <td id="vat" className='receiptItem'><b>{jtransaction!=null?jtransaction.AccountNumber:0}</b></td>
                    </tr>

                    <tr className='receiptItem'>
                        <td className='receiptItem'>Available Balance</td>
                        
                        <td className='receiptItem'><b>{data.AvailableBalance}</b></td>
                    </tr>

                    
                    

                    <tr>
                        <td className='receiptItem'>Actual Balance</td>
                        
                        <td id="cash" className='receiptItem'><b>{data.ActualBalance}</b></td>
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

export default Finish;
