import { Github, Linkedin, Mail, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/hamza",
    color: "hover:text-gray-600 dark:hover:text-gray-300"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/hamza",
    color: "hover:text-blue-600"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hamza@example.com",
    color: "hover:text-red-500"
  },
  {
    name: "LeetCode",
    icon: Code,
    href: "https://leetcode.com/hamza",
    color: "hover:text-orange-500"
  }
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm currently seeking internships or entry-level opportunities. 
              Let's discuss how we can work together to build amazing things!
            </p>
            
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover-scale"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${link.color}`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {link.name}
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/20 pt-8">
            <p className="text-muted-foreground text-sm">
              © 2025 Muhammad Hamza. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}