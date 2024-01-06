import React from 'react'
import "./RecipeSection.css";
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../../context/RecipeContext';
import Navbar from '../Navbar/Navbar';
import { useFilterContext } from '../../context/FilterContext';

function RecipeSection() {
    const {recipes,isLoading,isError} = useRecipeContext()
   const {filter_recipe} = useFilterContext()
  return (
   
    <div className='recipesSection'>
       
       
        <div className="recipetop"><div>Recipes</div></div>
        <div className="recipebottom">
             {filter_recipe?<div className="allrecipes">
            {isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
            filter_recipe.map((e,index)=>(
                <Link to={`/recipes/${e.id}/${e.name.trim().split(" ").join('-')}`}><div key={index} className="singleRecipe">
            <img src={e.image} alt="" className='recipe_img' />
            <div className="recipeDetails">
                <div className='recipeName'>
                    {e.name}
                </div>

            </div>
        </div></Link>
            ))
            }
                       
            </div>:<div className="allrecipes">
            {isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
            recipes.map((e,index)=>(
                <Link to={`/recipes/${e.id}/${e.name.trim().split(" ").join('-')}`}><div key={index} className="singleRecipe">
            <img src={e.image} alt="" className='recipe_img' />
            <div className="recipeDetails">
                <div className='recipeName'>
                    {e.name}
                </div>

            </div>
        </div></Link>
            ))
            }
                       
            </div>}
            
        </div>
      
    </div>
  )
}

export default RecipeSection