import '../App.css';
import logo from './assets/red.png'
import { useEffect, useState } from 'react';
import {FaArrowCircleLeft, FaPrint, FaWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as base from '../env'


var url = base.BASE_URL



function Balance() {
 const navigate = useNavigate()
 const [data, setData] = useState({})

 async function fetchData(){
  var session = sessionStorage.getItem("session")
    var jsession = JSON.parse(session)
  var formData = new FormData()
        formData.append("Email", jsession.Email)
   

        const response = await fetch(url+"/balance", {
          method: 'POST',
          body: formData,
          
      });

      const json = await response.json();
      setData(json)
     

 }

 function checkLogin(){
 
  if(sessionStorage.getItem("session")===null){
    navigate("/")
  }
 }


 /* eslint-disable */
 useEffect(()=>{
  checkLogin()
  fetchData()
 },[])

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
            <img onClick={()=>navigate("/home")} alt='logo' className='logoBalance' src={logo} />
            <button onClick={()=>navigate("/")} className='back btn btn-warning balanceExit'><FaWindowClose color='#F0182D'/></button>

            <div className='cardInnerBalance'>
              <div className='cardBalanceLeft'>
                
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balItem">ACCOUNT NAME</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balItem">ACCOUNT NUMBER</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balItem">AVAILABLE BALANCE</div>
              <div className="shadow-lg p-4 mb-5 bg-white rounded balItem">ACTUAL BALANCE</div>

              </div>
              

              <div className='cardBalanceRight'>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">{data.AccountName}</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">{data.AccountNumber}</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">{data.AvailableBalance}</div>
              <div  className="shadow-lg p-4 mb-5 bg-white rounded balValue">{data.ActualBalance}</div>
              
             
              
             
              
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
                        
                        <td id="net_total" className='receiptItem'>{data.AccountName}</td>
                    </tr>
                    <tr>
                        <td className='receiptItem'>Account Name</td>
                        
                        <td id="vat" className='receiptItem'>{data.AccountNumber}</td>
                    </tr>

                    <tr className='receiptItem'>
                        <td className='receiptItem'>Available Balance</td>
                        
                        <td className='receiptItem'>{data.AvailableBalance}</td>
                    </tr>

                    
                    

                    <tr>
                        <td className='receiptItem'>Actual Balance</td>
                        
                        <td id="cash" className='receiptItem'>{data.ActualBalance}</td>
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
