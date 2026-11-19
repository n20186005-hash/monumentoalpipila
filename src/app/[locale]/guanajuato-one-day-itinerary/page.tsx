import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';

const slug = 'guanajuato-one-day-itinerary';
const base = 'https://www.monumentoalpipila.com';
const content = {
  en: {
    title: 'One Day in Guanajuato: Walkable Itinerary, El Pípila & Funicular',
    description: 'Plan one day in Guanajuato, Mexico: historic centre walking route, El Pípila viewpoint, funicular options, museums, churches and sunset tips.',
    tag: 'Guanajuato travel planning', intro: 'One day is enough for a first look at Guanajuato’s compact historic centre, but not for every museum and neighbourhood. This route groups nearby sights on foot, then saves the hilltop El Pípila viewpoint for the late afternoon.',
    basics: 'Allow a full day, wear shoes suited to steep cobbled streets, and carry water. Museum opening days, funicular schedules and ticket prices can change; verify them locally before setting out.',
    routeTitle: 'A practical one-day walking route',
    stops: [
      ['Morning · Jardín de la Unión and Teatro Juárez', 'Begin in the shaded central garden. Look at the theatre façade and the surrounding streets before the busiest part of the day.'],
      ['Late morning · Basilica and Plaza de la Paz', 'Walk to the yellow Basilica of Our Lady of Guanajuato, then continue through Plaza de la Paz. Notice how the hillside streets frame the historic buildings.'],
      ['Midday · Alhóndiga de Granaditas', 'Visit this historic building if its opening schedule fits. It is central to the 1810 independence story associated with El Pípila. Leave time for a relaxed lunch nearby.'],
      ['Afternoon · Streets and alleyways', 'Explore pedestrian lanes at a comfortable pace. Choose a short circuit rather than trying to cover every distant attraction.'],
      ['Late afternoon · El Pípila viewpoint', 'Take the funicular from near Teatro Juárez or walk uphill if comfortable with steep steps. Arrive before sunset to see the colourful rooftops in daylight and then illuminated.'],
    ],
    optionsTitle: 'Make the day your own',
    options: ['If you have limited mobility, ask about current funicular access and avoid assuming that all historic streets are step-free.', 'If museums matter most, reserve more time for one or two interiors and shorten the alleyway walk.', 'For a quieter view, consider visiting El Pípila earlier; sunset is popular and queues may develop.'],
    next: 'Related planning guides', links: ['El Pípila funicular: boarding, schedule and fares', 'El Pípila opening hours and admission', 'History of El Pípila', '15 things to do in Guanajuato'], back: 'Back to the monument guide', updated: 'Reviewed November 2026',
  },
  es: {
    title: 'Qué hacer en Guanajuato en un día: ruta, Pípila y funicular',
    description: 'Ruta para recorrer Guanajuato en un día: Jardín de la Unión, Teatro Juárez, basílica, Alhóndiga, mirador del Pípila y cómo subir en funicular.',
    tag: 'Planifica tu visita', intro: 'Un día permite conocer el centro histórico de Guanajuato sin intentar verlo todo. Esta ruta reúne paradas cercanas que puedes recorrer a pie y deja el mirador del Pípila para la tarde.',
    basics: 'Reserva un día completo, lleva agua y calzado cómodo para calles empinadas y empedradas. Los horarios de museos y funicular, así como los precios, pueden cambiar; compruébalos antes de salir.',
    routeTitle: 'Ruta de un día, paso a paso',
    stops: [
      ['Mañana · Jardín de la Unión y Teatro Juárez', 'Comienza en el jardín y observa la fachada del teatro y las calles cercanas antes de las horas de mayor afluencia.'],
      ['Media mañana · Basílica y Plaza de la Paz', 'Camina hasta la basílica de fachada amarilla y recorre la plaza. Fíjate en las calles que suben por las laderas.'],
      ['Mediodía · Alhóndiga de Granaditas', 'Si el horario lo permite, visita este edificio vinculado a los acontecimientos de 1810 y a la historia de El Pípila. Haz una pausa para comer.'],
      ['Tarde · Callejones del centro', 'Recorre algunos callejones peatonales sin prisas. Es mejor una ruta corta que intentar visitar todos los sitios alejados.'],
      ['Última hora · Mirador del Pípila', 'Sube en funicular desde las inmediaciones del Teatro Juárez o camina por calles y escaleras empinadas. Llega antes del atardecer para ver los tejados con luz natural.'],
    ],
    optionsTitle: 'Cómo ajustar el recorrido',
    options: ['Si tienes movilidad reducida, consulta la accesibilidad actual del funicular: no todas las calles históricas tienen acceso sin escalones.', 'Si prefieres museos, dedica más tiempo a uno o dos y acorta el tramo de callejones.', 'Para evitar las aglomeraciones de la puesta de sol, considera subir al Pípila más temprano.'],
    next: 'Guías para completar la visita', links: ['Funicular de Guanajuato: horario, precio y acceso', 'Horario y entrada del Pípila', 'Historia del Pípila', '15 cosas que hacer en Guanajuato'], back: 'Volver a la guía del monumento', updated: 'Revisado en noviembre de 2026',
  },
  zh: {
    title: '瓜纳华托一日游路线：皮皮拉观景台、缆车与老城步行攻略',
    description: '瓜纳华托一日游路线与交通建议：联合花园、华雷斯剧院、圣母圣殿、粮仓博物馆、老城巷弄及皮皮拉观景台日落。',
    tag: '瓜纳华托行程规划', intro: '一天足以初步认识瓜纳华托紧凑的历史城区，但不适合把所有博物馆与远处街区都排进去。这条路线以步行为主，把皮皮拉山顶观景台安排在傍晚。',
    basics: '建议预留完整一天，穿适合陡坡与石板路的鞋，并带饮水。博物馆开放日、缆车班次与票价可能调整，出发前请查询现场最新信息。',
    routeTitle: '一日步行路线',
    stops: [
      ['上午 · 联合花园与华雷斯剧院', '从绿荫环绕的联合花园出发，欣赏剧院立面和周边街道，避开人潮最多的时段。'],
      ['上午稍晚 · 圣母圣殿与和平广场', '步行至黄色立面的圣殿，再经过和平广场，观察山城街道与历史建筑的高低层次。'],
      ['中午 · 格拉纳迪塔斯粮仓', '若开放时间允许，可参观这座与 1810 年独立战争及皮皮拉故事相关的建筑，随后在附近午餐。'],
      ['下午 · 历史城区巷弄', '挑选几条步行巷弄慢慢走，不必试图把所有外围景点塞进同一天。'],
      ['傍晚 · 皮皮拉观景台', '可从华雷斯剧院附近搭乘缆车，或沿陡坡台阶步行上山。建议在日落前抵达，同时欣赏日光和亮灯后的彩色屋顶。'],
    ],
    optionsTitle: '按自己的节奏调整',
    options: ['行动不便的旅客请先核对缆车的实际无障碍条件，历史城区并非处处都有无台阶通道。', '喜欢博物馆的旅客，可以保留一至两个室内参观重点，缩短巷弄散步时间。', '如果希望避开日落人潮，可以提前登上皮皮拉观景台。'],
    next: '相关实用攻略', links: ['瓜纳华托缆车：上车地点、时间与票价', '皮皮拉开放时间与门票', '皮皮拉历史', '瓜纳华托必做的 15 件事'], back: '返回纪念碑指南', updated: '2026 年 11 月复核',
  },
} as const;

const paths = ['funicular-guanajuato-guide', 'horario-y-entrada-pipila', 'historia-del-pipila', 'things-to-do-in-guanajuato'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale === 'es' || locale === 'zh' ? locale : 'en';
  const c = content[lang];
  return { title: c.title, description: c.description, alternates: {
    canonical: `${base}/${lang}/${slug}`,
    languages: { en: `${base}/en/${slug}`, es: `${base}/es/${slug}`, zh: `${base}/zh/${slug}`, 'x-default': `${base}/en/${slug}` },
  } };
}

export default async function ItineraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === 'es' || locale === 'zh' ? locale : 'en';
  const c = content[lang];
  return <>
    <main className="min-h-screen px-4 sm:px-6 py-16 sm:py-24" style={{ background: 'var(--bg-primary)' }}>
      <article className="max-w-3xl mx-auto">
        <a href={`/${lang}`} className="text-sm hover:underline" style={{ color: 'var(--accent)' }}>← {c.back}</a>
        <p className="text-xs uppercase tracking-widest mt-10 mb-3" style={{ color: 'var(--text-muted)' }}>{c.tag}</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>{c.title}</h1>
        <p className="text-xs mb-9" style={{ color: 'var(--text-muted)' }}>{c.updated}</p>
        <p className="leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{c.intro}</p>
        <div className="rounded-2xl p-6 mb-12" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>{c.basics}</div>
        <h2 className="font-display text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{c.routeTitle}</h2>
        <ol className="space-y-7 mb-12">{c.stops.map(([title, description], index) => <li key={title} className="flex gap-4"><span className="font-bold text-lg" style={{ color: 'var(--accent)' }}>{index + 1}.</span><div><h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3><p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p></div></li>)}</ol>
        <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{c.optionsTitle}</h2>
        <ul className="list-disc pl-6 space-y-3 mb-12" style={{ color: 'var(--text-secondary)' }}>{c.options.map(option => <li key={option}>{option}</li>)}</ul>
        <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{c.next}</h2>
        <nav className="grid sm:grid-cols-2 gap-3">{paths.map((path, index) => <a key={path} className="rounded-xl p-4 font-medium hover:underline" style={{ color: 'var(--accent)', background: 'var(--card-bg)', border: '1px solid var(--border-color)' }} href={`/${lang}/${path}`}>{c.links[index]} →</a>)}</nav>
      </article>
    </main>
    <Footer />
  </>;
}
