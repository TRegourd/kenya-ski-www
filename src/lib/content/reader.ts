import { createReader } from '@keystatic/core/reader';
import config from '../../../keystatic.config';

const reader = createReader(process.cwd(), config);

export async function getHomepageData() {
  const homepage = await reader.singletons.homepage.read();
  return homepage;
}

export type HomepageData = Awaited<ReturnType<typeof getHomepageData>>;
