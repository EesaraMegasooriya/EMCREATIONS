import React from 'react'
import './MyProjects.css'

const projects = [
  {
    title: 'WELLWORN',
    description: 'Description of Project 1',
    imageUrl: 'https://i.ibb.co/BtWNJnD/Untitled-design.png',
  },
  {
    title: 'BOBBY',
    description: 'Description of Project 2',
    imageUrl: 'https://i.ibb.co/TPS1gtP/Thiya.png',
  },
  {
    title: 'TeddyNotes',
    description: 'This Note app, implemented using Kotlin, is designed to help users learn and practice CRUD operations within a Kotlin application.',
    imageUrl: 'https://i.ibb.co/YWw44PZ/Screenshot-20240525-231520.png',
  },
  {
    title: 'Travel Me',
    description: 'This Travel app, coded in Kotlin, is designed to explore modern UI/UX principles, offering an intuitive user experience.',
    imageUrl: 'https://i.ibb.co/Xfnsw9T/Screenshot-20240525-231039.png',
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyProjects
