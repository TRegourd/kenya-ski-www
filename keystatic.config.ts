import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        hero: fields.object({
          headline: fields.text({ label: 'Headline' }),
          subheadline: fields.text({ label: 'Subheadline', multiline: true }),
          primaryCtaText: fields.text({ label: 'Primary CTA Text' }),
          primaryCtaLink: fields.text({ label: 'Primary CTA Link' }),
          secondaryCtaText: fields.text({ label: 'Secondary CTA Text' }),
          secondaryCtaLink: fields.text({ label: 'Secondary CTA Link' }),
        }, { label: 'Hero Section' }),
        
        partners: fields.object({
          show: fields.checkbox({ label: 'Show Partners Section', defaultValue: true }),
          title: fields.text({ label: 'Section Title' }),
          logos: fields.array(
            fields.object({
              name: fields.text({ label: 'Partner Name' }),
              logo: fields.image({
                label: 'Logo',
                directory: 'public/images/partners',
                publicPath: '/images/partners',
              }),
            }),
            { label: 'Partner Logos' }
          ),
        }, { label: 'Partners Section' }),

        features: fields.object({
          title: fields.text({ label: 'Section Title' }),
          subtitle: fields.text({ label: 'Section Subtitle' }),
          items: fields.array(
            fields.object({
              title: fields.text({ label: 'Feature Title' }),
              description: fields.text({ label: 'Description', multiline: true }),
              icon: fields.text({ label: 'Icon Name (Lucide)' }),
            }),
            { label: 'Features' }
          ),
        }, { label: 'Features Section' }),

        stats: fields.object({
          show: fields.checkbox({ label: 'Show Stats Section', defaultValue: true }),
          items: fields.array(
            fields.object({
              value: fields.text({ label: 'Value (e.g. 10k+)' }),
              label: fields.text({ label: 'Label' }),
            }),
            { label: 'Stats' }
          ),
        }, { label: 'Stats Section' }),

        testimonials: fields.object({
          title: fields.text({ label: 'Section Title' }),
          items: fields.array(
            fields.object({
              quote: fields.text({ label: 'Quote', multiline: true }),
              author: fields.text({ label: 'Author Name' }),
              role: fields.text({ label: 'Author Role/Company' }),
              avatar: fields.image({
                label: 'Avatar',
                directory: 'public/images/testimonials',
                publicPath: '/images/testimonials',
              }),
            }),
            { label: 'Testimonials' }
          ),
        }, { label: 'Testimonials Section' }),

        faq: fields.object({
          title: fields.text({ label: 'Section Title' }),
          items: fields.array(
            fields.object({
              question: fields.text({ label: 'Question' }),
              answer: fields.document({
                label: 'Answer',
                formatting: true,
                dividers: true,
                links: true,
              }),
            }),
            { label: 'FAQ Items' }
          ),
        }, { label: 'FAQ Section' }),

        cta: fields.object({
          title: fields.text({ label: 'Title' }),
          subtitle: fields.text({ label: 'Subtitle', multiline: true }),
          buttonText: fields.text({ label: 'Button Text' }),
          buttonLink: fields.text({ label: 'Button Link' }),
        }, { label: 'Final CTA Section' }),
      },
    }),
  },
});
