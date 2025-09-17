import { Mail, Linkedin, Github, Calendar, MapPin } from 'lucide-react'
import './page.css'

// Force static generation
export const dynamic = 'force-static'

// Static data for SSG
function getPortfolioData() {
  return {
    hero: {
      name: "Shubhankar Mukherjee",
      title: "Frontend Developer | React | Next.js | TypeScript",
      description: "Results-driven Frontend Developer with 5.5+ years of experience building scalable, performant web applications. Proven success delivering high-impact solutions across enterprise projects in finance and telecom sectors.",
      stats: [
        { value: "5.5+", label: "Years Experience" },
        { value: "6+", label: "Projects Delivered" },
        { value: "$700M+", label: "Transactions Facilitated" }
      ]
    },
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3", "Bootstrap"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Firebase"],
      tools: ["Git", "GitHub", "Docker", "Kubernetes", "Webpack", "Figma", "Storybook", "Jira"]
    },
    projects: [
      {
        title: "AI Analytics Dashboard",
        description: "Interactive data-driven dashboards for AI startup focusing on usability and performance",
        tags: ["React", "TypeScript", "HTML", "CSS"],
        links: { github: "#", demo: "#" }
      },
      {
        title: "Enterprise Banking Platform",
        description: "Enterprise-grade loan application platform for Citi Bank facilitating $700M+ in transactions",
        tags: ["React", "Redux", "TypeScript", "REST APIs"],
        links: { github: "#", demo: "#" }
      },
      {
        title: "Telecom Web Applications",
        description: "High-performance web applications for Visible (Verizon) with 25% SEO improvement",
        tags: ["Next.js", "React", "Redux", "TypeScript"],
        links: { github: "#", demo: "#" }
      }
    ],
    experience: [
      {
        position: "Freelance Web Developer",
        company: "AI Startup",
        period: "June 2025 - Present",
        location: "Remote",
        achievements: [
          "Building interactive data-driven dashboards for AI startup, focusing on usability and performance",
          "Leveraging React.js, TypeScript, HTML, and CSS to design responsive, scalable solutions",
          "Collaborating with founders and data engineers to translate analytics requirements into user-friendly dashboards",
          "Implementing reusable UI components to accelerate development and maintain design consistency"
        ]
      },
      {
        position: "Consultant - Frontend Developer | Tech Lead",
        company: "Capgemini (Client: Morgan Stanley)",
        period: "May 2024 - Jan 2025",
        location: "India",
        achievements: [
          "Led as Tech Lead, driving end-to-end delivery of enterprise-grade frontend solutions",
          "Designed scalable frontend architecture using React, Redux, TypeScript, and JavaScript",
          "Integrated Docker and Kubernetes workflows to streamline development and deployment pipelines",
          "Led agile ceremonies improving delivery accuracy and team efficiency"
        ]
      },
      {
        position: "Associate Technology L2 - Frontend Engineer",
        company: "Publicis Sapient (Client: Visible/Verizon)",
        period: "Nov 2021 - May 2024",
        location: "India",
        achievements: [
          "Migrated large-scale landing pages from React to Next.js, driving 25% increase in organic search traffic",
          "Designed centralized reusable component library, reducing frontend development time by 30%",
          "Engineered responsive, high-performance web applications improving page load times",
          "Conducted code reviews and mentored junior developers, raising team code quality"
        ]
      },
      {
        position: "System Engineer - Frontend Developer",
        company: "Tata Consultancy Services (Clients: Citi Bank, BMA)",
        period: "Jun 2019 - Nov 2021",
        location: "India",
        achievements: [
          "Delivered enterprise-grade loan application platform for Citi Bank, facilitating $700M+ in transactions",
          "Developed mobile-first, cross-browser compliant, and accessibility-ready applications",
          "Modernized legacy codebases by refactoring class-based components to functional components with hooks",
          "Introduced technical documentation and onboarding manuals, streamlining new developer ramp-up"
        ]
      }
    ]
  }
}

export default function Home() {
  const data = getPortfolioData()

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="headerContent">
          <div className="logo">Shubhankar Mukherjee</div>
          <nav className="nav">
            <a href="#about" className="navLink">About</a>
            <a href="#projects" className="navLink">Projects</a>
            <a href="#skills" className="navLink">Skills</a>
            <a href="#experience" className="navLink">Experience</a>
            <a href="#contact" className="navLink">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <h1 className="heroTitle">
            {data.hero.name}
          </h1>
          <p className="heroDescription">
            {data.hero.description}
          </p>
          
          {/* Stats */}
          <div className="statsGrid">
            {data.hero.stats.map((stat, index) => (
              <div key={index} className="statItem">
                <div className="statValue">{stat.value}</div>
                <div className="statLabel">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="sectionContent">
          <h2 className="sectionTitle">Skills & Technologies</h2>
          
          <div className="skillsGrid">
            {/* Frontend */}
            <div className="skillCard">
              <h3 className="skillTitle">Frontend</h3>
              <div className="skillTags">
                {data.skills.frontend.map((skill, index) => (
                  <span key={index} className="skillTag skillTagFrontend">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="skillCard">
              <h3 className="skillTitle">Backend</h3>
              <div className="skillTags">
                {data.skills.backend.map((skill, index) => (
                  <span key={index} className="skillTag skillTagBackend">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className="skillCard">
              <h3 className="skillTitle">Tools & Cloud</h3>
              <div className="skillTags">
                {data.skills.tools.map((skill, index) => (
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
          <h2 className="sectionTitle">Featured Projects</h2>
          <p className="sectionDescription">
            Here are some of my recent projects that demonstrate problem-solving skills and technical expertise with modern web technologies.
          </p>
          
          <div className="projectsGrid">
            {data.projects.map((project, index) => (
              <div key={index} className="projectCard">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                
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
          <h2 className="sectionTitle">Work Experience</h2>
          
          <div className="experienceList">
            {data.experience.map((exp, index) => (
              <div key={index} className="experienceCard">
                <div className="experienceHeader">
                  <div>
                    <h3 className="experiencePosition">{exp.position}</h3>
                    <p className="experienceCompany">{exp.company}</p>
                  </div>
                  <div className="experienceDetails">
                    <div className="experienceDetail">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="experienceDetail">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="achievementsList">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievementItem">
                      <span className="achievementBullet">•</span>
                      {achievement}
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
          <h2 className="sectionTitle">Get In Touch</h2>
          <p className="sectionDescription">
            I'm always interested in new opportunities and exciting frontend projects. Let's discuss how we can work together.
          </p>
          
          <div className="contactGrid">
            <a href="mailto:smshubhankar1851@gmail.com" className="contactCard">
              <Mail size={32} className="contactIcon" />
              <h3 className="contactTitle">Email</h3>
              <p className="contactText">smshubhankar1851@gmail.com</p>
            </a>
            
            <a href="https://linkedin.com/in/shubhmukh/" className="contactCard">
              <Linkedin size={32} className="contactIcon" />
              <h3 className="contactTitle">LinkedIn</h3>
              <p className="contactText">linkedin.com/in/shubhmukh/</p>
            </a>
          </div>
          
          <a href="mailto:smshubhankar1851@gmail.com" className="contactButton">
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerContent">
          <div className="footerText">
            © 2024 Shubhankar Mukherjee. All rights reserved.
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
  )
}
