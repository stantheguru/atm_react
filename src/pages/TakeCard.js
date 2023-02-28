import '../App.css';

import atm from './assets/atm.png'
import logo from './assets/red.png'
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight} from 'react-icons/fa';



function TakeCard() {
  const navigate = useNavigate()

  const getStarted = () => {
    navigate("/finish")
  };

  return (
    <>
      

        <div className='outerTakeCard'>

        <img alt='logoTakeCard' className='logoTakeCard' src={logo} />


          <div className='cardTakeCard'>
            <div className='cardOuterTakeCard'>
            <h5 className='pleaseTitle'>Please take your card...</h5>
            <div className='cardInnerTakeCard'>
              <button onClick={getStarted} className='getstarted btn btn-success'>CONTINUE <FaArrowCircleRight/></button>
            </div>
            </div>
           

            <div className='imageRightDivTakeCard'>
              <img alt='atm' className='imageRightTakeCard' src={atm} />
            </div>


          </div>
         
        </div>
      
    </>
  );
}

export default TakeCard;
