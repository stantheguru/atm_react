import '../App.css';

import atm from './assets/atm.jpg'
import logo from './assets/red.png'
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight} from 'react-icons/fa';
import { useEffect } from 'react';



function Welcome() {
  const navigate = useNavigate()
/* eslint-disable */
  function checkLogin(){
 
    if(sessionStorage.getItem("session")===null){
      navigate("/")
    }else{
      navigate("/home")
    }
   }
  
   useEffect(()=>{
  checkLogin()
   },[])

  const getStarted = () => {
    navigate("login")
  };

  return (
    <>
      

        <div className='outerHome'>

          <h4 className="headerWelcome">Welcome <span className="spanTo">to</span></h4>
          <h4 className="headerName">Red Phoenix Bank</h4>


          <div className='cardTakeCard'>
            <div className='cardOuterTakeCard'>
            <h5 className='pleaseTitle'>Please insert your card...</h5>
            <div className='cardInnerTakeCard'>
              <button onClick={getStarted} className='getstarted btn btn-success'>CONTINUE <FaArrowCircleRight/></button>
            
            </div>
            </div>
           

            <div className='imageRightDivTakeCard'>
              <img alt='atm' className='imageRightTakeCard' src={atm} />
              
            </div>


          </div>


          <img alt='logo' className='logo' src={logo} />
        </div>
      
    </>
  );
}

export default Welcome;
