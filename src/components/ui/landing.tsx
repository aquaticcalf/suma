import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import * as LucideIcons from "lucide-react"

interface HeroProps {
  title: ReactNode
  subtitle: ReactNode
  badgeText?: ReactNode
  primaryButtonLabel?: ReactNode
  primaryButtonLink?: string
  secondaryButtonLabel?: ReactNode
  secondaryButtonLink?: string
  signupCardTitle?: ReactNode
  signupCardText?: ReactNode
  signupButtonLabel?: ReactNode
  signupPlaceholder?: string
  showSignupCard?: boolean
}

export function Hero({
  title,
  subtitle,
  badgeText,
  primaryButtonLabel,
  primaryButtonLink,
  secondaryButtonLabel,
  secondaryButtonLink,
  signupCardTitle,
  signupCardText,
  signupButtonLabel,
  signupPlaceholder,
  showSignupCard = true,
}: HeroProps) {
  return (
    <section className="container mx-auto py-16 flex flex-col items-center space-y-6 px-5">
      {badgeText && <Badge variant="outline">{badgeText}</Badge>}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">{title}</h1>
      <p className="text-muted-foreground text-center max-w-xl">{subtitle}</p>
      <div className="flex flex-row gap-4 mt-2">
        {primaryButtonLabel && (
          <Button asChild={!!primaryButtonLink} size="lg">
            {primaryButtonLink ? (
              <a href={primaryButtonLink}>{primaryButtonLabel}</a>
            ) : (
              primaryButtonLabel
            )}
          </Button>
        )}
        {secondaryButtonLabel && (
          <Button asChild={!!secondaryButtonLink} variant="outline" size="lg">
            {secondaryButtonLink ? (
              <a href={secondaryButtonLink}>{secondaryButtonLabel}</a>
            ) : (
              secondaryButtonLabel
            )}
          </Button>
        )}
      </div>
      {showSignupCard && (
        <Card className="w-full max-w-lg mt-6">
          <CardHeader>
            {signupCardTitle && <CardTitle>{signupCardTitle}</CardTitle>}
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{signupCardText}</p>
            <div className="flex w-full">
              <Input type="email" placeholder={signupPlaceholder || "Email address"} className="flex-1" />
              <Button className="ml-2">{signupButtonLabel || "Sign Up"}</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  )
}

interface FeatureItem {
  title: ReactNode
  description: ReactNode
  icon: keyof typeof LucideIcons
}

interface FeaturesProps {
  features?: FeatureItem[]
  title?: ReactNode
  description?: ReactNode
}

export function Features({ features = [], title, description }: FeaturesProps) {
  return (
    <section className="container mx-auto py-10 px-5">
      {(title || description) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
          {description && <p className="text-muted-foreground mt-2">{description}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ title, description, icon }, index) => {
          const IconComponent = (LucideIcons[icon] as React.ElementType) || (LucideIcons.CircleDashed as React.ElementType)

          return (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-muted mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
