import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.monumentoalpipila.com';
  const locales = ['zh', 'en', 'es'];
  const routes = ['', '/attractions/teatro-juarez', '/attractions/alhondiga-de-granaditas', '/guanajuato-one-day-itinerary', '/things-to-do-in-guanajuato', '/funicular-guanajuato-guide', '/pipila-sunset-night-view', '/churches-in-guanajuato-mexico', '/como-llegar-al-pipila', '/historia-del-pipila', '/mirador-del-pipila-atardecer', '/horario-y-entrada-pipila', '/funicular-vs-caminar', '/privacy-policy', '/terms-of-service', '/cookie-settings'];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/things-to-do-in-guanajuato' || route === '/funicular-guanajuato-guide' || route === '/pipila-sunset-night-view' || route === '/churches-in-guanajuato-mexico' || route === '/como-llegar-al-pipila' || route === '/historia-del-pipila' || route === '/mirador-del-pipila-atardecer' || route === '/horario-y-entrada-pipila' || route === '/funicular-vs-caminar' ? 0.8 : 0.5,
      });
    }
  }

  return sitemap;
}
