import React from 'react'

const FilterReducer = (state,action) => {
  switch (action.type) {
    case 'loadfilter':
        return{
            ...state,
            filter_recipe:action.payload
        }
        
    case 'filterrecipe':
        const recipe = action.payload;
        const {text} = state.filters;
        let temprecipe = recipe
        if(text){
            temprecipe=temprecipe.filter((item)=>{
                return item.name.toLowerCase().includes(text.toLowerCase())
            })
        }
        return{
            ...state,
            filter_recipe:temprecipe
        };

    case 'update_recipe':
        const {name,value} = action.payload;
        console.log(name,value)
        return {
            ...state,
            filters:{
                [name]:value
            }
        }
  
  }
}

export default FilterReducer
