import { useState } from 'react'
import './index.css'

import PagePortfolio from './components/SectionPortfolio'
import ProjectCards from './components/ProjectCards'
import TitleP from './components/TitleP'
import image from './assets/spot.png'
import SkillCard from './components/SkillCard'
import tsLogo from './assets/TypeScriptlogo.png'
import SectionSkills from './components/SectionSkills'
import SectionAbout from './components/SectionAbout'
import AboutDescription from './components/AboutDescription'
import AboutSSkills from './components/AboutSSkills'
import AboutHobbies from './components/AboutHobbies'
import SectionContact from './components/SectionContact'
import SectionStart from './components/SectionStart'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SectionStart/>

      <TitleP/>
      <PagePortfolio 
        title="Projetos Recentes" 
        bgColor="bg-yellow-400"
      >
        <ProjectCards bgColor="bg-red-500" title="Chat GPT" bgColorFaixa="bg-blue-950" thumbImage={image}/>
        <ProjectCards bgColor="bg-green-500" title="Facebook" bgColorFaixa="bg-blue-950" thumbImage={image}/>
        <ProjectCards bgColor="bg-blue-500" title="Whatsapp" bgColorFaixa="bg-blue-950" thumbImage={image}/>
      </PagePortfolio>

      <PagePortfolio 
        title="Projetos Javascript" 
        bgColor="bg-white"
      >
        <ProjectCards bgColor="bg-red-500" bgColorFaixa="bg-blue-950" title="Jhonson e Jhonson" thumbImage={image}/>
        <ProjectCards bgColor="bg-green-500" bgColorFaixa="bg-blue-950" title="Jhonson e Jhonson" thumbImage={image}/>
        <ProjectCards bgColor="bg-blue-500" bgColorFaixa="bg-blue-950" title="Jhonson e Jhonson" thumbImage={image}/>
      </PagePortfolio>

      <PagePortfolio 
        title="Projetos React.js" 
        bgColor="bg-blue-950"
        textColor="text-white"
      >
        <ProjectCards bgColor="bg-red-500" bgColorFaixa="bg-yellow-500" textColor="text-blue-950" title="Teste"/>
        <ProjectCards bgColor="bg-green-500" bgColorFaixa="bg-yellow-500" textColor="text-blue-950"  title="Teste"/>
        <ProjectCards bgColor="bg-blue-500" bgColorFaixa="bg-yellow-500" textColor="text-blue-950" title="Teste"/>
      </PagePortfolio>
      <h1 className='text-5xl font-rubik font-bold text-blue-950 ml-32 mt-8'>Skills</h1>
      <SectionSkills>
      <SkillCard logo={tsLogo} text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      <SkillCard logo={tsLogo} text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      <SkillCard logo={tsLogo} text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      <SkillCard logo={tsLogo} text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      <SkillCard logo={tsLogo} text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      <SkillCard logo={tsLogo} text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      </SectionSkills>

      <SectionAbout>
        
        <div>
          <AboutDescription/>
          <AboutSSkills/>
        </div>
        <AboutHobbies />
      </SectionAbout>
      
      <SectionContact>

      </SectionContact>

      <Footer/>
      
    </>
  )
}

export default App
