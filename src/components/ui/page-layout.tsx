import { ReactNode } from "react"

interface PageLayoutProps {
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
}

export function PageLayout({ title, description, children, className }: PageLayoutProps) {
  return (
    <div className={`container mx-auto py-16 px-5 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
          {description && (
            <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}