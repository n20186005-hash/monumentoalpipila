import { useLocale, useTranslations } from 'next-intl';

const groups = {
  visit: [
    ['horario-y-entrada-pipila', 'guideHours'],
    ['como-llegar-al-pipila', 'guideHowToGetThere'],
    ['funicular-vs-caminar', 'guideFunicularWalk'],
    ['historia-del-pipila', 'guideHistory'],
    ['mirador-del-pipila-atardecer', 'guideViewpoint'],
    ['pipila-sunset-night-view', 'guideSunset'],
  ],
  explore: [
    ['guanajuato-one-day-itinerary', 'oneDayTrip'],
    ['things-to-do-in-guanajuato', 'thingsToDo'],
    ['funicular-guanajuato-guide', 'guideFunicular'],
    ['churches-in-guanajuato-mexico', 'guideChurches'],
    ['attractions/teatro-juarez', 'theatre'],
    ['attractions/alhondiga-de-granaditas', 'granary'],
  ],
} as const;

export default function GuideDirectory() {
  const t = useTranslations('footer');
  const sources = useTranslations('sources');
  const locale = useLocale();
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-3xl">{t('guides')}</h2>
        <a id="sources" className="scroll-mt-24 text-sm text-[var(--accent)] hover:underline" href={`/${locale}/sources`}>{sources('title')} →</a>
      </div>
      <div className="grid items-start gap-3 sm:grid-cols-2">
        {Object.entries(groups).map(([key, links]) => (
          <details key={key} className="rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)]">
            <summary className="cursor-pointer px-5 py-4 font-medium">{t(key)}</summary>
            <ul className="mx-5 border-t border-[var(--border-color)] py-2">
              {links.map(([slug, label]) => (
                <li key={slug}><a className="block py-2 text-sm text-[var(--accent)] hover:underline" href={`/${locale}/${slug}`}>{t(label)}</a></li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
