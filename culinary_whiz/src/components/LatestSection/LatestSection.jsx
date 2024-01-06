import React from 'react'
import './LatestSection.css'
import { Link } from 'react-router-dom'
import { useRecipeContext } from '../../context/RecipeContext'
const LatestSection = () => {
  const {recipes,isLoading,isError} = useRecipeContext()
  return (
    <div className='latest'>
        <div className="lattop"><div>THE LATEST</div></div>
        <div className="latbottom">
            <div className="latcontent">
            {isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
              recipes.slice(0,3).map((e,index)=>(
                <div className="latfood">
                <Link to={`/recipes/${e.id}/${e.name.trim().split(" ").join('-')}`}>    <img src={e.image} alt="" /></Link>  
                      <div className="lfname">
                        <div>{e.name}</div>
                      </div>
                  </div>
              ))}
                        
                        

            </div>
        </div>
      
    </div>
  )
}

export default LatestSection
