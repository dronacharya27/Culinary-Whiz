import React from 'react'

const RecipeAddReducer = (state,action) => {
  switch (action.type) {
    case 'handleaddrecipe':
        const {name,value} = action.payload
        return [
            ...state,{[name]:value}
        ]
        
        break;
  
    default:
        break;
  }
}

export default RecipeAddReducer
