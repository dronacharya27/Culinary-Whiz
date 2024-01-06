import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import './HomePage.css'
import AboutSection from '../components/AboutSection/AboutSection'
import LatestSection from '../components/LatestSection/LatestSection'
import ChillerSection from '../components/ChillerSection/ChillerSection'
import Footer from '../components/FooterSection/Footer'
import LoginModal from '../components/LoginModal/LoginModal'
import RecipeAdd from '../components/RecipeAdd/RecipeAdd'



const HomePage = ({loginbtn,setLoginbtn}) => {
  

  return (
    <div className='homepage'>
    
    <LoginModal loginbtn={loginbtn} setLoginbtn={setLoginbtn}/>
    <HeroSection/>
    <LatestSection/>
    <AboutSection/>
    <ChillerSection/>
    <Footer/>
   
  
    </div>
  )
}

export default HomePage
