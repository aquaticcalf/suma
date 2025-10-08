import { ModeToggle } from "@/components/ui/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/ui/nav-bar"
import { Hero, Features } from "@/components/ui/landing"
import { SocialProof } from "@/components/ui/social-proof"

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

export default function Home() {
  return (
    <>
      <Navbar navItems={navConfig} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero
          title={
            <>
              <span>Build Beautiful SaaS Apps with</span> <strong className="bg-gradient-to-r from-primary via-accent-foreground to-secondary-foreground text-transparent bg-clip-text">Suma</strong>
            </>
          }
          subtitle="A design system that prioritizes clarity, accessibility, and developer happiness. Build interfaces that users love and developers enjoy maintaining."
          badgeText={<span className="text-primary">Trusted by 500+ developers</span>}
          primaryButtonLabel="Start Free Trial"
          primaryButtonLink="/docs"
          secondaryButtonLabel="Watch Demo"
          secondaryButtonLink="/about"
          signupCardTitle="Start building today"
          signupCardText="Join thousands of developers building better interfaces"
          signupButtonLabel="Get Started"
          signupPlaceholder="Enter your email"
        />

        {/* Social Proof */}
        <SocialProof
          title="Trusted by teams at"
          metrics={[
            { value: "500+", label: "Active Developers" },
            { value: "10K+", label: "Projects Built" },
            { value: "99.9%", label: "Uptime" },
            { value: "4.8/5", label: "Developer Rating" }
          ]}
        />

        {/* Problem/Solution Section */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Stop fighting with inconsistent UI</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Most design systems are either too rigid or too complex. Suma gives you the perfect balance of flexibility and consistency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive">The Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Inconsistent spacing and typography</li>
                    <li>• Poor accessibility compliance</li>
                    <li>• Confusing component APIs</li>
                    <li>• Maintenance nightmares</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">The Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Consistent design tokens</li>
                    <li>• WCAG AA accessibility</li>
                    <li>• Intuitive component APIs</li>
                    <li>• Easy maintenance and updates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <Features
          title="Everything you need to build better"
          description="Comprehensive components and utilities designed for real-world applications"
          features={[           
            {
              title: "Design System",
              description: "Perceptual color system with proper contrast ratios and semantic meaning",
              icon: "Palette"
            },
            {
              title: "Component Library",
              description: "60+ accessible components built on Radix UI primitives",
              icon: "Components"
            },
            {
              title: "Developer Experience",
              description: "TypeScript-first with excellent autocomplete and documentation",
              icon: "Code"
            },
            {
              title: "Performance",
              description: "Tree-shakable components with minimal bundle impact",
              icon: "Zap"
            },
            {
              title: "Accessibility",
              description: "WCAG AA compliant with keyboard navigation and screen reader support",
              icon: "Accessibility"
            },
            {
              title: "Customization",
              description: "Easy to customize and extend with your brand's design language",
              icon: "Settings"
            },
          ]}
        />

        {/* Final CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-5 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to build better interfaces?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have improved their workflow with Suma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/docs">Start Free Trial</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Talk to Sales</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

