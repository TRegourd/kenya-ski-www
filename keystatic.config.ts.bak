import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? {
          kind: 'local',
        }
      : {
          kind: 'github',
          repo: {
            owner: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_OWNER!,
            name: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO!,
          },
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



        cta: fields.object({
          title: fields.text({ label: 'Title' }),
          subtitle: fields.text({ label: 'Subtitle', multiline: true }),
          buttonText: fields.text({ label: 'Button Text' }),
          buttonLink: fields.text({ label: 'Button Link' }),
        }, { label: 'Final CTA Section' }),
      },
    }),
    about: singleton({
      label: 'About Page',
      path: 'src/content/about',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle', multiline: true }),
        mission: fields.text({ 
            label: 'Mission Statement', 
            multiline: true 
        }),

        programs: fields.array(
            fields.object({
                title: fields.text({ label: 'Program Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
                icon: fields.text({ label: 'Icon Name (Lucide)' }),
            }),
            { label: 'Programs' }
        ),
      },
    }),
  },
  collections: {
    teamMembers: collection({
        label: 'Team Members',
        slugField: 'name',
        path: 'src/content/team/*',
        schema: {
            name: fields.slug({ name: { label: 'Name' } }),
            role: fields.text({ label: 'Role' }),
            bio: fields.text({ label: 'Bio', multiline: true }),
            avatar: fields.image({
                label: 'Avatar',
                directory: 'public/images/team',
                publicPath: '/images/team',
            }),
            order: fields.number({ label: 'Sort Order', defaultValue: 0 }),
            group: fields.select({
                label: 'Group',
                options: [
                    { label: 'Executive Committee', value: 'executive' },
                    { label: 'Management Team', value: 'management' },
                ],
                defaultValue: 'executive',
            }),
            linkedinUrl: fields.text({ label: 'LinkedIn URL' }),
            email: fields.text({ label: 'Email' }),
        },
    }),
    faqs: collection({
        label: 'FAQs',
        slugField: 'question',
        path: 'src/content/faqs/*',
        schema: {
            question: fields.slug({ name: { label: 'Question' } }),
            answer: fields.document({
                label: 'Answer',
                formatting: true,
                dividers: true,
                links: true,
            }),
            order: fields.number({ label: 'Sort Order', defaultValue: 0 }),
            isPublished: fields.checkbox({ label: 'Published', defaultValue: true }),
        },
    }),
  },
});
