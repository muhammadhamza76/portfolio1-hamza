import { Trophy, Medal, Code, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Winner – Programming Competition",
    event: "SOFTEC'25 @ FAST NUCES",
    date: "May 2025",
    description: "First place in competitive programming contest",
    color: "text-yellow-500"
  },
  {
    icon: Trophy,
    title: "1st Place – CodeCrud Competition",
    event: "Government College University, Faisalabad",
    date: "December 2024",
    description: "Winner of university coding competition",
    color: "text-yellow-500"
  },
  {
    icon: Medal,
    title: "LeetCode 50 Days Badge",
    event: "LeetCode Platform",
    date: "2025",
    description: "Consistent problem-solving achievement",
    color: "text-green-500"
  },
  {
    icon: Users,
    title: "Hackathon Participation",
    event: "Devpost 2025",
    date: "2025",
    description: "Active participation in development hackathons",
    color: "text-blue-500"
  }
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Achievements & Awards</h2>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={achievement.title}
                className="glass p-6 rounded-xl hover-scale flex items-start gap-4"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <p className="text-primary font-semibold mb-1">
                    {achievement.event}
                  </p>
                  
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Current Goal</h3>
            </div>
            <p className="text-muted-foreground">
              Solved <span className="text-primary font-semibold">50+ LeetCode problems</span> in C++
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Target: <span className="text-primary font-semibold">500+ problems</span> by end of 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}