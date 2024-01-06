import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <>
    <div className='hero'>
      
      <img src="/HeroSection/hero.jpg" alt="" srcset="" />

    </div>

    <div className="herocontent">
      <div className='herocontenttext'>
      Unveil Flavour,<br /> Master Recipes.
      </div>

      <div className="addbtndiv">
      <Link to='/recipes'><button className='addbtn'>
        Explore Recipes
        </button> </Link>
      </div>
      
       
      
    </div>
    </>
  )
}

export default HeroSection
