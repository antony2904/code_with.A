import { useState } from 'react'
import './App.css'

const services = [
  {
    icon: '🎓',
    title: 'Mini Projects',
    text: 'Student-friendly projects with practical learning, clean code, and easy customization.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    text: 'Modern, responsive websites built for businesses, startups, shops, and personal brands.',
  },
  {
    icon: '⚙️',
    title: 'IT Solutions',
    text: 'Automation, dashboards, APIs, and custom digital tools designed for real business needs.',
  },
]

const stack = ['Python', 'React', 'JavaScript', 'Django', 'FastAPI', 'AI', 'Cloud', 'UI/UX']

const projects = [
  'Student Management System',
  'E-commerce Website',
  'AI Chatbot',
  'Portfolio Website',
  'Business Dashboard',
  'Automation Tool',
]

const steps = [
  'Concept Development',
  'Architecture & Design',
  'Development & Testing',
  'Launch & Support',
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/code_with.a?stkn=MWV0Z3VzZDNuY3FwdA==' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=codewith.a01@gmail.com' },
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setFormStatus({ type: '', message: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/codewith.a01@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New message from code_with.A website',
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setFormStatus({
        type: 'success',
        message: 'Your message has been sent successfully. We will get back to you soon.',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please email us directly at codewith.a01@gmail.com.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">code_with.A</div>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Student-driven tech startup</span>
            <h1>Turn Your Concepts into Reality with code_with.A 🚀</h1>
            <p>
              Your trusted development partner for professional business applications and student-focused technical projects.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#services">Browse Solutions</a>
              <a className="secondary-btn" href="#contact">Let's Build Together</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="mini-panel">
              <span>Projects delivered</span>
              <strong>25+</strong>
            </div>
            <div className="mini-panel">
              <span>Core focus</span>
              <strong>Web + AI</strong>
            </div>
            <div className="mini-panel highlight">
              <span>Mission</span>
              <strong>Skills to impact</strong>
            </div>
          </div>
        </section>

        <section className="stack-banner" aria-label="Tech stack">
          {stack.map((item) => (
            <span key={item} className="stack-item">
              {item}
            </span>
          ))}
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <span className="eyebrow">What we do</span>
            <h2>Solutions built for learning, growth, and business impact</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section alt-section">
          <div className="section-heading">
            <span className="eyebrow">Our work</span>
            <h2>Project showcase</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={project} className="project-card">
                <span className="project-index">0{index + 1}</span>
                <h3>{project}</h3>
                <p>
                  High-impact digital solutions designed to solve real problems with clean architecture and user-focused experiences.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Process</span>
            <h2>How it works</h2>
          </div>
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={step} className="timeline-step">
                <div className="timeline-number">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section founder-section">
          <div className="founder-copy">
            <span className="eyebrow">About the founder</span>
            <h2>Building practical tech with a student-first mindset</h2>
            <p>
              code_with.A is a student-driven IT startup focused on projects, IT solutions, and web development.
              We aim to combine creativity, technical skill, and real-world problem solving to help students
              learn faster while helping businesses grow with modern digital tools.
            </p>
            <p>
              From startup websites to AI-powered tools and student projects, we build experiences that are not only functional but meaningful.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">Let’s work together</span>
              <h2>Start your next project with code_with.A</h2>
              <p>Need a website, project idea, AI tool, or IT solution? Let’s discuss what you need.</p>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleContactChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleContactChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleContactChange}
                placeholder="Your Message"
                rows="4"
                required
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>{formStatus.message}</div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 code_with.A | All Rights Reserved</p>
        <div className="socials">
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </footer>

    </div>
  )
}

export default App
