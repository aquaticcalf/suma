import { useState } from "react"
import Navbar from "@/components/ui/nav-bar"
import { ModeToggle } from "@/components/ui/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

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

const docsSections = [
  {
    title: "Getting Started",
    items: ["Installation", "Quick Start", "Project Setup", "First Component"]
  },
  {
    title: "Core Concepts",
    items: ["Design Tokens", "Color System", "Typography", "Spacing", "Layout"]
  },
  {
    title: "Components",
    items: ["Button", "Card", "Form", "Navigation", "Data Display", "Feedback"]
  },
  {
    title: "Guides",
    items: ["Customization", "Theming", "Accessibility", "Performance", "Testing"]
  },
  {
    title: "API Reference",
    items: ["Props", "Methods", "Events", "Styling", "Composition"]
  }
]

const quickStartSteps = [
  {
    title: "Create a new project",
    description: "Start with a fresh React + TypeScript project.",
    code: "npx create-react-app my-app --template typescript"
  },
  {
    title: "Install Suma",
    description: "Add Suma to your project dependencies.",
    code: "npm install @suma/ui"
  },
  {
    title: "Import components",
    description: "Start using Suma components in your app.",
    code: `import { Button } from "@suma/ui"

function App() {
  return <Button>Hello Suma!</Button>
}`
  }
]

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Navbar navItems={navConfig} />
      
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 h-screen overflow-hidden">
          <div className="p-4 border-b">
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          <ScrollArea className="h-[calc(100vh-80px)]">
            <div className="p-4 space-y-6">
              {docsSections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a 
                          href="#" 
                          className="block py-2 px-3 rounded-md hover:bg-muted text-sm transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto px-8 py-12">
            {/* Hero Section */}
            <div className="max-w-4xl mb-12">
              <h1 className="text-4xl font-bold mb-4">Suma Documentation</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Everything you need to build beautiful, accessible interfaces with Suma.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">v2.1.0</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">React 19</Badge>
                <Badge variant="secondary">Accessible</Badge>
              </div>
            </div>

            {/* Quick Start Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
              <p className="text-muted-foreground mb-8">
                Get up and running with Suma in under 5 minutes. Follow these simple steps to start building.
              </p>
              
              <div className="space-y-6">
                {quickStartSteps.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold">{index + 1}</span>
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{step.description}</p>
                      <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                        <code>{step.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Core Concepts */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Core Concepts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Design System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Perceptual color system with OKLCH</li>
                      <li>• Consistent spacing using 4px grid</li>
                      <li>• Semantic typography scale</li>
                      <li>• WCAG AA accessibility compliance</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Developer Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• TypeScript-first with full type safety</li>
                      <li>• Tree-shakable components</li>
                      <li>• Zero-configuration setup</li>
                      <li>• Comprehensive documentation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Support Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Join our community of developers building with Suma.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://github.com/aquaticcalf/suma/discussions">Join Discussions</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Found a bug or have a feature request?
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://github.com/aquaticcalf/suma/issues">Report Issue</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Get help from our support team.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/contact">Contact Support</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}