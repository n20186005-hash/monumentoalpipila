import Footer from '@/components/Footer';
import { culturalPlaces } from '@/data/culturalPlaces';
import type { GuideLanguage } from '@/data/nearbyGuides';

const labels = {
  en: { back: 'Back to nearby attractions', route: 'Walking route', planning: 'Plan your visit', address: 'Address', map: 'Open the location on Google Maps', faq: 'Visitor questions', hours: 'When can I visit and what does admission cost?', check: 'The cultural directory lists the following arrangements. Confirm with the venue for your date.', tickets: 'General admission', door: 'Ask the venue about admission for your visit.', programme: 'Access follows the performance and box-office schedule.', free: 'Free admission.', owner: 'Who handles visitor enquiries here?', source: 'Cultural information and photograph', edition: 'Directory record updated in', history: 'History and things to notice' },
  es: { back: 'Volver a los lugares cercanos', route: 'Recorrido a pie', planning: 'Organiza la visita', address: 'Dirección', map: 'Abrir la ubicación en Google Maps', faq: 'Preguntas de visitantes', hours: '¿Cuándo puedo ir y cuánto cuesta entrar?', check: 'El directorio cultural indica las siguientes condiciones. Confirma con el recinto para la fecha elegida.', tickets: 'Entrada general', door: 'Consulta las condiciones de entrada directamente con el recinto.', programme: 'El acceso depende de la cartelera y los horarios de taquilla.', free: 'Entrada libre.', owner: '¿Quién atiende las consultas sobre este recinto?', source: 'Información cultural y fotografía', edition: 'Año de actualización de la ficha', history: 'Historia y detalles que observar' },
  zh: { back: '返回周边景点', route: '步行路线', planning: '参观实用信息', address: '详细地址', map: '在 Google 地图查看本景点', faq: '游客常见问题', hours: '何时可以参观，入场怎样收费？', check: '以下开放安排来自文化名录，出发前可向场馆核对当日安排。', tickets: '普通票', door: '当日入场条件请向场馆查询。', programme: '观众厅开放安排取决于当期演出与售票时间。', free: '免费入场。', owner: '本场馆的管理或游客接待单位是哪一家？', source: '文化资料与实景照片', edition: '名录条目更新年份', history: '历史与现场看点' },
};

export default function CulturalPlacePage({slug, lang}: {slug: string; lang: GuideLanguage}) {
  const place = culturalPlaces[slug];
  const copy = place.copy[lang];
  const t = labels[lang];
  const price = place.fee === null ? t.door : place.fee === 0 ? t.free : t.tickets + ' · MX$' + place.fee;
  const questions = [
    [copy.question, copy.answer],
    [t.hours, [copy.hours ? t.check : '', copy.hours || t.programme, price].filter(Boolean).join(' ')],
    [t.owner, copy.operator],
  ];
  return <><main className="px-4 sm:px-6 py-14 sm:py-20" style={{background:'var(--bg-primary)', color:'var(--text-primary)'}}>
    <article className="max-w-4xl mx-auto">
      <a className="text-sm hover:underline" style={{color:'var(--accent)'}} href={`/${lang}#nearby`}>← {t.back}</a>
      <h1 className="font-display text-3xl sm:text-4xl font-bold mt-9 mb-6">{copy.title}</h1>
      <figure className="mb-10"><img className="w-full object-contain max-h-[500px] rounded-2xl" src={place.photo} alt={copy.title}/><figcaption className="text-sm mt-2"><a href={place.source} className="hover:underline">{t.source} · SIC México</a></figcaption></figure>
      <section className="mb-10"><h2 className="font-display text-2xl mb-3">{t.history}</h2><p className="leading-relaxed">{copy.body}</p></section>
      <section className="mb-10"><h2 className="font-display text-2xl mb-3">{t.route}</h2><p className="leading-relaxed">{copy.route}</p></section>
      <section className="rounded-2xl p-6 mb-10" style={{background:'var(--bg-secondary)'}}><h2 className="font-display text-2xl mb-3">{t.planning}</h2><p>{t.address} · {place.address}</p><a href={place.map} className="font-semibold hover:underline" style={{color:'var(--accent)'}}>{t.map} ↗</a></section>
      <section className="mb-10"><h2 className="font-display text-2xl mb-4">{t.faq}</h2><dl className="space-y-5">{questions.map(([q,a])=><div key={q}><dt className="font-semibold">{q}</dt><dd className="mt-2 leading-relaxed">{a}</dd></div>)}</dl></section>
      <a className="text-sm hover:underline" href={place.source}>{t.edition} {place.year} · Sistema de Información Cultural ↗</a>
    </article></main><Footer/></>;
}
