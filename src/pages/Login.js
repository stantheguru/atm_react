import '../App.css';
import { PinInput } from 'react-input-pin-code' // ES Module
import { useState, useRef } from 'react';
  




function Login() {
  const [values, setValues] = useState(['', '', '', ''])
  const ref = useRef(null);


  function enterPIN(){

  }

   const handleClick = () => {
   ref.current.focus()
  };
  
  return (
    <>
      <div className='title'>
      
      <div className='outerView'>
  
      <h4 className="header">RED PHOENIX BANK</h4>
       

       <div className='cardPin'>
    
        <h4 className="pinHeader">ENTER PIN</h4>
        
        <PinInput 
      ref={ref}
      values={values}
      size="lg"
    borderColor='#4865b8'
      onChange={(value, index, values) => setValues(values)}
    />
           <input placeholder='Enter email' className='email form-control' type='email' name='email'/>

           <div className='buttons'>
            <button className='btn btn-warning'>Clear</button>
            <div className='separator'></div>
            <button className='btn btn-success'>ENTER</button>
           </div>

       </div>
       </div>
      </div>

    </>
  );
}

export default Login;
