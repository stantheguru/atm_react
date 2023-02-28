import '../App.css';

import money from './assets/money.png'
import logo from './assets/red.png'
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleRight} from 'react-icons/fa';



function Finish() {
  const navigate = useNavigate()

  const getStarted = () => {
    navigate("/thank_you")
  };

  return (
    <>
      

        <div className='outerFinish'>

        <img alt='logo' className='logoFinish' src={logo} />


          <div className='cardFinish'>
            <div className='cardOuterFinish'>
            <h5 className='pleaseTitle'>Please take your cash...</h5>
            <div className='cardInnerFinish'>
              <button onClick={getStarted} className='getstarted btn btn-success'>FINISH <FaArrowCircleRight/></button>
            </div>
            </div>
           

            <div className='imageRightDivFinish'>
              <img alt='atm' className='imageRightFinish' src={money} />
            </div>


          </div>
         
        </div>
      
    </>
  );
}

export default Finish;
