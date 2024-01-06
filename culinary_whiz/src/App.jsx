import './App.css'
import Navbar from './components/Navbar/Navbar'
import Recipe from './components/Recipe/Recipe'
import RecipeAdd from './components/RecipeAdd/RecipeAdd'
import RecipeSection from './components/RecipeSection/RecipeSection'
import HomePage from './pages/HomePage'
import React, { useState } from 'react'

import {BrowserRouter as Router,Route,Routes, NavLink} from 'react-router-dom'
function App() {
  const [loginbtn,setLoginbtn]=useState(false)

  return (
    <>
   
    <Router>
    <Navbar loginbtn={loginbtn} setLoginbtn={setLoginbtn}/>
      <Routes>
     
      <Route path='/' element={ <HomePage loginbtn={loginbtn} setLoginbtn={setLoginbtn}/>}/>
      <Route path='/recipes/:id/:name' element={<Recipe/>}/>
      <Route path='/add-recipe' element={ <RecipeAdd/>}/>
      <Route path='/recipes' element={ <RecipeSection/>}/>
    
      </Routes>
    
    </Router>
     
    </>
  )
}

export default App
