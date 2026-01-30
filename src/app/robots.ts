import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.kenyaski.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/keystatic/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
