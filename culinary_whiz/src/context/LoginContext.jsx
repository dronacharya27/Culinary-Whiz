import React, { createContext, useContext, useReducer, useState } from 'react'
import LoginReducer from '../reducer/LoginReducer'
import { useCookies } from 'react-cookie';
import axios from 'axios'
const initiallogindata={
    name:'',
    email:'',
    password:'',
    re_password:''
}
const URL='https://culinary-whiz-backend.onrender.com/api/auth/'
const LoginContext = createContext()

const LoginContextProvider = ({children}) => {
    const[state,dispatch]=useReducer(LoginReducer,initiallogindata)
    const[error_msg,Seterror_msg]=useState([])
   


    const [cookie,setCookie,removeCookie] = useCookies(['token','refresh'])

    const handledata=(e)=>{
        const {name,value} = e.target
        dispatch({
            type:'handledata',
            payload:{name,value}
        })
       
    }

// SIGN UP
const handlesignup=async(loading,Setloading)=>{
    const url = URL+'users/'
    const {name,email,password,re_password} = state
    const data = {name,email,password,re_password}
    Setloading(true)
    try {
        const {data:res} = await axios.post(url,data)
        console.log(res);
        Setloading(false)
      } catch (error) {
        Setloading(false)
        console.log(error);
        const error_message = error.response.data
        let keys = []
        for (let key in error_message){
            if (error_message.hasOwnProperty(key)){
                keys.push(key)
            }
            keys.map(e=>
                Seterror_msg(error_message[e]))
            
        
       }
       
      }
    
}

// Login

const handlelogin=async(loginbtn,setLoginbtn,e,loading,Setloading)=>{
    
    const url = URL+'jwt/create/'
    const vurl = URL+'jwt/verify/'
    const {email,password} = state
    const data = {email,password}
    Setloading(!loading)
    
    try {
        const {data:res} = await axios.post(url,data)
        console.log(res);
        const data2 = {token:res.access}
        console.log(data2);
        try {
            const {data:response} = await axios.post(vurl,data2)
            console.log(response);
            setCookie('token',JSON.stringify(res.access))
            setCookie('refresh',JSON.stringify(res.refresh))
            
            setLoginbtn(!loginbtn)
            
           
        } catch (error) {
            console.log(error);
            
        }
        
        
      

      } catch (error) {
        console.log(error);
        const error_message = error.response.data
        let keys = []
        for (let key in error_message){
            if (error_message.hasOwnProperty(key)){
                keys.push(key)
            }
            keys.map(e=>
                Seterror_msg(error_message[e]))
            
        
       }
      }
}
console.log(error_msg);


// logout
const handlelogout=()=>{
    removeCookie("token")
}
  return (
    <LoginContext.Provider value={{handledata,state,handlesignup,error_msg,handlelogin,cookie,handlelogout}} >
        {children}
    </LoginContext.Provider>
  )
}

const useLoginContext=()=>{
    return useContext(LoginContext)
}
export {LoginContext,LoginContextProvider,useLoginContext}
