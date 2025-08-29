export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="glass p-8 rounded-2xl hover-scale">
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Full-Stack Developer skilled in <span className="text-primary font-semibold">MERN Stack</span> and <span className="text-primary font-semibold">C++ (DSA)</span>. 
            Strong in problem-solving, collaboration, and adaptability. Passionate about building efficient web solutions. 
            Currently seeking <span className="text-primary font-semibold">internships or entry-level opportunities</span> to learn and grow in the IT industry.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>🌍 English - Professional Working Proficiency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}