

import './App.css'
import AboutMeComponent from './components/AboutMe'
import EducationComponent from './components/Education'
import FooterComponent from './components/Footer'
import HeaderComponent from './components/Header'
import ProjectsComponent from './components/Projects'
import TechonologiesComponent from './components/Technologies'

function App() {

  return (
    <>
      <div className='bg-blue-500'>
        <HeaderComponent/>
        <AboutMeComponent/>
        <ProjectsComponent/>
        <TechonologiesComponent/>
        <EducationComponent/>
        <FooterComponent/>
      </div>
      
    </>
  )
}

export default App
