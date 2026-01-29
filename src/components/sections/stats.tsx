import { Section } from "@/components/ui/section"
import { Counter } from "@/components/ui/counter"

interface StatsSectionProps {
  data: {
    show: boolean
    items: readonly {
      value: string
      label: string
    }[]
  }
}

// Helper to extract number and suffix
function parseStat(val: string) {
  const match = val.match(/([\d,\.]+)(.*)/)
  if (!match) return { value: 0, suffix: val }
  const num = parseFloat(match[1].replace(/,/g, ""))
  return { value: num, suffix: match[2] }
}

export function StatsSection({ data }: StatsSectionProps) {
  if (!data.show) return null

  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
        {data.items.map((stat, index) => {
          const { value, suffix } = parseStat(stat.value)
          return (
            <div key={index} className="pt-8 md:pt-0 px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                {/* 
                  Only animate if it's a valid number. 
                  If parse failed, just render the string.
                 */}
                {value > 0 ? (
                  <Counter value={value} suffix={suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
