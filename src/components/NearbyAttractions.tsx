import { useTranslations, useMessages, useLocale } from 'next-intl';
import { placeCards } from '@/data/culturalPlaces';
import { nearbyGuides, type GuideLanguage } from '@/data/nearbyGuides';

type Place = { name: string; desc: string };

const zhNames: Record<string, string> = {
  'jardin-de-la-union': '联合花园',
  'basilica-guanajuato': '瓜纳华托圣母圣殿',
  'universidad-de-guanajuato': '瓜纳华托大学',
  'callejon-del-beso': '接吻巷',
  'mercado-hidalgo': '伊达尔戈市场',
  'museo-casa-diego-rivera': '迭戈·里维拉故居博物馆',
  'plaza-de-la-paz': '和平广场',
  'templo-de-san-diego': '圣迭戈教堂',
  'templo-de-la-compania': '耶稣会教堂',
};

/** 将 **加粗** 语法渲染为语义化 <strong> */
function renderRich(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary)">$1</strong>');
}

/**
 * 周边语义集群板块（SEO 实体绑定 - 4.3）
 * 语义等同：Monumento Al Pipila 与 El Pípila；锚定周边地标。
 */
export default function NearbyAttractions() {
  const t = useTranslations('nearby');
  const locale = useLocale();
  const messages = useMessages() as any;
  const places = (messages?.nearby?.places ?? []) as Place[];
  const lang: GuideLanguage = locale === 'es' || locale === 'zh' ? locale : 'en';
  const knownSlugs: Record<string, string> = {
    'Teatro Juárez': 'teatro-juarez',
    'Alhóndiga de Granaditas': 'alhondiga-de-granaditas',
    'Jardín de la Unión': 'jardin-de-la-union',
    'Basilica of Our Lady of Guanajuato': 'basilica-guanajuato',
    'Basílica de Nuestra Señora de Guanajuato': 'basilica-guanajuato',
    'University of Guanajuato': 'universidad-de-guanajuato',
    'Universidad de Guanajuato': 'universidad-de-guanajuato',
    'Callejón del Beso': 'callejon-del-beso',
    '格拉纳迪塔斯粮仓': 'alhondiga-de-granaditas',
    '联合花园': 'jardin-de-la-union',
    '华雷斯剧院': 'teatro-juarez',
    '瓜纳华托圣母圣殿': 'basilica-guanajuato',
    '瓜纳华托大学': 'universidad-de-guanajuato',
    '接吻巷': 'callejon-del-beso',
  };
  const existingSlugs = new Set(places.map(place => knownSlugs[place.name]));
  const cards = [
    ...places.map(place => ({ ...place, slug: knownSlugs[place.name] })),
    ...Object.entries(nearbyGuides).filter(([slug]) => !existingSlugs.has(slug)).map(([slug, guide]) => ({ name: lang === 'zh' ? (zhNames[slug] ?? guide.name) : guide.name, desc: guide.copy[lang].intro, slug })),
    ...placeCards(lang),
  ];

  return (
    <section
      id="nearby"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div
          className="w-12 h-0.5 mb-6 mx-auto rounded-full"
          style={{ background: 'var(--accent)' }}
        />
        <p
          className="text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4"
          style={{ color: 'var(--text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: renderRich(t('intro')) }}
        />
        <p
          className="text-center text-sm mb-10 max-w-2xl mx-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('hint')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((place) => (
            <article
              key={place.name}
              className="rounded-xl p-6 flex flex-col gap-2 transition-transform hover:-translate-y-1"
              style={{
                background: 'var(--bg-primary)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <h3
                className="text-lg font-semibold leading-snug"
                style={{ color: 'var(--text-primary)' }}
              >
                {place.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {place.desc}
              </p>
              {place.slug && (
                <a
                  href={`/${locale}/attractions/${place.slug}`}
                  className="mt-2 text-sm font-semibold hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('viewGuide')} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
