import { createContext, useContext, useReducer } from "react";
import React, { useState } from 'react'
import RecipeAddReducer from "../reducer/RecipeAddReducer";
import axios from "axios";
import { useLoginContext } from "./LoginContext";
const RecipeAddContext = createContext()
const URL ='https://culinary-whiz-backend.onrender.com/recipe/'
const URL2= 'https://culinary-whiz-backend.onrender.com/api/auth/users/me/'
const TOKENURL='https://culinary-whiz-backend.onrender.com/api/auth/jwt/refresh/'
const RecipeAddContextProvider =({children})=>{
    
    const[data,setData]=useState({
       name:'', 
       description:'',
       time:'',
       uploaded_ingredient:'',
       uploaded_step:'',
        
    })
    const {cookie} = useLoginContext()
    const formdata = new FormData()

    const [img,setImg] = useState([])
    

    const [ingredientList,setIngredientList] = useState([{ingredient:''}])

    const [stepList,setStepList] = useState([{step:''}])
    
    console.log(ingredientList)
    console.log(stepList)
    console.log(data)
    console.log(img)
    const handleImg =(e)=>{
        const imag = e.target.files
        const imarray = Array.from(imag)
        setImg(imarray)
    }
    
    const handleData=(e)=>{
        const {name,value} = e.target
        setData({
            ...data,[name]:value,
        } )
       
        
    }


    const handleAddStep=()=>{
        setStepList([...stepList,{step:""}])
    }
    const handleRemoveStep=(index)=>{
        const ilist =[...stepList]
        ilist.splice(index,1)
        setStepList(ilist)
    }
    const handleStepChange=(e,index)=>{
        const {name,value} =e.target;
        const ilist =[...stepList]
        ilist[index][name]=value;
        setStepList(ilist)

    }

    const handleAddIngredient=()=>{
        setIngredientList([...ingredientList,{ingredient:""}])
    }
    const handleRemoveIngredients=(index)=>{
        const ilist =[...ingredientList]
        ilist.splice(index,1)
        setIngredientList(ilist)
    }
    const handleIngredientChange=(e,index)=>{
        const {name,value} =e.target;
        const ilist =[...ingredientList]
        ilist[index][name]=value;
        setIngredientList(ilist)

    }


// Add Recipe
const postdata = async(navigate)=>{
    const tempingredient = ingredientList.map((e)=>{
        return e['ingredient']
    })
    const tempstep = stepList.map((e)=>{
        return e['step']
    })
   
    const refreshdata = {
        refresh:cookie.refresh
    }
    const {data:res3} = await axios.post(TOKENURL,refreshdata)
    console.log(res3)
    const token = res3.access
    try {
        const {data:res2} = await axios.get(URL2,{
            headers:{
                Authorization:`JWT ${token}`
            }
        })
        console.log(res2)
        const user = res2.id

        formdata.append("user",user)
        formdata.append("name",data.name)
        formdata.append("description",data.description)
        formdata.append("time",data.time)
        tempingredient.map(e=>formdata.append("uploaded_ingredient",e))
        tempstep.map(e=>formdata.append("uploaded_step",e))
        // formdata.append("uploaded_images",img )
        img.map(e=>formdata.append('image',e))
        
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        try {
            const {data:res} = await axios.post(URL,formdata)
            console.log(res)
            navigate('/recipes')
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
        
}

   return(<RecipeAddContext.Provider value={{ingredientList,handleAddIngredient,handleRemoveIngredients,handleIngredientChange,handleAddStep,handleRemoveStep,handleStepChange,stepList,handleData,handleImg,postdata}}>
        {children}
    </RecipeAddContext.Provider>)
}

const useRecipeAddContext=()=>{
    return useContext(RecipeAddContext)
}

export {RecipeAddContext,RecipeAddContextProvider,useRecipeAddContext}