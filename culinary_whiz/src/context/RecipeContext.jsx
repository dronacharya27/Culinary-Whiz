import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import RecipeReducer from "../reducer/RecipeReducer";
import { useQuery, useQueryClient } from '@tanstack/react-query'

const RecipeContext = createContext()
const URL = 'https://culinary-whiz-backend.onrender.com/recipe/'
const initialdata = {recipes:[]}
const RecipeContextProvider=({children})=>{
const [state,dispatch] = useReducer(RecipeReducer,initialdata)
    const getdata=async()=>{
        try {
            const {data:res}=await axios.get(URL)
            console.log(res)
            return res
        } catch (error) {
          console.log(error)
    }
}
const {data:recipes,isError,isLoading} = useQuery({queryKey:['recipes'],queryFn: getdata,staleTime:10000,cacheTime:100000})



    return (
    <RecipeContext.Provider value={{recipes,isError,isLoading}}>
        {children}
    </RecipeContext.Provider>
    )
   
}

const useRecipeContext=()=>{
    return useContext(RecipeContext)
}

export {RecipeContext,RecipeContextProvider,useRecipeContext}