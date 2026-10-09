import { useMessages, useLocale } from 'next-intl';
import Footer from '@/components/Footer';

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

type Section = { id: string; title: string; paragraphs: string[] };
type Fact = { name: string; value: string };
type FaqItem = { q: string; a: string };

export default function TopicPage({ namespace }: { namespace: string }) {
  const messages = useMessages() as any;
  const locale = useLocale();
  const content = messages?.[namespace];
  const homeHref = `/${locale}`;
  const thingsHref = `/${locale}/things-to-do-in-guanajuato`;

  const headingStyle = { color: 'var(--text-primary)' };
  const bodyStyle = { color: 'var(--text-secondary)' };
  const mutedStyle = { color: 'var(--text-muted)' };

  const intro = (content?.intro || []) as string[];
  const facts = (content?.facts || []) as Fact[];
  const sections = (content?.sections || []) as Section[];
  const faq = (content?.faq || []) as FaqItem[];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <a
          href={thingsHref}
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors no-underline"
          style={{ color: 'var(--accent)' }}
        >
          <ChevronLeftIcon />
          {content?.backLabel || 'Back'}
        </a>

        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={mutedStyle}>
          {content?.eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={headingStyle}>
          {content?.title}
        </h1>
        <p className="text-xs mb-10" style={mutedStyle}>
          {content?.lastUpdated}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <section className="mb-12">
          <h2 id="overview" className="font-display text-2xl font-semibold mb-4 scroll-mt-24" style={headingStyle}>
            {content?.introTitle}
          </h2>
          <div className="space-y-4 leading-relaxed">
            {intro.map((paragraph, i) => (
              <p key={i} style={bodyStyle}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {facts.length > 0 && (
          <section className="mb-12" aria-label={content?.factsTitle}>
            <div
              className="rounded-2xl p-6 sm:p-7"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <h2 className="font-display text-lg font-semibold mb-5" style={headingStyle}>
                {content?.factsTitle}
              </h2>
              <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                {facts.map((fact, i) => (
                  <div key={i}>
                    <dt className="text-xs font-semibold uppercase tracking-wide mb-1" style={mutedStyle}>
                      {fact.name}
                    </dt>
                    <dd className="text-sm leading-relaxed" style={bodyStyle}>
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {sections.map((section) => (
          <section key={section.id} className="mb-12">
            <h2 id={section.id} className="font-display text-2xl font-semibold mb-4 scroll-mt-24" style={headingStyle}>
              {section.title}
            </h2>
            <div className="space-y-4 leading-relaxed">
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} style={bodyStyle}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {faq.length > 0 && (
          <section className="mb-14" aria-label={content?.faqTitle}>
            <h2 className="font-display text-2xl font-semibold mb-6" style={headingStyle}>
              {content?.faqTitle}
            </h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                >
                  <h3 className="font-display font-semibold text-sm mb-2" style={{ color: 'var(--accent)' }}>
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={bodyStyle}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div
          className="rounded-2xl p-6 sm:p-7"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
        >
          <h2 className="font-display text-lg font-semibold mb-2" style={headingStyle}>
            {content?.ctaCardTitle}
          </h2>
          <p className="leading-relaxed text-sm mb-5" style={bodyStyle}>
            {content?.ctaCardText}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href={thingsHref}
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline no-underline"
              style={{ color: 'var(--accent)' }}
            >
              {content?.ctaCardLabel} <ArrowIcon />
            </a>
            <a
              href={homeHref}
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline no-underline"
              style={{ color: 'var(--accent)' }}
            >
              {content?.ctaHomeLabel} <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
