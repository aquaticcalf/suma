import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"

interface AnnouncementBarProps {
  message: string
  ctaText?: string
  ctaLink?: string
  variant?: "default" | "warning" | "success"
}

export function AnnouncementBar({ 
  message, 
  ctaText, 
  ctaLink, 
  variant = "default" 
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const variantStyles = {
    default: "bg-primary/10 text-primary border-primary/20",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    success: "bg-green-100 text-green-800 border-green-200"
  }

  return (
    <div className={`border-b ${variantStyles[variant]} py-2 px-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">{message}</span>
        </div>
        <div className="flex items-center space-x-2">
          {ctaText && ctaLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}