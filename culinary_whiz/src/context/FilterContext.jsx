import { createContext, useContext, useEffect, useReducer } from "react";
import { useRecipeContext } from "./RecipeContext";
import FilterReducer from "../reducer/FilterReducer";


const FilterContext = createContext()

const FilterContextProvider =({children})=>{
    const {recipes}  = useRecipeContext()
   
    const iniliatstate = {
        filter_recipe:recipes,
        filters:{
            text:''
        }
    }
   
    const [state,dispatch] = useReducer(FilterReducer,iniliatstate)
    console.log(state)
    useEffect(()=>{
        dispatch({
            type:'loadfilter',
            payload:recipes
        })
},[recipes]);

useEffect(()=>{
    dispatch({
        type:'filterrecipe',
        payload:recipes
    })
},[recipes,state.filters])

const updateFilterValue=(e,navigate)=>{
    let name =e.target.name;
    let value = e.target.value;

    dispatch({
        type:'update_recipe',
        payload:{name,value}
    })
    navigate('/recipes')
    window.scrollTo(0, 0);
}
    return(
        <FilterContext.Provider value={{updateFilterValue,...state}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext=()=>{
    return useContext(FilterContext)
}

export {FilterContext,FilterContextProvider,useFilterContext}