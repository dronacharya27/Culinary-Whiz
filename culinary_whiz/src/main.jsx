import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginContextProvider } from './context/LoginContext.jsx'
import { RecipeAddContextProvider } from './context/RecipeAddContext.jsx'
import { RecipeContextProvider } from './context/RecipeContext.jsx'
import {  QueryClient,QueryClientProvider, useQueryClient,} from '@tanstack/react-query'
import { FilterContextProvider } from './context/FilterContext.jsx'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <LoginContextProvider>
     
      <RecipeContextProvider>
      <RecipeAddContextProvider>
      <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </RecipeAddContextProvider>
    </RecipeContextProvider>
   
    </LoginContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
