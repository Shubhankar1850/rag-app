import { Mail, Linkedin, Github, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'
import LanguageProvider from "../../components/Language/LanguageProvider"
import LanguageToggle from '../../components/Language/LanguageToggle'
import { getPortfolioData } from '@/components/Language/portfolioData'
import './page.css'

export default function Home() {
  const data = getPortfolioData()

  return (
    <LanguageProvider data={data}>
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="headerContent">
            <Link href="/" className="logo">Shubhankar Mukherjee</Link>
            <nav className="nav">
              <a href="#about" className="navLink" data-key="nav.about">About</a>
              <a href="#projects" className="navLink" data-key="nav.projects">Projects</a>
              <a href="#skills" className="navLink" data-key="nav.skills">Skills</a>
              <a href="#experience" className="navLink" data-key="nav.experience">Experience</a>
              <a href="#contact" className="navLink" data-key="nav.contact">Contact</a>
              <LanguageToggle />
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="heroSection">
          <div className="heroContent">
            <h1 className="heroTitle" data-key="hero.name">
              Shubhankar Mukherjee
            </h1>
            <p className="heroDescription" data-key="hero.description">
              Results-driven Frontend Developer with 5.5+ years of experience building scalable, performant web applications.
            </p>
            
            {/* Stats */}
            <div className="statsGrid">
              <div className="statItem">
                <div className="statValue">5.5+</div>
                <div className="statLabel" data-key="hero.stats.0.label">Years Experience</div>
              </div>
              <div className="statItem">
                <div className="statValue">6+</div>
                <div className="statLabel" data-key="hero.stats.1.label">Projects Delivered</div>
              </div>
              <div className="statItem">
                <div className="statValue">$700M+</div>
                <div className="statLabel" data-key="hero.stats.2.label">Transactions Facilitated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="sectionContent">
            <h2 className="sectionTitle" data-key="skills.title">Skills & Technologies</h2>
            
            <div className="skillsGrid">
              {/* Frontend */}
              <div className="skillCard">
                <h3 className="skillTitle" data-key="skills.categories.frontend">Frontend</h3>
                <div className="skillTags">
                  {data.en.skills.frontend.map((skill, index) => (
                    <span key={index} className="skillTag skillTagFrontend">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="skillCard">
                <h3 className="skillTitle" data-key="skills.categories.backend">Backend</h3>
                <div className="skillTags">
                  {data.en.skills.backend.map((skill, index) => (
                    <span key={index} className="skillTag skillTagBackend">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Cloud */}
              <div className="skillCard">
                <h3 className="skillTitle" data-key="skills.categories.tools">Tools & Cloud</h3>
                <div className="skillTags">
                  {data.en.skills.tools.map((skill, index) => (
                    <span key={index} className="skillTag skillTagTools">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="sectionAlt">
          <div className="sectionContent">
            <h2 className="sectionTitle" data-key="projects.title">Featured Projects</h2>
            <p className="sectionDescription" data-key="projects.description">
              Here are some of my recent projects that demonstrate problem-solving skills and technical expertise.
            </p>
            
            <div className="projectsGrid">
              {data.en.projects.items.map((project, index) => (
                <div key={index} className="projectCard">
                  <h3 className="projectTitle" data-key={`projects.items.${index}.title`}>
                    {project.title}
                  </h3>
                  <p className="projectDescription" data-key={`projects.items.${index}.description`}>
                    {project.description}
                  </p>
                  <div className="projectTags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="projectTag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="section">
          <div className="sectionContent">
            <h2 className="sectionTitle" data-key="experience.title">Work Experience</h2>
            
            <div className="experienceList">
              {data.en.experience.items.map((exp, index) => (
                <div key={index} className="experienceCard">
                  <div className="experienceHeader">
                    <div>
                      <h3 className="experiencePosition" data-key={`experience.items.${index}.position`}>
                        {exp.position}
                      </h3>
                      <p className="experienceCompany" data-key={`experience.items.${index}.company`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="experienceDetails">
                      <div className="experienceDetail">
                        <Calendar size={14} />
                        <span data-key={`experience.items.${index}.period`}>{exp.period}</span>
                      </div>
                      <div className="experienceDetail">
                        <MapPin size={14} />
                        <span data-key={`experience.items.${index}.location`}>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="achievementsList">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievementItem">
                        <span className="achievementBullet">•</span>
                        <span data-key={`experience.items.${index}.achievements.${achIndex}`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="sectionAlt">
          <div className="contactContent">
            <h2 className="sectionTitle" data-key="contact.title">Get In Touch</h2>
            <p className="sectionDescription" data-key="contact.description">
              I'm always interested in new opportunities and exciting frontend projects.
            </p>
            
            <div className="contactGrid">
              <a href="mailto:smshubhankar1851@gmail.com" className="contactCard">
                <Mail size={32} className="contactIcon" />
                <h3 className="contactTitle" data-key="contact.email">Email</h3>
                <p className="contactText">smshubhankar1851@gmail.com</p>
              </a>
              
              <a href="https://linkedin.com/in/shubhmukh/" className="contactCard">
                <Linkedin size={32} className="contactIcon" />
                <h3 className="contactTitle" data-key="contact.linkedin">LinkedIn</h3>
                <p className="contactText">linkedin.com/in/shubhmukh/</p>
              </a>
            </div>
            
            <a href="mailto:smshubhankar1851@gmail.com" className="contactButton" data-key="contact.button">
              Send Message
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footerContent">
            <div className="footerText" data-key="footer.copyright">
              © 2025 Shubhankar Mukherjee. All rights reserved.
            </div>
            <div className="footerLinks">
              <a href="https://github.com/Shubhankar1850" className="footerLink">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/shubhmukh/" className="footerLink">
                <Linkedin size={20} />
              </a>
              <a href="mailto:smshubhankar1851@gmail.com" className="footerLink">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  )
}