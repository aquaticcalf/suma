import { ModeToggle } from "@/components/ui/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/nav-bar"

const navConfig = {
  left: [
    { label: "suma", href: "/", icon: "Flower" }
  ],
  center: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/", icon: "Info" },
    { label: "Services", href: "/", icon: "Briefcase" },
    { label: "Contact", href: "/", icon: "Mail" }
  ],
  right: [
    { component: <ModeToggle /> }
  ]
}

export default function Home() {
  return (
    <>
      <Navbar navItems={navConfig} />
      <div className="min-h-screen flex items-center justify-center">
        <ModeToggle />
        <div className="h-5 px-2">
          <Separator orientation="vertical"/>
        </div>
        <Button>
          suma
        </Button>
      </div>
    </>
  )
}
