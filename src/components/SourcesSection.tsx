import { useTranslations, useMessages } from 'next-intl';

type SourceItem = { name: string; url: string };

/**
 * 资料来源板块（SourcesSection）—— 增强 E-E-A-T 专业性
 * 仅收录政府/官方机构、权威百科与世界遗产官方数据库等出站链接。
 */
export default function SourcesSection() {
  const t = useTranslations('sources');
  const messages = useMessages() as any;
  const footer = useTranslations('footer');
  const references = messages.sources.items as SourceItem[];
  const official = Object.values(footer.raw('officialLinks')) as SourceItem[];
  const items = Array.from(new Map([...official, ...references].map(item => [item.url, item])).values());

  return (
    <section
      id="sources"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h1>
        <div
          className="w-12 h-0.5 mb-6 mx-auto rounded-full"
          style={{ background: 'var(--accent)' }}
        />
        <p
          className="text-center text-base max-w-3xl mx-auto mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('intro')}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {items.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-lg px-5 py-4 text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <span>{item.name}</span>
                <svg
                  aria-hidden="true"
                  className="shrink-0"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-10 max-w-4xl border-t border-[var(--border-color)] pt-6">
          <h2 className="font-display text-xl">{footer('credits')}</h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">{footer('imageRights')}</p>
        </div>
      </div>
    </section>
  );
}
