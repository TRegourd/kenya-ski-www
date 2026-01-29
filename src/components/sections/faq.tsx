import { Section } from "@/components/ui/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DocumentRenderer } from '@keystatic/core/renderer'

interface FAQSectionProps {
  items: readonly {
    question: string
    answer: any // Rich text document
  }[]
}

export function FAQSection({ items }: FAQSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <Section title="Frequently Asked Questions" centered containerClassName="max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed prose prose-sm dark:prose-invert max-w-none">
              <DocumentRenderer document={Array.isArray(item.answer) ? item.answer : []} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
