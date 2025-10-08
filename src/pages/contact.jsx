import { useState } from "react"
import Navbar from "@/components/ui/nav-bar"
import { ModeToggle } from "@/components/ui/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

const supportOptions = [
  {
    title: "Community Support",
    description: "Get help from our active community of developers",
    icon: "Users",
    responseTime: "Community response",
    link: "https://github.com/aquaticcalf/suma/discussions",
    buttonText: "Ask Community"
  },
  {
    title: "Technical Support",
    description: "Report bugs and get technical assistance",
    icon: "Bug",
    responseTime: "1-2 business days",
    link: "https://github.com/aquaticcalf/suma/issues",
    buttonText: "Open Issue"
  },
  {
    title: "Sales & Partnerships",
    description: "Enterprise inquiries and partnership opportunities",
    icon: "Handshake",
    responseTime: "1 business day",
    link: "mailto:sales@suma.dev",
    buttonText: "Contact Sales"
  },
  {
    title: "Documentation",
    description: "Find answers in our comprehensive documentation",
    icon: "BookOpen",
    responseTime: "Instant",
    link: "/docs",
    buttonText: "Browse Docs"
  }
]

export default function Contact() {
  const [activeTab, setActiveTab] = useState("support")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <Navbar navItems={navConfig} />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-5 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">We're Here to Help</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to get in touch based on your needs. We're committed to providing excellent support.
            </p>
          </div>

          {/* Tabs for Support vs Sales */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="support">Support & Help</TabsTrigger>
              <TabsTrigger value="sales">Sales & Enterprise</TabsTrigger>
            </TabsList>

            {/* Support Tab */}
            <TabsContent value="support">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Our Team</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                      <Input 
                        placeholder="Your Email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Questions</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Input 
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                    
                    <Textarea 
                      placeholder="Tell us more about your issue..." 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                    
                    <Button className="w-full">Send Message</Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      We typically respond within 2 business days
                    </p>
                  </CardContent>
                </Card>

                {/* Support Options */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Quick Support Options</h3>
                  {supportOptions.map((option, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{option.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                            <Badge variant="secondary" className="text-xs">
                              {option.responseTime}
                            </Badge>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <a href={option.link}>{option.buttonText}</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Sales Tab */}
            <TabsContent value="sales">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise Solutions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">For Large Teams</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dedicated support and SLAs</li>
                        <li>• Custom component development</li>
                        <li>• Priority feature requests</li>
                        <li>• Enterprise-grade security</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">For Agencies</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• White-label solutions</li>
                        <li>• Multi-project licensing</li>
                        <li>• Partner program benefits</li>
                        <li>• Co-marketing opportunities</li>
                      </ul>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <a href="mailto:sales@suma.dev">Schedule a Demo</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Sales</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Company Name" />
                    <Input placeholder="Your Name" />
                    <Input placeholder="Work Email" type="email" />
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                    <Button className="w-full">Contact Sales Team</Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We'll get back to you within 1 business day
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">How do I get started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Check out our quick start guide in the documentation. You can be up and running in under 5 minutes.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Is there a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes! All plans include a 14-day free trial with full access to all features.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Can I customize the components?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! All components are fully customizable with CSS variables and props.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Do you offer enterprise support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer dedicated support, SLAs, and custom development for enterprise clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}