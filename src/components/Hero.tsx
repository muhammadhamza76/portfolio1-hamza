import { MapPin, Award, Github, Linkedin, Mail, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import profileImage from "@/assets/profile-hamza.jpg"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/8 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in-up flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name and Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 px-4">
              Muhammad Hamza
              <span className="inline-block ml-2 text-primary">
                <Award className="w-6 h-6 md:w-8 md:h-8 inline" />
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 space-y-2">
              <p className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span>💻 MERN Developer</span>
                <span className="hidden sm:inline">|</span>
                <span>⚡ C++ Enthusiast</span>
                <span className="hidden sm:inline">|</span>
                <span>💡 LeetCoder</span>
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span>🌐 Building Web Solutions</span>
                <span className="hidden sm:inline">|</span>
                <span>🏆 Winner – Programming @ GCUF</span>
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4" />
              <span>Faisalabad, Punjab, Pakistan</span>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover-scale"
              >
                <a
                  href="https://github.com/hamza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover-scale"
              >
                <a
                  href="https://linkedin.com/in/hamza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover-scale"
              >
                <a
                  href="mailto:hamza@example.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover-scale"
              >
                <a
                  href="https://leetcode.com/hamza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={profileImage}
                alt="Muhammad Hamza"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary/20 shadow-lg glow"
              />
              <div className="absolute -top-4 -right-4">
                <Award className="w-12 h-12 text-primary bg-background rounded-full p-2 shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}