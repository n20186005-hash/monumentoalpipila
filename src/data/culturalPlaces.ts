import catalogue from './culturalPlaces.json';
import type { GuideLanguage } from './nearbyGuides';

type Place = (typeof catalogue)[keyof typeof catalogue];
export const culturalPlaces: Record<string, Place> = catalogue;
export const placeCards = (lang: GuideLanguage) => Object.entries(culturalPlaces).map(([slug, place]) => ({
  slug,
  name: place.copy[lang].title,
  desc: place.copy[lang].body.split(/[。]|(?<=\.)\s/)[0] + (lang === 'zh' ? '。' : ''),
}));
