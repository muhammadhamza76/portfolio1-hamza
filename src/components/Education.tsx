import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education</h2>
        
        <div className="glass p-8 rounded-2xl hover-scale">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">B.S. Information Technology</h3>
              <p className="text-lg text-primary font-semibold mb-2">
                Government College University, Faisalabad
              </p>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2022 – 2026</span>
                </div>
                <div className="text-primary font-semibold">
                  CGPA: 3.76/4.0
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Activities & Involvement:</h4>
                <div className="flex flex-wrap gap-2">
                  {["IT Society Member", "Hackathon Participant", "Programming Contests", "Event Volunteering"].map((activity) => (
                    <span
                      key={activity}
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}