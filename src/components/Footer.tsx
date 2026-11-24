import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-tertiary)] px-4 py-6 text-[var(--text-secondary)] sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="max-w-lg">
          <p className="text-sm font-semibold text-[var(--text-primary)]">{t('rights')}</p>
          <p className="mt-1 text-xs leading-relaxed">{t('disclaimer')}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {([['privacy-policy', 'privacy'], ['terms-of-service', 'terms'], ['cookie-settings', 'cookies']] as const).map(([slug, key]) => (
            <li key={slug}><a className="inline-block py-1 hover:underline" href={`/${locale}/${slug}`}>{t(key)}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
