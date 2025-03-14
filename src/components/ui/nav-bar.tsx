import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"
import React from "react"

type NavItem = {
  label?: string
  href?: string
  icon?: keyof typeof LucideIcons
  component?: React.ReactNode
}

type NavItems = {
  left?: NavItem[]
  center?: NavItem[]
  right?: NavItem[]
}

type NavbarProps = {
  navItems?: NavItems
}

const Navbar: React.FC<NavbarProps> = ({ navItems = {} }) => {
  const { left = [], center = [], right = [] } = navItems

  const renderNavItems = (
    items: NavItem[],
    variant: "desktop" | "mobile" = "desktop"
  ) =>
    items.map((item, index) => {
      if (item.component) {
        return <React.Fragment key={index}>{item.component}</React.Fragment>
      }
      const Icon = item.icon
        ? (LucideIcons[item.icon] as React.ElementType)
        : (LucideIcons["Square"] as React.ElementType)
      const isMobile = variant === "mobile"
      return (
        <Button
          asChild
          key={index}
          variant="ghost"
          className={
            isMobile
              ? "flex flex-col items-center gap-1 text-xs font-medium text-muted-foreground py-[25px] hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground"
              : "flex items-center gap-2"
          }
        >
          <a href={item.href}>
            {Icon && <Icon className="h-6 w-6" />}
            {item.label && (
              <span className={isMobile ? "" : "text-sm font-medium"}>
                {item.label}
              </span>
            )}
          </a>
        </Button>
      )
    })

  return (
    <>
      {/* desktop navbar – visible on large screens */}
      <header className="hidden lg:flex items-center justify-between px-4 py-3 bg-background border-b border-border fixed top-0 left-0 w-full">
        <div className="flex items-center gap-4">
          {renderNavItems(left, "desktop")}
        </div>
        {center.length > 0 && (
          <nav className="flex items-center gap-6">
            {renderNavItems(center, "desktop")}
          </nav>
        )}
        <div className="flex items-center gap-4">
          {renderNavItems(right, "desktop")}
        </div>
      </header>

      {/* mobile top navbar – visible on small screens */}
      <header className="flex lg:hidden items-center justify-between px-4 py-3 bg-background border-b border-border fixed top-0 left-0 w-full">
        <div className="flex items-center gap-4">
          {renderNavItems(left, "desktop")}
        </div>
        <div className="flex items-center gap-4">
          {renderNavItems(right, "desktop")}
        </div>
      </header>

      {/* mobile bottom navigation – uses center items */}
      {center.length > 0 && (
        <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-background py-2 border-t border-border">
          <div className="flex items-center justify-around">
            {renderNavItems(center, "mobile")}
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar

