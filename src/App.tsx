import './App.css'
import AboutMeComponent from './components/AboutMe'
import EducationComponent from './components/Education'
import ExperienceComponent from './components/Experience'
import FooterComponent from './components/Footer'
import HeaderComponent from './components/Header'
import ProjectsComponent from './components/Projects'
import TechonologiesComponent from './components/Technologies'

function App() {

  return (
    <>
      <div className='bg-dark-blue'>
        <HeaderComponent/>
        <AboutMeComponent/>
        <TechonologiesComponent/>
        <ProjectsComponent/>
        <EducationComponent/>
        <ExperienceComponent/>
        <FooterComponent/>
      </div>
      
    </>
  )
}

export default App
