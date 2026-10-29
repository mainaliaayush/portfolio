const skills = [
  "Python",
  "Django",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git",
  "HTML",
  "CSS",
]

function Skills() {
  return (
    <section id="skills" className="bg-gray-950 text-white py-20 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <span key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills