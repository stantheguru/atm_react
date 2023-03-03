import '../App.css';

import thank from './assets/thankyou.png'
import logo from './assets/red.png'
import { useNavigate } from 'react-router-dom';
import { FaHome, FaWindowClose } from 'react-icons/fa';
import { useEffect } from 'react';



function ThankYou() {
  const navigate = useNavigate()

  function checkLogin() {

    if (sessionStorage.getItem("session") === null) {
      navigate("/")
    }
  }

  useEffect(() => {
    checkLogin()
  })

  const exit = () => {
    sessionStorage.removeItem("session")
    sessionStorage.removeItem("transaction")
    navigate("/")
  };


  const home = () => {
    navigate("/home")
  };

  return (
    <>


      <div className='outerThankYou'>

        <img alt='logo' className='logoThank' src={logo} />


        <div className='cardThankYou'>
          <div className='cardOuterThankYou'>
            <h6 className='thankTitle'>Thank you for Banking with us</h6>
            <div className='cardInnerThankYou'>
              <button onClick={home} className='homeButton btn btn-success'>HOME <FaHome /></button>
              <button onClick={exit} className='exitButton btn btn-danger'>EXIT <FaWindowClose /></button>
            </div>
          </div>


          <div className='imageRightDivThankYou'>
            <img alt='thankyou' className='imageRightThankYou' src={thank} />
          </div>


        </div>

      </div>

    </>
  );
}

export default ThankYou;
