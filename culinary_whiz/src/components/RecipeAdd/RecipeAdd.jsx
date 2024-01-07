import React, { useEffect, useState } from 'react'
import './RecipeAdd.css'
import { useRecipeAddContext } from '../../context/RecipeAddContext'
import Navbar from '../Navbar/Navbar'
import { Camera, CameraIcon, MinusCircle, PlusCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'
import {ColorRing} from 'react-loader-spinner'

const RecipeAdd = () => {
    const {ingredientList,handleAddIngredient,handleRemoveIngredients,handleIngredientChange,handleAddStep,handleRemoveStep,handleStepChange,stepList,handleData,handleImg,postdata,load} = useRecipeAddContext()
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div className='recipeadd'>
        <Navbar/>
        <div className="artop"></div>
        <div className="arbottom">
        <div className="headers">
        <div className="recipeuheader">
            Contribute Your Culinary Brilliance
            </div>
            
            <div className='submitdiv'>
                <button className='submit' onClick={()=>postdata(navigate)}>Submit</button>
            </div>
            {load?
                    <div className="loaders" style={{position:'absolute',top:'50%'}}>
                        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
</div>:<></>}
        </div>
            
        <div className="recipeinputs">
            <div className="leftre">
            <div className="addimgbtn">
                <div className="fileinput">
                <input id='fileinput' type="file" multiple onChange={handleImg} accept="image/jpeg,image/png,image/gif" required/><CameraIcon width='30%'/> 

                </div>
            </div>

                <div className="rtitle">
                    <input type="text" placeholder='Recipe Name' name='name' onChange={handleData} required/>
                </div>
                <div className="rdesc" >
                    <textarea name="description" id="" cols="30" rows="10"  placeholder='Brief Description'onChange={handleData} required></textarea>
                   
                </div>
                <div className="rtime" >
                    <input name='time' type="text" placeholder='Cooking Time' onChange={handleData} required/>
                </div>
            </div>
            <div className="rightre">
                <div className="iheader">
                    <div>Ingredients</div>  <div>Steps</div>
                </div>
                <div className="ingrees">

               
                <div className="ingreinput">
                {ingredientList.map((singleIngredient,index)=>(
                
                <div key={index} className="recipeinput">
                   <div className="textinputs">
                   <input type="text" name="ingredient" id="ingredient" placeholder='Add Ingredients' value={singleIngredient.ingredient} onChange={(e)=>handleIngredientChange(e,index)} className='iinput'/>
                   </div>
               

                <div className="inputbtns">
                {ingredientList.length - 1===index && ingredientList.length <10 &&  <button className="add" onClick={handleAddIngredient}> <PlusCircle width='2vmax' color='#F48C06'/> </button>}
                    {ingredientList.length > 1 &&  <button className="removef" onClick={()=>handleRemoveIngredients(index)}> <MinusCircle width='2vmax' color='#F48C06'/> </button>} 
                </div>
                
                </div>
        
                    ))}

                </div>
                <div className="ingredisplay">
                    
                {stepList.map((singleStep,index)=>(
                
                <div key={index} className="Rrecipeinput">
                   <div className="rtextinputs">
                    <textarea   cols="30" rows="10" name="step" id="step" placeholder='Add Steps' value={singleStep.step} onChange={(e)=>handleStepChange(e,index)} className='iinput'></textarea>
                   </div>
               

                <div className="inputbtns">
                {stepList.length - 1===index && stepList.length <10 &&  <button className="add" onClick={handleAddStep}> <PlusCircle width='2vmax' color='#F48C06'/> </button>}
                    {stepList.length > 1 &&  <button className="removef" onClick={()=>handleRemoveStep(index)}> <MinusCircle width='2vmax' color='#F48C06'/> </button>} 
                </div>
                
                </div>
        
                    ))}
                    
                </div>
                </div>
            </div>
       
        </div>
            
        </div>
        
        
    </div>
  )
}

export default RecipeAdd
