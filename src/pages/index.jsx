import { ModeToggle } from "@/components/ui/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
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
