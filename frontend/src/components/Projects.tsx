import { useEffect, useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  link: string
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/api/projects/')
      .then((response) => response.json())
      .then((data) => setProjects(data))
  }, [])

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline" target="_blank">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects