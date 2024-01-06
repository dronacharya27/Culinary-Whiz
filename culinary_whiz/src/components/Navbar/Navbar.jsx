import React from 'react'
import './Navbar.css'
import { useLoginContext } from '../../context/LoginContext'
import {LogOut, Settings, Utensils, UtensilsCrossed} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useFilterContext } from '../../context/FilterContext'
const Navbar = () => {
  const{cookie,handlelogout}=useLoginContext()
  const{filters,updateFilterValue} = useFilterContext()
  const{loginbtn,setLoginbtn}=useLoginContext()
  const navigate = useNavigate()

 const handleLoginbtn=()=>{
  setLoginbtn(!loginbtn)
 }
  return (
    <>
    {cookie.token?<div className='mainnav'>
    <div className="rightnav">
    <Link to='/' ><div className="logo2">
        <img src="/Navbar/logo1.png" alt="" />
        </div>
        <div className="logo1">
        <img src="/Navbar/logo.png" alt="" />
        </div>
        </Link>
      </div>
      <div className="leftnav leftnavloggedin">
        <div className="search">
          <div className="sinput">
            <input type="text" name='text' placeholder='Find your flavours' value={filters.text} onChange={(e)=>updateFilterValue(e,navigate)}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#dc2f02" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
          </div>
        </div>
        <div className="login loggedin">
        <div className="loginbtn">
          <Link to='/add-recipe'> <button> <UtensilsCrossed width='2vmax'/>  </button></Link>
          </div>
         
          <div className="loginbtn">
            <button> <Settings width='2vmax'/> </button>
          </div>
          <div className="loginbtn">
            <button onClick={()=>handlelogout()}> <LogOut width='2vmax'/> </button>
          </div>
          
        </div>
        </div>      
    </div>:<div className='mainnav'>
      
    <Link to='/' ><div className="rightnav">
      <div className="logo2">
        <img src="/Navbar/logo1.png" alt="" />
        </div>
        <div className="logo1">
        <img src="/Navbar/logo.png" alt="" />
        </div>
        
      </div></Link>
      <div className="leftnav">
        <div className="search">
          <div className="sinput">
            <input type="text" name='text' placeholder='Find your flavours' value={filters.text} onChange={(e)=>{updateFilterValue(e,navigate); }} />
            <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#dc2f02" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
          </div>
        </div>
        <div className="login" onClick={handleLoginbtn}>
          <div className="loginbtn">
            <button>LOGIN</button>
          </div>
        </div>
        </div>      
    </div>}
    
    </> )
}

export default Navbar
