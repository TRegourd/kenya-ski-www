import { createReader } from '@keystatic/core/reader';
import config from '../../../keystatic.config';

const reader = createReader(process.cwd(), config);

export async function getHomepageData() {
  const homepage = await reader.singletons.homepage.read();
  return homepage;
}

export async function getFAQs() {
  const faqs = await reader.collections.faqs.all();
  const publishedFaqs = faqs.filter(f => f.entry.isPublished);
  
  return Promise.all(publishedFaqs.map(async f => {
    const answer = await f.entry.answer();
    return {
      ...f.entry,
      answer,
    };
  })).then(items => items.sort((a, b) => (a.order || 0) - (b.order || 0)));
}

export async function getAthleteQuotes() {
  const athletes = await reader.collections.athletes.all();
  return athletes
    .filter((a) => a.entry.isPublished && a.entry.featuredQuote)
    .sort((a, b) => (a.entry.order || 0) - (b.entry.order || 0))
    .map((a) => ({
      slug: a.slug,
      name: a.entry.name,
      discipline: a.entry.discipline,
      portrait: a.entry.portrait,
      quote: a.entry.featuredQuote,
    }));
}

export type HomepageData = Awaited<ReturnType<typeof getHomepageData>>;
export type FAQEntry = Awaited<ReturnType<typeof getFAQs>>[number];
export type AthleteQuote = Awaited<ReturnType<typeof getAthleteQuotes>>[number];
