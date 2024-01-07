import React, { useEffect } from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useRecipeContext } from '../../context/RecipeContext'
const Recipe = () => {
  const{id}=useParams()
  const {recipes} = useRecipeContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    <div className='recipemain'>
      
        {recipes.filter((e)=>e.id==id).map((k)=>(

          <>
          <div className="rtop"></div>
        <div className="rbottom">
        
            <div className="nd">
                <div className='recipename'>
                    {k.name}
                </div>
                <div className='description'>
                  {k.description}
                </div>
            </div>
            <div className="rimg"> 
            <img src={k.image} alt="" />
            </div>
        </div>
        <div className="detailre">
        <div className="ingredients">
          <div className="ingredientsheader">INGREDIENTS</div>
          <div className="ingredientsdetails">
            {k.recipe_ingredient.map((e)=>(
              <ul>
                <li>{e.ingredients}</li>
              </ul>
            ))}
          </div>
        </div>
          <div className="steps">
            <div className="stepsheader">STEPS</div>
            <div className="stepsdetails">
            <ol>
            {k.recipe_step.map((e)=>(
              
                <li>{e.steps}</li>
                ))}
                </ol>
          </div>
          </div>
        </div>
          </>




))}
        
          
    </div>
  )
}

export default Recipe
