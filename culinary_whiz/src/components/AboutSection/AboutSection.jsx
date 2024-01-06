import React from 'react'
import './AboutSection.css'
const AboutSection = () => {
  return (
    <div className='about'>
        <div className="topabout">
            <div className="aleftabout">
                <img className='a' src="/About/sandwich.jpg" alt="" />
            </div>
            <div className="arightabout">
              <div className="">
              Welcome to Culinary Whiz – Your Culinary Canvas for Inspired Creations. Unleash the Art of Cooking, Explore Expert-Tested Recipes, and Elevate Your Culinary Craftsmanship. Join Us on a Journey of Flavorful Discoveries and Unparalleled Tastes. Let Your Culinary Whiz Unleash!              </div>
            </div>
        </div>
        <div className="bottomabout">
        <div className="arightabout">
        <div className="">
        Culinary Whiz stands as the premier destination for culinary enthusiasts, providing a platform where passion meets expertise. What sets us apart is our commitment to delivering a curated collection of expert-tested recipes, meticulously crafted to elevate your culinary prowess. We take pride in being the trusted choice of renowned chefs who contribute their invaluable insights, making Culinary Whiz a hub of culinary excellence. Our commitment to precision, authenticity, and a seamless user experience ensures that whether you're a seasoned chef or an aspiring home cook, Culinary Whiz is your reliable companion in the world of gastronomy. Join us in this culinary journey, where trust and taste converge, and let your culinary endeavors reach new heights with Culinary Whiz.              </div>
        </div>
        <div className="aleftabout"><img className='b' src="/About/cake.jpg" alt="" /></div>
           
        </div>
    </div>
  )
}

export default AboutSection
