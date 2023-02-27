import '../App.css';

import atm from './assets/atm.jpg'
import logo from './assets/red.png'
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight} from 'react-icons/fa';



function Welcome() {
  const navigate = useNavigate()

  const getStarted = () => {
    navigate("login")
  };

  return (
    <>
      

        <div className='outerHome'>

          <h4 className="headerWelcome">Welcome <span className="spanTo">to</span></h4>
          <h4 className="headerName">Red Phoenix Bank</h4>



          <div className='cardHome'>

            <div className='cardLogo'>
              <button onClick={getStarted} className='getstarted btn btn-success'>GET STARTED <FaArrowCircleRight/></button>
            </div>

            <div className='imageRightDiv'>
              <img alt='atm' className='imageRight' src={atm} />
            </div>


          </div>
          <img alt='logo' className='logo' src={logo} />
        </div>
      
    </>
  );
}

export default Welcome;
