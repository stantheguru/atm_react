import '../App.css';
import logo from './assets/red.png'
import card from './assets/atm.png'
import { FaCreditCard, FaMoneyBill, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate, route } from 'react-router-dom';



function Home() {
 const navigate = useNavigate()


 
  return (
      <>
        <div className='app'>

          <div className='outerViewHome'>


            <img alt='logoHome' className='logoHome' src={logo} />

            <div className='cardInnerHome'>
              <div className='cardHomeButtons'>
                
              <div onClick={()=>navigate("/withdraw")} class="shadow-lg p-4 mb-5 bg-white rounded action">
            
              
                Withdraw Cash  <FaCreditCard/></div>
              <div onClick={()=>navigate("/balance")}  class="shadow-lg p-4 mb-5 bg-white rounded action">Check Balance <FaMoneyBill/>
              </div>
              <div onClick={()=>navigate("/transfer")} class="shadow-lg p-4 mb-5 bg-white rounded action">Transfer Funds <FaArrowCircleRight/></div>
              
              </div>
              

              <div className='imageRightDivHome'>
                <img alt='atm' className='imageRightHome' src={card} />
              </div>
            </div>
           

          </div>
        </div>

      </>
    );
  }

  export default Home;
