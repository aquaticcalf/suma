import Navbar from "@/components/ui/nav-bar"
import { ModeToggle } from "@/components/ui/theme-toggle"
import { PageLayout } from "@/components/ui/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const navConfig = {
  left: [
    { label: "Suma", href: "/", icon: "Flower" }
  ],
  center: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/about", icon: "Info" },
    { label: "Docs", href: "/docs", icon: "BookOpen" },
    { label: "Contact", href: "/contact", icon: "Mail" }
  ],
  right: [
    { component: <ModeToggle /> },
    { label: "Get Started", href: "/docs", icon: "Rocket" }
  ]
}

const coreValues = [
  {
    title: "Clarity First",
    description: "We believe interfaces should be immediately understandable. No confusion, no guesswork.",
    icon: "Eye"
  },
  {
    title: "Accessibility by Default",
    description: "Every component is built with accessibility in mind from day one.",
    icon: "Accessibility"
  },
  {
    title: "Developer Happiness",
    description: "Great developer experience leads to better products and happier teams.",
    icon: "Heart"
  },
  {
    title: "Continuous Improvement",
    description: "We're always learning and improving based on real-world usage.",
    icon: "TrendingUp"
  }
]

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Developer",
    bio: "Built Suma after years of frustration with inconsistent design systems.",
    funFact: "Can solve a Rubik's cube in under 2 minutes"
  },
  {
    name: "Sarah Rodriguez",
    role: "Design Lead",
    bio: "Passionate about creating interfaces that are both beautiful and functional.",
    funFact: "Has visited 15 countries and counting"
  },
  {
    name: "Marcus Thompson",
    role: "Developer Advocate",
    bio: "Loves helping developers build amazing experiences with Suma.",
    funFact: "Once coded for 36 hours straight during a hackathon"
  }
]

export default function About() {
  return (
    <>
      <Navbar navItems={navConfig} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold mb-6">Building interfaces that users love</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Suma was born from a simple belief: good design should be accessible to everyone. 
            We're on a mission to make building beautiful, accessible interfaces easier than ever.
          </p>
          <Button size="lg" asChild>
            <a href="/docs">Join Our Mission</a>
          </Button>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">The Problem</h3>
                <p className="text-muted-foreground mb-6">
                  After years of working with design systems that were either too rigid or too complex, 
                  we realized there had to be a better way. Developers were spending more time fighting 
                  with inconsistent components than building great products.
                </p>
                <p className="text-muted-foreground">
                  The turning point came when we saw a team rebuild their entire UI from scratch 
                  because their design system had become unmaintainable. We knew there had to be a better way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                <p className="text-muted-foreground mb-6">
                  Suma was built from the ground up with developer experience and accessibility in mind. 
                  We started with the fundamentals: proper spacing, clear typography, and semantic color usage.
                </p>
                <p className="text-muted-foreground">
                  Today, Suma powers thousands of applications and has helped teams ship better products faster. 
                  We're just getting started on our mission to make great design accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Badge variant="secondary" className="text-lg">
                      {value.icon}
                    </Badge>
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Fun fact:</strong> {member.funFact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate people who believe in making design accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="/contact">Open Positions</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/docs">Start Building</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}