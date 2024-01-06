import React from 'react'
import './ChillerSection.css'
import { useRecipeContext } from '../../context/RecipeContext'
import { Link } from 'react-router-dom'

const ChillerSection = () => {
    const {recipes,isLoading,isError} = useRecipeContext()

  return (
    <div className='chiller'>
        <div className="chilltop"><div>TASTIES</div></div>
        <div className="chillbottom">
            <div className="chillcontent">
            {isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
              recipes.slice(4,7).map((e,index)=>(
                <div className="latfood">
                <Link to={`/recipes/${e.id}/${e.name.trim().split(" ").join('-')}`}>    <img src={e.image} alt="" /></Link>  
                      <div className="lfname">
                        {e.name}
                      </div>
                  </div>
              ))}
                       
                        

            </div>
        </div>
      
    </div>
  )
}

export default ChillerSection
