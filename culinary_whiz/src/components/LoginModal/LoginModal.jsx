import React, { useState } from 'react'
import './LoginModal.css'
import {ColorRing} from 'react-loader-spinner'
import { useLoginContext } from '../../context/LoginContext'
const LoginModal = ({loginbtn,setLoginbtn}) => {
    const [loading,Setloading]=useState(false)
    const [signup,setSignup]=useState(false)
    const {state,handledata,handlesignup,error_msg,handlelogin} = useLoginContext()
    const handlesignupbtn=()=>{
        
        setSignup(!signup)
    }
    const enterlogin=(e)=>{
        if(e.key=='Enter'){
            handlelogin(loginbtn,setLoginbtn)
        }
    }
  
  return (
<>
    {loginbtn?
    
    <div className='loginmodal' >
        <div className="click" onClick={()=>setLoginbtn(!loginbtn)}></div>
        {signup? <div className="modaldiv">
        <div className="mheader">
            <div>SIGNUP</div></div>
        <div className="minput">
        <div className="namediv idiv">
             
             <input type="text" name='name' id='name' placeholder='Name' onChange={handledata}/>
         </div>
            <div className="emaildiv idiv">
             
                <input type="text" name='email' id='email' placeholder='Email' onChange={handledata}/>
            </div>
           
            <div className="passdiv idiv">
            
                <input type="password" name='password' id='password' placeholder='Password' onChange={handledata}/>
            </div>
            <div className="passdiv idiv">
            
            <input type="password" name='re_password' id='re_password' placeholder='Retype Password' onChange={handledata}/>
        </div>
        {loading?<div className="loaders">
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
        </div>:<p></p>}
        <div className='errormsg'>
        {error_msg[0]}
                    </div>
            <div className='loginsubmitbtn idiv'>
                <button type="submit" onClick={()=>handlesignup(loading,Setloading)}>Sign Up</button>
                
            </div>
            <div className='signup' >
                <button onClick={handlesignupbtn}>Already Have an account? Log-In here.</button>
            </div>

        </div>
    
    </div>: <div className="modaldiv">
        <div className="mheader">
            <div>LOGIN</div></div>
        <div className="minput" onKeyDown={(e)=>enterlogin(e)}>
            <div className="emaildiv idiv">
                <input type="text" name='email' id='email' placeholder='Email' onChange={handledata}/>
            </div>

            <div className="passdiv idiv">
                <input type="password" name='password' id='password' placeholder='Password'  onChange={handledata}/>
            </div>
            {loading?<div className="loaders">
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
        </div>:<p></p>}
            
            <div className='errormsg'>
        {error_msg}
                    </div>
            <div className='loginsubmitbtn idiv'>
                <button type="submit" onClick={()=>handlelogin(loginbtn,setLoginbtn,loading,Setloading)}>LogIn</button>
                
            </div>
            <div className='signup' >
                <button onClick={handlesignupbtn}>Don't have an account? Sign-Up here.</button>
            </div>

        </div>
    
    </div>}
   
</div>:<div> {console.log(loginbtn)}

</div>}
</>
    
  )
}

export default LoginModal
