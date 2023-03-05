import '../App.css';
import { useState } from 'react';
import logo from './assets/red.png'
import { FaWindowClose, FaArrowCircleRight } from 'react-icons/fa';
import * as base from "../env";



var url = base.BASE_URL



function Register() {
    const [account, setAccount] = useState("")
    const [email, setEmail] = useState("")

    const [limit, setLimit] = useState("")
    const [ID, setID] = useState("")
    const [KRAPIN, setKRA] = useState("")
    const [PIN, setPIN] = useState("")
    const [mobile, setMobile] = useState("")

    const [name, setName] = useState("")
    const [actual_balance, setActual] = useState("")
    const [available_balance, setAvailable] = useState("")

    const [error, setError] = useState("")
    
    /* eslint-disable */
    function clear() {
        //clear fields
        setAccount('')
        setEmail("")
        setLimit("")
        setName("")
        setActual("")
        setAvailable("")
        setID("")
        setKRA("")
        setPIN("")
        setMobile("")

    }
    const register = async () => {
        setError("")
        try {
           
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            let kraReg = /^[A-Z]\d{9}[A-Z]$/;
            //validate pin
            if (email === "") {
                setError("Please enter email")
            } else if (reg.test(email) === false) {
                setError("The email is invalid")
                return false;
            } else if (account === "") {
                setError("Please enter Account Number")
            } else if (account.length < 6) {
                setError("Account Number must be at least 6 digits")
            }else if (ID === "") {
                setError("Please enter ID Number")
            } else if (ID.length < 5) {
                setError("ID Number must be at least 5 digits")
            }else if (KRAPIN === "") {
                setError("Please enter KRA PIN")
            } else if (kraReg.test(KRAPIN)===false) {
                setError("KRA PIN is invalid")
            }else if (PIN === "") {
                setError("Please enter Authentication PIN")
            } else if (PIN.length <4 || PIN.length>4) {
                setError("Authentication PIN must be 4 digits")
            } else if(mobile===""){
                setError("Please enter mobile number")
            }else if(mobile.length<9){
                setError("Mobile number is invalid!")
            }
            else if (limit.startsWith("Select") || limit === "") {
                setError("Please select Withdrawal Limit")
            }else if (actual_balance === "") {
                setError("Please enter Actual balance")
            } else if (actual_balance < 100) {
                setError("Actual balance must be at least 100 shillings")
            }else if (available_balance === "") {
                setError("Please enter Availble balance")
            } else if (available_balance < 100) {
                setError("Available balance must be at least 100 shillings")
            }


            //validate email
            else {
                setError("")
                //Authenticate User

                var formData = new FormData()
                formData.append("Email", email)
                formData.append("AccountNumber", account)
                formData.append("AccountName", name)
                formData.append("Limit", limit)
                formData.append("ActualBalance", actual_balance)
                formData.append("AvailableBalance", available_balance)
                formData.append("KRAPIN", KRAPIN)
                formData.append("PIN", PIN)
                formData.append("ID", ID)
                formData.append("MobileNumber", "254"+mobile)


                const response = await fetch(url+"/register", {
                    method: 'POST',
                    body: formData,
                    
                });
          
                const json = await response.json();
                var success = json.success
               
                
                if(success ==="saved"){
                    alert("Customer has been registerd successfully")
                }else if(success ==="Email exists"){
                    setError("Email exists! Please use a different one")
                }else if(success === "Account exists"){
                    setError("Account exists! Please use a different one")
                }else{
                    setError("An error occurred!")
                }
                

            }
        } catch (e) {
            alert(e)
        }

    }


    return (
        <>

            <div className='outerViewRegister'>
                <img alt='logo' className='logoRegister' src={logo} />
                <h4 className="registerHeader">REGISTER CUSTOMER</h4>
                <div className='cardInnerRegister'>

                    <div className='cardRegisterLeft'>
                        <input min={1} value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Account Name" className='registerField form-control'
                            type='text' name='name' />

                        <input min={1} value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email" className='registerField form-control'
                            type='email' name='email' />

                        <input value={account} min={100} onChange={(e) => setAccount(e.target.value)}
                            placeholder="Enter Acccount Number" className='registerField form-control'
                            type='number' name='actual' />

<input value={ID} min={1} onChange={(e) => setID(e.target.value)}
                            placeholder="Enter ID Number" className='registerField form-control'
                            type='number' name='actual' />

                            
<input value={KRAPIN}  onChange={(e) => setKRA(e.target.value)}
                            placeholder="Enter KRA PIN" className='registerField form-control'
                            type='text' name='actual' />



                    </div>
                    <div className='cardRegisterRight'>
                        
<input value={PIN} min={1} onChange={(e) => setPIN(e.target.value)}
                            placeholder="Enter First PIN" className='registerField form-control'
                            type='number' name='actual' />

<div className="textfield">
<label className='labelCode'>+254</label>
<input value={mobile} min={1} maxlength="9" onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter Mobile Number" 
                            type='text' name='mobilenumber' />
</div>


                        <select onChange={(e) => setLimit(e.target.value)} class="registerField form-select" aria-label="Default select example">
                            <option selected>Select Withdrawal Limit</option>
                            <option value="20000">20,000</option>
                            <option value="40000">40,000</option>

                        </select>

                        <input min={100} value={actual_balance} onChange={(e) => setActual(e.target.value)}
                            placeholder="Enter Actual Balance" className='registerField form-control'
                            type='number' name='actual_balance' />
                        <input min={100} value={available_balance} onChange={(e) => setAvailable(e.target.value)}
                            placeholder="Enter Available Balance" className='registerField form-control'
                            type='number' name='availablebalance' />


                    </div>
                </div>
                <div className='buttonsRegister'>
                    <button onClick={clear} className='clearRegister btn btn-warning'>CLEAR <FaWindowClose /></button>
                    <div className='separator'></div>
                    <button onClick={register} className='enterRegister btn btn-success'>SUBMIT <FaArrowCircleRight /></button>
                </div>
                <h6 className='errorRegister'>{error}</h6>



            </div>

        </>
    );
}

export default Register;
