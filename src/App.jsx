import { useState } from 'react'
import './App.css'

// Components   
import Navbar from './components/navbar'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import ServiceCard from './components/ServiceCard'
import CompanyLogo from './components/CompanyLogo'

// Brand Logos  


function App() {

    let isDarkIcon = true

  return (
    <>
        <Navbar />
       <div id="hero-bottom-section">
           <LeftSection/>
           <RightSection />
       </div>

       <div id="company-section-div">
            <CompanyLogo 
                brandName= "0"
            />
            <CompanyLogo 
                brandName= "1"
            />
            <CompanyLogo 
                brandName= "2"
            />
            <CompanyLogo 
                brandName= "3"
            />
            <CompanyLogo 
                brandName= "4"
            />
            <CompanyLogo 
                brandName= "5"
            />
            <CompanyLogo 
                brandName= "6"
            />
       </div>

       <div className="services-description-div">
           <div className="services-text-div"> 
                  <p className='services-text'> Services </p>
           </div>

           <div className="services-description-text-div">
                  <p className='services-description-text'> 
                    At our digital marketing agency, we offer a range of services to 
                    help businesses grow and succeed online. These services include:
                  </p>
           </div>
        </div>


        <div id="services-section">
            
                <ServiceCard 
                    serviceTxtOne= "Search Engine"
                    serviceTxtTwo= "Optimization"
                    bgColor="white"
                    textBgColor="#B9FF66"
                    rightImgElement= "0"
                    isDark={isDarkIcon}
                />

                <ServiceCard 
                    serviceTxtOne= "Pay-per-click"
                    serviceTxtTwo= "advertising"
                    bgColor="#B9FF66"
                    textBgColor="white"
                    rightImgElement= "1"
                    isDark={isDarkIcon}
                />

                <ServiceCard 
                    serviceTxtOne= "Social media"
                    serviceTxtTwo= "Markting"
                    bgColor="#191A23"
                    textBgColor="white"
                    rightImgElement= "2"
                    isDark={!isDarkIcon}
                />

                <ServiceCard 
                    serviceTxtOne= "Email"
                    serviceTxtTwo= "Marketing"
                    bgColor="white"
                    textBgColor="#B9FF66"
                    rightImgElement= "3"
                    isDark={isDarkIcon}
                />

                <ServiceCard 
                    serviceTxtOne= "Content"
                    serviceTxtTwo= "Creation"
                    bgColor="#B9FF66"
                    textBgColor="white"
                    rightImgElement= "4"
                    isDark={isDarkIcon}
                />

                <ServiceCard 
                    serviceTxtOne= "Analytics and"
                    serviceTxtTwo= "Tracking"
                    bgColor="#191A23"
                    textBgColor="white"
                    rightImgElement= "2"
                    isDark={!isDarkIcon}
                />  
        </div>  

      
    </>
  )
}

export default App
