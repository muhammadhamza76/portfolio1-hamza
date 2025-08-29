import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "NeuraView – Mind Scan",
    description: "AI-based mental well-being project developed during hackathon. Focused on core features, UI design, and teamwork collaboration.",
    tags: ["AI", "Mental Health", "React", "UI/UX"],
    type: "Hackathon Project",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "CarCoop Clone",
    description: "Responsive car rental website clone with clean UI/UX, smooth animations, and mobile-first design approach.",
    tags: ["React", "CSS", "Animations", "Responsive"],
    type: "Web Development",
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and skills with dark/light theme support.",
    tags: ["React", "TypeScript", "Tailwind", "Responsive"],
    type: "Personal Project",
    links: {
      github: "#",
      demo: "#"
    }
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="hover-scale glow border-border/50 glass"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo} className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More projects coming soon on GitHub!</p>
          <Button variant="outline" asChild>
            <a href="#" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}