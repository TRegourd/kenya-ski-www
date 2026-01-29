import { Section } from "@/components/ui/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DocumentRenderer } from '@keystatic/core/renderer'

interface FAQSectionProps {
  data: {
    title: string
    items: readonly {
      question: string
      answer: unknown // Rich text document
    }[]
  }
}

export function FAQSection({ data }: FAQSectionProps) {
  return (
    <Section title={data.title} centered containerClassName="max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {data.items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              <DocumentRenderer document={Array.isArray(item.answer) ? item.answer : []} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
