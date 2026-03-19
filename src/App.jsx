import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Header from './components/Header'
import HeroCard from './components/HeroCard'
import Particles from './components/Particles'
import ProjectsSection from './components/ProjectsSection'
import SkillsPanel from './components/SkillsPanel'
import './App.css'
import { contactLinks, experiences, projects, skills } from './data/siteData'

function App() {
  return (
    <main className="mixed-page">
      <Particles className="particle-layer" quantity={180} staticity={42} ease={72} />

      <div className="mixed-shell">
        <Header />
        <HeroCard />

        <div className="portfolio-layout">
          <aside className="sidebar-column">
            <EducationSection />
            <SkillsPanel skills={skills} />
            <ContactSection links={contactLinks} />
          </aside>

          <div className="content-column">
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={projects} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
