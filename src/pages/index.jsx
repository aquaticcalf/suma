import { ModeToggle } from "@/components/ui/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/nav-bar"
import { Hero, Features } from "@/components/ui/landing"

const navConfig = {
  left: [
    { label: "suma", href: "/", icon: "Flower" }
  ],
  center: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/about", icon: "Info" },
    { label: "Docs", href: "/docs", icon: "BookOpen" },
    { label: "Contact", href: "/contact", icon: "Mail" }
  ],
  right: [
    { component: <ModeToggle /> }
  ]
}

export default function Home() {
  return (
    <>
      <Navbar navItems={navConfig} />
      <div className="min-h-screen pb-10">
        <Hero
          title={
            <>
              <span>Build with Happiness using</span> <strong className="bg-gradient-to-r from-blue-600 via-green-500 to-red-400 text-transparent bg-clip-text">Suma</strong>
            </>
          }
          subtitle="Suma makes me happy, do you want to be happy?"
          badgeText={<a href="https://github.com/aquaticcalf/suma" className="text-yellow-600 dark:text-yellow-300 hover:underline">suma is open source!</a>}
          primaryButtonLabel="Yes, please!!"
          primaryButtonLink="/docs"
          secondaryButtonLabel="No, i sad"
          secondaryButtonLink="/sad"
          signupCardTitle="The legal binding"
          signupCardText="Enter your name below to witness absolutely nothing happen 😃"
          signupButtonLabel="Nothing"
          signupPlaceholder="Enter your name"
        />
        <Separator className="max-w-[70vw] mx-auto"/>
        <Features
          title="Why choose Suma?"
          description="There is no reason, really. This is just my way of building shit."
          features={[           
            {
              title: "File system router",
              description: "This is how all routing should be done ideally!",
              icon: "Files"
            },
            {
              title: "Custom components",
              description: "Powered by shadcn and other components based on it",
              icon: "Brush"
            },
            {
              title: "Easy configuration",
              description: "Suma offers a wide range of configurable options for a tailored setup",
              icon: "Settings"
            },
          ]}
        />
      </div>
    </>
  )
}

