import React from 'react'
import './MyProjects.css'

const projects = [
  {
    title: 'WELLWORN',
    description: "This is a group project for an online fashion store, developed for a real client using the MERN stack. It showcases our team's collaborative and technical skills.",
    imageUrl: 'https://i.ibb.co/BtWNJnD/Untitled-design.png',
    link: 'https://wellworn.example.com'
  },
  {
    title: 'BOBBY',
    description: 'This is my first Android game, created in Kotlin, to learn user input responsiveness and data storage. It offers an interactive and educational experience.',
    imageUrl: 'https://i.ibb.co/TPS1gtP/Thiya.png',
    link: 'https://bobby.example.com'
  },
  {
    title: 'TeddyNotes',
    description: 'This Note app, implemented using Kotlin, is designed to help users learn and practice CRUD operations within a Kotlin application.',
    imageUrl: 'https://i.ibb.co/YWw44PZ/Screenshot-20240525-231520.png',
    link: 'https://teddynotes.example.com'
  },
  {
    title: 'Travel Me',
    description: 'This Travel app, coded in Kotlin, is designed to explore modern UI/UX principles, offering an intuitive user experience.',
    imageUrl: 'https://i.ibb.co/Xfnsw9T/Screenshot-20240525-231039.png',
    link: 'https://travelme.example.com'
  },
  // Add more projects here
]

function MyProjects() {
  return (
    <div>
      <div className="mpmtitle">My Projects</div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-title">{project.title}</div>
            <div className="project-overlay">
              <div className="project-description">{project.description}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="view-more-button">View More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyProjects
