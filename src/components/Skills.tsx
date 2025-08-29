const skills = [
  { name: "MongoDB", icon: "🍃" },
  { name: "Express.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🔴" },
  { name: "C++", icon: "💻" },
  { name: "Python", icon: "🐍" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "UI/UX", icon: "✨" },
  { name: "DSA", icon: "🧮" },
  { name: "Problem Solving", icon: "🧩" }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-badge justify-center hover-scale"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="mr-2 text-lg">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}