import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const themeModes = ["light", "dark", "system"]
  const [modeIndex, setModeIndex] = useState(themeModes.indexOf(theme || "light"))
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const modes = [
    { name: "light", icon: <Sun className="h-[1.2rem] w-[1.2rem]" /> },
    { name: "dark", icon: <Moon className="h-[1.2rem] w-[1.2rem]" /> },
    { name: "system", icon: <Monitor className="h-[1.2rem] w-[1.2rem]" /> },
  ]

  useEffect(() => {
    setModeIndex(themeModes.indexOf(theme))
  }, [theme])

  const toggleTheme = () => {
    const nextIndex = (modeIndex + 1) % modes.length
    setTheme(modes[nextIndex].name)

    setTooltipOpen(true)

    setTimeout(() => {
      if (!isHovering) {
        setTooltipOpen(false)
      }
    }, 1000)
  }

  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={toggleTheme}
            onMouseEnter={() => {
              setIsHovering(true)
              setTooltipOpen(true)
            }}
            onMouseLeave={() => {
              setIsHovering(false)
              setTooltipOpen(false)
            }}
          >
            {modes[modeIndex].icon}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {`Theme : ${modes[modeIndex].name.charAt(0).toUpperCase() + modes[modeIndex].name.slice(1)}`}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

