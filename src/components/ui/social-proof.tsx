import { ReactNode } from "react"

interface SocialProofProps {
  title?: ReactNode
  logos?: { name: string; logo: ReactNode }[]
  testimonials?: { quote: string; author: string; role: string }[]
  metrics?: { value: string; label: string }[]
}

export function SocialProof({ title, logos, testimonials, metrics }: SocialProofProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-5">
        {title && (
          <h3 className="text-2xl font-semibold text-center mb-12">{title}</h3>
        )}
        
        {logos && logos.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {logos.map((company, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                {company.logo}
              </div>
            ))}
          </div>
        )}
        
        {testimonials && testimonials.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        )}
        
        {metrics && metrics.length > 0 && (
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}