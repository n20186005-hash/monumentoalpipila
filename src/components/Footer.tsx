import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = `/${locale}`;

  const officialLinksObj = t.raw('officialLinks') as Record<string, { name: string; url: string }>;
  const officialLinks = Object.values(officialLinksObj);

  return (
    <footer
      className="py-12 px-4 sm:px-6"
      style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              Monumento Al Pipila
            </h3>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              {t('officialResourcesTitle')}
            </p>
            <div className="flex flex-col gap-2">
              {officialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-sm" 
                  style={{ color: 'var(--accent)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm mt-4 sm:mt-0">
            <a href={`${prefix}/guanajuato-one-day-itinerary`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {locale === 'es' ? 'Guanajuato en un día' : locale === 'zh' ? '瓜纳华托一日游' : 'One day in Guanajuato'}
            </a>
            <a href={`${prefix}/things-to-do-in-guanajuato`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('thingsToDo')}
            </a>
            <a href={`${prefix}/funicular-guanajuato-guide`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideFunicular')}
            </a>
            <a href={`${prefix}/pipila-sunset-night-view`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideSunset')}
            </a>
            <a href={`${prefix}/churches-in-guanajuato-mexico`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideChurches')}
            </a>
            <a href={`${prefix}/como-llegar-al-pipila`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideHowToGetThere')}
            </a>
            <a href={`${prefix}/historia-del-pipila`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideHistory')}
            </a>
            <a href={`${prefix}/mirador-del-pipila-atardecer`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideViewpoint')}
            </a>
            <a href={`${prefix}/horario-y-entrada-pipila`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideHours')}
            </a>
            <a href={`${prefix}/funicular-vs-caminar`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('guideFunicularWalk')}
            </a>
            <a href={`${prefix}/privacy-policy`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('privacy')}
            </a>
            <a href={`${prefix}/terms-of-service`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('terms')}
            </a>
            <a href={`${prefix}/cookie-settings`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('cookies')}
            </a>
          </div>
        </div>

        <div
          className="pt-6 text-center text-sm space-y-4"
          style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
        >
          <p>{t('rights')}</p>
          <p className="text-xs max-w-3xl mx-auto leading-relaxed">{t('disclaimer')}</p>
          <p className="text-xs max-w-3xl mx-auto leading-relaxed opacity-90">{t('imageRights')}</p>
        </div>
      </div>
    </footer>
  );
}
