import { cn } from "@/lib/utils/cn"
import { Container } from "./container"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  description?: string
  centered?: boolean
  containerClassName?: string
}

export function Section({ 
  className, 
  title, 
  subtitle, 
  description, 
  centered = false,
  containerClassName,
  children, 
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn("py-16 md:py-24", className)} 
      {...props}
    >
      <Container className={containerClassName}>
        {(title || subtitle || description) && (
          <div className={cn(
            "mb-12 max-w-3xl", 
            centered && "mx-auto text-center"
          )}>
            {subtitle && (
              <p className="text-primary font-medium mb-3">{subtitle}</p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
