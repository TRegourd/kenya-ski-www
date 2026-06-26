import { config, fields, singleton, collection } from "@keystatic/core";

export default config({
  storage:
    process.env.NODE_ENV === "development"
      ? {
          kind: "local",
        }
      : {
          kind: "github",
          repo: {
            owner: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_OWNER!,
            name: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO!,
          },
        },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "src/content/homepage",
      schema: {
        hero: fields.object(
          {
            headline: fields.text({ label: "Headline" }),
            subheadline: fields.text({ label: "Subheadline", multiline: true }),
            primaryCtaText: fields.text({ label: "Primary CTA Text" }),
            primaryCtaLink: fields.text({ label: "Primary CTA Link" }),
            secondaryCtaText: fields.text({ label: "Secondary CTA Text" }),
            secondaryCtaLink: fields.text({ label: "Secondary CTA Link" }),
          },
          { label: "Hero Section" },
        ),

        partners: fields.object(
          {
            show: fields.checkbox({
              label: "Show Partners Section",
              defaultValue: true,
            }),
            title: fields.text({ label: "Section Title" }),
            logos: fields.array(
              fields.object({
                name: fields.text({ label: "Partner Name" }),
                logo: fields.image({
                  label: "Logo",
                  directory: "public/images/partners",
                  publicPath: "/images/partners",
                }),
              }),
              { label: "Partner Logos" },
            ),
          },
          { label: "Partners Section" },
        ),

        features: fields.object(
          {
            title: fields.text({ label: "Section Title" }),
            subtitle: fields.text({ label: "Section Subtitle" }),
            items: fields.array(
              fields.object({
                title: fields.text({ label: "Feature Title" }),
                description: fields.text({
                  label: "Description",
                  multiline: true,
                }),
                icon: fields.text({ label: "Icon Name (Lucide)" }),
              }),
              { label: "Features" },
            ),
          },
          { label: "Features Section" },
        ),

        stats: fields.object(
          {
            show: fields.checkbox({
              label: "Show Stats Section",
              defaultValue: true,
            }),
            items: fields.array(
              fields.object({
                value: fields.text({ label: "Value (e.g. 10k+)" }),
                label: fields.text({ label: "Label" }),
              }),
              { label: "Stats" },
            ),
          },
          { label: "Stats Section" },
        ),

        testimonials: fields.object(
          {
            title: fields.text({ label: "Section Title" }),
            items: fields.array(
              fields.object({
                quote: fields.text({ label: "Quote", multiline: true }),
                author: fields.text({ label: "Author Name" }),
                role: fields.text({ label: "Author Role/Company" }),
                avatar: fields.image({
                  label: "Avatar",
                  directory: "public/images/testimonials",
                  publicPath: "/images/testimonials",
                }),
              }),
              { label: "Testimonials" },
            ),
          },
          { label: "Testimonials Section" },
        ),

        cta: fields.object(
          {
            title: fields.text({ label: "Title" }),
            subtitle: fields.text({ label: "Subtitle", multiline: true }),
            buttonText: fields.text({ label: "Button Text" }),
            buttonLink: fields.text({ label: "Button Link" }),
          },
          { label: "Final CTA Section" },
        ),
      },
    }),
    about: singleton({
      label: "About Page",
      path: "src/content/about",
      schema: {
        heroTitle: fields.text({ label: "Hero Title" }),
        heroSubtitle: fields.text({ label: "Hero Subtitle", multiline: true }),
        foundation: fields.text({
          label: "Our Foundation (story)",
          multiline: true,
        }),
        programsIntro: fields.text({
          label: "Programs Intro",
          multiline: true,
        }),
        programs: fields.array(
          fields.object({
            title: fields.text({ label: "Program Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            icon: fields.text({ label: "Icon Name (Lucide)" }),
          }),
          {
            label: "Programs",
            itemLabel: (props) => props.fields.title.value,
          },
        ),
        vision: fields.text({
          label: "Long-Term Vision",
          multiline: true,
        }),
      },
    }),
  },
  collections: {
    athletes: collection({
      label: "Athletes",
      slugField: "name",
      path: "src/content/athletes/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        discipline: fields.text({ label: "Discipline" }),
        tagline: fields.text({
          label: "Tagline",
          description: "Short headline, e.g. 'Olympian · Flag Bearer'",
        }),
        born: fields.text({ label: "Born (e.g. 12 March 2007)" }),
        basedIn: fields.text({ label: "Based In" }),
        portrait: fields.image({
          label: "Portrait",
          directory: "public/images/athletes",
          publicPath: "/images/athletes",
        }),
        actionImage: fields.image({
          label: "Action Photo (profile hero)",
          directory: "public/images/athletes",
          publicPath: "/images/athletes",
        }),
        shortBio: fields.text({
          label: "Short Bio (card / listing)",
          multiline: true,
        }),
        profile: fields.text({
          label: "Profile (intro paragraphs)",
          multiline: true,
        }),
        journey: fields.text({
          label: "Sporting Journey",
          multiline: true,
        }),
        clubs: fields.array(fields.text({ label: "Club" }), {
          label: "Ski Clubs",
          itemLabel: (props) => props.value,
        }),
        highlights: fields.array(fields.text({ label: "Highlight" }), {
          label: "Career Highlights",
          itemLabel: (props) => props.value,
        }),
        milestones: fields.array(
          fields.object({
            event: fields.text({ label: "Event" }),
            details: fields.array(fields.text({ label: "Detail" }), {
              label: "Details",
              itemLabel: (props) => props.value,
            }),
          }),
          {
            label: "Historic Milestones",
            itemLabel: (props) => props.fields.event.value,
          },
        ),
        quotes: fields.array(
          fields.object({
            theme: fields.text({ label: "Theme (e.g. Identity)" }),
            text: fields.text({ label: "Quote", multiline: true }),
          }),
          {
            label: "Values & Quotes",
            itemLabel: (props) => props.fields.theme.value,
          },
        ),
        featuredQuote: fields.text({
          label: "Featured Quote",
          multiline: true,
        }),
        gallery: fields.array(
          fields.object({
            image: fields.image({
              label: "Image",
              directory: "public/images/athletes",
              publicPath: "/images/athletes",
            }),
            alt: fields.text({ label: "Alt Text" }),
          }),
          {
            label: "Gallery",
            itemLabel: (props) => props.fields.alt.value,
          },
        ),
        order: fields.number({ label: "Sort Order", defaultValue: 0 }),
        isPublished: fields.checkbox({
          label: "Published",
          defaultValue: true,
        }),
      },
    }),
    teamMembers: collection({
      label: "Team Members",
      slugField: "name",
      path: "src/content/team/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        role: fields.text({ label: "Role" }),
        bio: fields.text({ label: "Bio", multiline: true }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/team",
          publicPath: "/images/team",
        }),
        order: fields.number({ label: "Sort Order", defaultValue: 0 }),
        group: fields.select({
          label: "Group",
          options: [
            { label: "Executive Committee", value: "executive" },
            { label: "Management Team", value: "management" },
          ],
          defaultValue: "executive",
        }),
        linkedinUrl: fields.text({ label: "LinkedIn URL" }),
        email: fields.text({ label: "Email" }),
        quote: fields.text({ label: "Quote", multiline: true }),
      },
    }),
    faqs: collection({
      label: "FAQs",
      slugField: "question",
      path: "src/content/faqs/*",
      schema: {
        question: fields.slug({ name: { label: "Question" } }),
        answer: fields.document({
          label: "Answer",
          formatting: true,
          dividers: true,
          links: true,
        }),
        order: fields.number({ label: "Sort Order", defaultValue: 0 }),
        isPublished: fields.checkbox({
          label: "Published",
          defaultValue: true,
        }),
      },
    }),
  },
});
