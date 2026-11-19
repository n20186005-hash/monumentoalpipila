import { useLocale } from 'next-intl';
import { SITE } from '@/config/site';

type Kind = 'monument' | 'funicular' | 'churches';

const content = {
  en: {
    title: 'Plan your visit · essential information', location: 'Location', transport: 'Getting there', hours: 'Opening information', management: 'Management and operation', reviews: 'Visitor ratings and reviews', photos: 'Photo reference', maps: 'Open the dedicated Google Maps location', reviewLink: 'Check current Google Maps ratings and review count', updated: 'Review figures change over time; consult the linked place listing for the latest count.',
    monument: { location: SITE.address, transport: 'Reach the hilltop by the funicular near Teatro Juárez or by a steep walk from the historic centre. Confirm the route and lower station before leaving.', hours: 'The open-air plaza and viewpoint are normally accessible, while monument interior admission and the funicular have separate conditions. Check local notices.', management: 'The monument and surrounding public space are part of Guanajuato city’s visitor environment. Municipal notices should be consulted for public-space conditions; the funicular is a separate transport service.', photo: 'View across Guanajuato from El Pípila.' },
    funicular: { location: 'Lower station near Teatro Juárez / Callejón de la Constancia, Guanajuato, México', transport: 'From Jardín de la Unión, walk toward Teatro Juárez and follow the signs to the lower funicular station. The upper station serves the El Pípila viewpoint.', hours: 'The funicular has operating hours and separate fares. Verify the current timetable, maintenance interruptions and ticket prices at the station.', management: 'The funicular is a transport service distinct from the public monument and its viewpoint. Check operational updates with the station operator.', photo: 'The El Pípila hill and central Guanajuato.' },
    churches: { location: 'Historic centre of Guanajuato, México; churches are at separate addresses', transport: 'Most central churches can be explored on foot. La Valenciana lies farther uphill and needs a separate journey.', hours: 'Each church has its own worship and visitor schedule. Religious services may affect interior access; check notices at each site.', management: 'Individual churches are religious properties administered by their respective parish or ecclesiastical authorities, not by the El Pípila monument.', photo: 'The Basílica de Nuestra Señora de Guanajuato in the historic centre.' },
  },
  es: {
    title: 'Información esencial para la visita', location: 'Ubicación', transport: 'Cómo llegar', hours: 'Horarios y acceso', management: 'Gestión y operación', reviews: 'Puntuaciones y reseñas', photos: 'Fotografía del lugar', maps: 'Abrir la ubicación específica en Google Maps', reviewLink: 'Consultar calificación y cantidad de reseñas actuales', updated: 'Las reseñas cambian con el tiempo; consulta la ficha enlazada para obtener los datos más recientes.',
    monument: { location: SITE.address, transport: 'Sube desde el centro en funicular cerca del Teatro Juárez o a pie por calles empinadas. Comprueba la ruta y la estación antes de salir.', hours: 'La plaza y el mirador al aire libre suelen ser accesibles; la entrada al interior del monumento y el funicular tienen condiciones independientes.', management: 'El monumento y su plaza forman parte del espacio de visita de Guanajuato. Consulta avisos municipales para las condiciones del espacio público; el funicular es un servicio separado.', photo: 'Panorámica de Guanajuato desde El Pípila.' },
    funicular: { location: 'Estación inferior junto al Teatro Juárez / Callejón de la Constancia, Guanajuato, México', transport: 'Desde Jardín de la Unión camina al Teatro Juárez y sigue los letreros hacia la estación inferior. La estación superior llega al mirador del Pípila.', hours: 'El funicular tiene horarios y tarifas propios. Verifica la operación, interrupciones por mantenimiento y precios en la estación.', management: 'Es un servicio de transporte distinto del monumento y mirador públicos. Las actualizaciones operativas corresponden al operador de la estación.', photo: 'La ladera del Pípila y el centro de Guanajuato.' },
    churches: { location: 'Centro histórico de Guanajuato, México; cada iglesia tiene su dirección', transport: 'La mayoría de los templos céntricos se recorren a pie. La Valenciana queda más alejada, cuesta arriba.', hours: 'Cada iglesia tiene horarios propios de culto y visita; los servicios religiosos pueden limitar el recorrido interior.', management: 'Cada templo es administrado por su propia parroquia o autoridad eclesiástica, no por el Monumento al Pípila.', photo: 'Basílica de Nuestra Señora de Guanajuato.' },
  },
  zh: {
    title: '出发前的基本信息', location: '所在地', transport: '交通方式', hours: '开放与参观', management: '管理主体', reviews: '游客评分与评价', photos: '实景照片', maps: '打开专属 Google 地图位置', reviewLink: '查看最新 Google Maps 评分与评价数量', updated: '评分与评价数量会变化，请以链接中的地点页面实时数据为准。',
    monument: { location: SITE.address, transport: '可从老城的华雷斯剧院附近搭乘缆车，或沿陡坡步行上山；出发前应核对实际下站入口。', hours: '露天广场与观景台通常可以进入；纪念碑内部参观及缆车有各自的时间和收费规定，依现场公告为准。', management: '纪念碑及其周边属于瓜纳华托市公共游览环境；公共空间状况以市政公告为准。缆车由独立交通服务运营。', photo: '从皮皮拉俯瞰瓜纳华托的实景。' },
    funicular: { location: '瓜纳华托华雷斯剧院附近、Constancia 巷一带的缆车下站', transport: '从联合花园步行前往华雷斯剧院，再按指示寻找缆车下站；上站接近皮皮拉观景台。', hours: '缆车有独立营运时间及票价；维修暂停与价格请向站点核实。', management: '缆车是独立于皮皮拉纪念碑及公共观景台的交通服务，运营信息以站方公告为准。', photo: '皮皮拉山坡与瓜纳华托历史城区。' },
    churches: { location: '墨西哥瓜纳华托历史城区；各教堂地址不同', transport: '市中心教堂多可步行串联；瓦伦西亚纳教堂位于较远的山坡区域，需要另行安排交通。', hours: '不同教堂的礼拜与参观时段分别安排，宗教活动可能影响内部参观。', management: '各教堂由所属堂区或教会机构分别管理，并非皮皮拉纪念碑管理单位。', photo: '瓜纳华托圣母圣殿的建筑实景。' },
  },
} as const;

const photos: Record<Kind, string> = {
  monument: '/gallery/monumento-al-pipila-1.jpg',
  funicular: '/gallery/monumento-al-pipila-4.jpg',
  churches: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Bas%C3%ADlica_Colegiata_de_Nuestra_Se%C3%B1ora_de_Guanajuato%2C_Guanajuato..jpg',
};
const maps: Record<Kind, string> = {
  monument: SITE.mapsShareUrl,
  funicular: 'https://www.google.com/maps/search/?api=1&query=Funicular+Guanajuato+estacion+inferior',
  churches: 'https://www.google.com/maps/search/?api=1&query=Basilica+de+Nuestra+Senora+de+Guanajuato',
};

export default function GuideEssentials({ kind = 'monument' }: { kind?: Kind }) {
  const locale = useLocale();
  const lang = locale === 'es' || locale === 'zh' ? locale : 'en';
  const t = content[lang], data = t[kind];
  const card = { background: 'var(--card-bg)', border: '1px solid var(--border-color)' };
  return <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16" aria-label={t.title}>
    <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>{t.title}</h2>
    <div className="rounded-2xl p-6 sm:p-7 mb-6" style={card}>
      <dl className="grid sm:grid-cols-2 gap-6">
        {([['location', data.location], ['transport', data.transport], ['hours', data.hours], ['management', data.management]] as const).map(([key, value]) => <div key={key}><dt className="text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{t[key]}</dt><dd className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value}</dd></div>)}
      </dl>
    </div>
    <div className="rounded-2xl overflow-hidden mb-6" style={card}><img src={photos[kind]} alt={data.photo} loading="lazy" className="w-full max-h-[340px] object-cover"/><p className="text-sm p-4" style={{ color: 'var(--text-secondary)' }}>{t.photos}: {data.photo}</p></div>
    <div className="rounded-2xl p-6" style={card}><h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t.reviews}</h3><p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{t.updated}</p><div className="flex flex-wrap gap-4"><a href={maps[kind]} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:underline" style={{ color: 'var(--accent)' }}>{t.reviewLink} ↗</a><a href={maps[kind]} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:underline" style={{ color: 'var(--accent)' }}>{t.maps} ↗</a></div></div>
  </section>;
}
