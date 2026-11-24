import CulturalPlacePage from './CulturalPlacePage';
import { culturalPlaces } from '@/data/culturalPlaces';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import OtherAttractionPage from './OtherAttractionPage';
import { guidePhotoUrl, nearbyGuides, type GuideLanguage } from '@/data/nearbyGuides';

type Lang = 'en' | 'es' | 'zh';
const base = 'https://www.monumentoalpipila.com';
const attractions = {
  'teatro-juarez': {
    name: 'Teatro Juárez', image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Teatro_Juarez.jpg', alt: 'Illuminated historic façade and staircase of Teatro Juárez in Guanajuato',
    address: 'De Sopena 10, Centro, 36000 Guanajuato, Gto., México',
    map: 'https://www.google.com/maps/search/?api=1&query=Teatro+Juarez+Guanajuato',
    source: 'https://inba.gob.mx/recinto/141',
    en: { tag: 'Historic theatre · Guanajuato centre', title: 'Teatro Juárez: Architecture, Visits and the El Pípila Funicular', intro: 'The landmark theatre faces Jardín de la Unión in the historic centre. Its imposing columns, staircase and rooftop sculptures make the exterior a highlight even if you do not attend a performance.', history: 'Opened in 1903, Teatro Juárez is associated with the city’s Porfirian-era architecture and cultural life. Its ceremonial façade contrasts with the narrow, colourful streets around it.', features: 'Study the stone columns, sculptural figures above the façade, lamps and broad approach steps. The building is especially atmospheric after dark, when its lights illuminate the stone.', manager: 'A public cultural venue in Guanajuato; current performance schedules, interior access and maintenance arrangements should be checked with the venue and state cultural authorities.', hours: 'The streets and exterior can be viewed from public space. Interior touring, performances and box-office hours follow the venue calendar.', tickets: 'Viewing the exterior is free. A guided interior visit or performance may require a separate ticket; check the current programme.', transport: 'Walk to Jardín de la Unión from the historic centre. Cars have limited access on nearby streets; use a central drop-off point and continue on foot.', route: ['Start at Jardín de la Unión and examine the theatre façade.', 'Walk around the square to compare daylight views and details.', 'Continue toward the lower funicular station nearby for El Pípila, or explore the adjoining streets.'], photo: 'Photograph the façade from the garden side to frame the columns; late afternoon and evening yield different light. Keep steps and entrances clear.', stay: 'Accommodation in the historic centre is convenient for an early walk or evening performance; compare noise levels and steep access before booking.', faq: [['Can I visit without a ticket?', 'Yes, the outside is visible from public streets; ticket requirements apply to interior activities.'], ['Is this the funicular boarding point?', 'No. The lower funicular station is near the theatre; follow local signage to the actual entrance.'], ["Where can I compare the theatre facade with church architecture?", "Stand on the Jardín de la Unión side. The columns of the theatre and carved doorway of San Diego can be viewed on the same short walk."]] },
    es: { tag: 'Teatro histórico · Centro de Guanajuato', title: 'Teatro Juárez: arquitectura, visitas y funicular al Pípila', intro: 'El Teatro Juárez se encuentra frente al Jardín de la Unión. Sus columnas, escalinata y esculturas lo convierten en una parada importante incluso sin asistir a una función.', history: 'Inaugurado en 1903, el teatro es una obra emblemática de la época porfiriana y de la vida cultural de Guanajuato.', features: 'Observa las columnas de cantera, las figuras escultóricas de la cubierta, las farolas y la amplia escalinata. De noche, la iluminación permite apreciar otra faceta del edificio.', manager: 'Es un recinto cultural público de Guanajuato. Consulta con el teatro y las autoridades culturales estatales la programación, el acceso interior y las condiciones de visita.', hours: 'La fachada se observa desde el espacio público. Las visitas interiores, funciones y taquilla dependen de la programación vigente.', tickets: 'La vista exterior es gratuita. Las visitas interiores y funciones pueden tener boleto aparte.', transport: 'Llega caminando al Jardín de la Unión desde el centro. El acceso en coche por las calles inmediatas es limitado.', route: ['Comienza en el Jardín de la Unión frente a la fachada.', 'Rodea la plaza y compara distintos ángulos de las columnas y la escalinata.', 'Busca la estación inferior del funicular cercana para subir al Pípila o continúa por las calles históricas.'], photo: 'Desde el jardín puedes encuadrar toda la fachada; prueba la luz de la tarde y la iluminación nocturna sin bloquear las entradas.', stay: 'El centro histórico resulta práctico para funciones nocturnas; compara pendientes y ruido antes de reservar hospedaje.', faq: [['¿Puedo verlo sin boleto?', 'Sí. La fachada se ve desde la vía pública; las actividades interiores tienen sus propias condiciones.'], ['¿Aquí se toma el funicular?', 'No exactamente. La estación inferior se encuentra cerca; sigue los letreros hasta la entrada.'], ["¿Dónde comparo el teatro con la arquitectura religiosa?", "Desde el lado del Jardín de la Unión puedes observar las columnas del teatro y la portada labrada de San Diego en un mismo paseo."]] },
    zh: { tag: '历史剧院 · 瓜纳华托市中心', title: '华雷斯剧院：建筑特色、参观与皮皮拉缆车交通', intro: '华雷斯剧院面向联合花园，石柱、台阶与屋顶雕像十分醒目。即便不看演出，也值得停留欣赏外观。', history: '剧院于 1903 年开放，是瓜纳华托波菲里奥时期建筑与城市文化生活的重要代表。', features: '可以仔细观察石柱、屋顶雕像、古典灯柱与宽阔台阶；夜间照明让建筑呈现不同的质感。', manager: '这里是瓜纳华托的公共文化演出场所；演出、内部参观及维护安排请以剧院和州级文化主管单位最新公告为准。', hours: '建筑外观可从公共街道欣赏；内部参观、演出与售票时间依节目安排。', tickets: '观看外观无需门票；内部参观或演出可能单独收费。', transport: '从老城步行至联合花园即可抵达。周边部分街巷限制车辆通行，建议在市中心下车后步行。', route: ['先在联合花园观察剧院正面。', '沿广场换角度拍摄石柱与阶梯。', '继续前往附近的缆车下站登上皮皮拉，或串联历史城区街巷。'], photo: '联合花园一侧适合完整取景；傍晚与亮灯后可拍摄不同光线。注意不要阻挡出入口。', stay: '住在历史城区便于夜间看演出，但要考虑坡道、阶梯与夜间街道噪音。', faq: [['不买门票能参观吗？', '可以在公共区域欣赏建筑外观；内部活动另有规定。'], ['缆车就在剧院里面吗？', '不是。缆车下站位于剧院附近，请沿现场指示找到入口。'], ["到哪里可以对比剧院与教堂的建筑？", "在联合花园一侧步行，能同时看到剧院的柱廊和圣迭戈教堂雕刻的门面。"]] },
  },
  'alhondiga-de-granaditas': {
    name: 'Alhóndiga de Granaditas', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Vista_de_la_Alh%C3%B3ndiga_de_Granaditas.JPG', alt: 'Historic stone façade and entrance stairs of Alhóndiga de Granaditas, Guanajuato',
    address: 'Calle Mendizábal 6, Centro, 36000 Guanajuato, Gto., México',
    map: 'https://www.google.com/maps/search/?api=1&query=Alhondiga+de+Granaditas+Guanajuato',
    source: 'https://lugares.inah.gob.mx/es/node/4245',
    en: { tag: 'Historic granary · Regional history museum', title: 'Alhóndiga de Granaditas: History, Museum and Visiting Guide', intro: 'The massive stone former granary is closely connected with the events of September 1810 in Guanajuato. It is a natural companion to the El Pípila monument for anyone exploring the independence story.', history: 'Built as a public grain store near the end of the colonial period, the building became a stronghold during the opening phase of the Mexican War of Independence. The siege of 28 September 1810 is central to its history and to the traditional account of El Pípila.', features: 'Its restrained masonry exterior, compact windows, heavy entrance and broad forecourt differ sharply from the decorative theatre and churches of the city centre.', manager: 'The building functions as the Museo Regional de Guanajuato, within Mexico’s public heritage and museum system. Confirm current management and programme information through the museum and INAH.', hours: 'Check the museum’s official calendar for current opening days, closures and exhibition access; the outdoor façade is visible from public space.', tickets: 'Outdoor viewing is free. Museum entry may require an admission ticket; discounts and exemptions are subject to current museum rules.', transport: 'Walk downhill through the historic centre toward the Alhóndiga area. Central streets and tunnels make driving routes less intuitive; follow a dedicated map pin.', route: ['Approach the forecourt to see the building’s monumental scale.', 'If open, visit the museum to understand the city’s regional history.', 'Continue toward Plaza de la Paz or the historic streets leading back to El Pípila.'], photo: 'The forecourt offers a wide view of the long stone façade and steps. Use morning or afternoon side light to reveal the masonry texture.', stay: 'Central Guanajuato accommodation makes this and several museums accessible by foot; check walking grades when choosing a room.', faq: [['Is this where the El Pípila story took place?', 'The events traditionally associated with El Pípila concern the assault on this building in 1810.'], ['Is the exterior free to see?', 'Yes, the exterior can be viewed from public space; museum admission is separate.'], ["How does the granary connect to the Pípila viewpoint?", "The museum covers the independence period associated with the assault on this building. The monument above town provides a separate panoramic stop."]] },
    es: { tag: 'Antigua alhóndiga · Museo regional', title: 'Alhóndiga de Granaditas: historia, museo y visita', intro: 'Este gran edificio de piedra está ligado a los acontecimientos de septiembre de 1810 en Guanajuato. Complementa la visita al monumento al Pípila.', history: 'Construido como almacén público de granos al final de la época virreinal, fue escenario de un episodio decisivo al inicio de la Guerra de Independencia. El asalto del 28 de septiembre de 1810 forma parte de su memoria histórica.', features: 'Observa sus muros sobrios de mampostería, ventanas pequeñas, acceso macizo y amplia explanada, en contraste con los teatros e iglesias ornamentales del centro.', manager: 'Actualmente alberga el Museo Regional de Guanajuato dentro del sistema público de patrimonio y museos. Consulta la información vigente del museo y del INAH.', hours: 'Confirma los días de apertura y cierres en el calendario del museo. La fachada puede verse desde el espacio público.', tickets: 'La vista exterior es gratuita. El acceso al museo puede requerir boleto y las exenciones dependen de sus reglas actuales.', transport: 'Se puede llegar a pie desde el centro histórico. Para conducir, usa el pin específico: los túneles y calles del centro complican la orientación.', route: ['Acércate a la explanada para apreciar la escala del edificio.', 'Si está abierto, visita el museo y su contexto histórico.', 'Continúa hacia Plaza de la Paz y las calles que conectan con el mirador del Pípila.'], photo: 'La explanada permite incluir la fachada y las escaleras en la imagen. La luz lateral destaca la textura de la piedra.', stay: 'Alojarse en el centro facilita conectar esta visita con otros museos a pie; considera las pendientes al elegir alojamiento.', faq: [['¿Aquí ocurrió la historia del Pípila?', 'La tradición vincula al Pípila con el asalto a este edificio en 1810.'], ['¿Es gratis ver el edificio?', 'Sí, desde el espacio público; el acceso al museo es independiente.'], ["¿Cómo se relaciona la Alhóndiga con el mirador del Pípila?", "El museo aborda la Independencia y la toma de este edificio. El monumento en lo alto de la ciudad añade una parada panorámica distinta."]] },
    zh: { tag: '历史粮仓 · 地区博物馆', title: '格拉纳迪塔斯粮仓：独立战争历史、博物馆与参观攻略', intro: '这座厚重的石砌旧粮仓与瓜纳华托 1810 年 9 月的独立战争事件紧密相关，适合与皮皮拉纪念碑安排在同一条历史路线。', history: '建筑原为殖民时期末期的公共粮食储存设施。1810 年 9 月 28 日的围攻是墨西哥独立战争早期的重要事件，也是皮皮拉传统故事的历史背景。', features: '厚实石墙、窄小窗户、醒目的入口和开阔前场，与城区装饰丰富的剧院和教堂形成鲜明对照。', manager: '建筑现作为瓜纳华托地区博物馆使用，属于墨西哥公共文化遗产与博物馆体系。馆方和 INAH 最新公告是参观与管理信息的核对来源。', hours: '博物馆开放日期、闭馆及展览安排请查阅当期公告；外立面可从公共空间欣赏。', tickets: '室外观看免费；入馆可能需要购票，优惠与免票条件依馆方规定。', transport: '可从老城向粮仓方向步行抵达。市中心隧道和单行道路较复杂，驾车请使用本景点专属地图。', route: ['先到前广场观察石墙与建筑尺度。', '若开放则入馆了解地区与独立战争历史。', '再步行串联和平广场，或返回皮皮拉山顶观景路线。'], photo: '前广场可以拍摄完整长立面与阶梯，斜侧光更能表现石材纹理。', stay: '住在老城区方便串联多个博物馆，预订前宜核对坡道与步行距离。', faq: [['皮皮拉的故事发生在这里吗？', '传统叙事将皮皮拉与 1810 年攻打这座粮仓的事件联系起来。'], ['只看建筑需要门票吗？', '从公共空间欣赏外观无需门票，博物馆入场另计。'], ["粮仓与皮皮拉观景台怎样串联理解？", "馆内可了解独立战争与这座建筑被攻占的背景。山上的纪念碑另提供俯看城市的视角。"]] },
  },
} as const;

const ui = {
  en: ['Basic information', 'Location', 'Hours', 'Admission', 'Getting there', 'History and architecture', 'Management', 'Suggested walking route', 'Photo spots', 'Where to stay', 'Visitor reviews', 'Frequently asked questions', 'Read official background', 'View on Google Maps', 'Check live ratings and reviews', 'Nearby guides', 'Back to El Pípila'],
  es: ['Información básica', 'Ubicación', 'Horario', 'Entradas', 'Cómo llegar', 'Historia y arquitectura', 'Gestión', 'Ruta sugerida', 'Dónde tomar fotos', 'Dónde alojarse', 'Reseñas de visitantes', 'Preguntas frecuentes', 'Consultar fuente institucional', 'Ver en Google Maps', 'Consultar puntuaciones y reseñas actuales', 'Guías cercanas', 'Volver al Pípila'],
  zh: ['基本信息', '所在地', '开放时间', '门票', '交通方式', '历史与建筑特色', '管理主体', '推荐步行路线', '拍照机位', '住宿建议', '游客评价', '常见问答', '查看机构资料', 'Google 地图导航', '查看实时评分及评价', '周边专题', '返回皮皮拉'],
} as const;

const imageDescriptions = {
  'teatro-juarez': {
    en: 'Historic Teatro Juárez façade and grand staircase in Guanajuato',
    es: 'Fachada histórica y escalinata del Teatro Juárez en Guanajuato',
    zh: '瓜纳华托华雷斯剧院的历史外立面与入口台阶',
  },
  'alhondiga-de-granaditas': {
    en: 'Stone façade and entrance of Alhóndiga de Granaditas in Guanajuato',
    es: 'Fachada de piedra y entrada de la Alhóndiga de Granaditas en Guanajuato',
    zh: '瓜纳华托格拉纳迪塔斯粮仓的石砌外墙和入口',
  },
} as const;

const aboutDetails = {
  'teatro-juarez': {
    en: 'The theatre opened in 1903 and is part of Guanajuato’s state cultural network. The Instituto Estatal de la Cultura del Estado de Guanajuato is identified by Mexico’s cultural venue directory. Its monumental entrance, stone colonnade and sculptural roofline reflect the ceremonial architecture of the Porfirian era. Today it remains an active performance venue, so the programme and access conditions vary by event.',
    es: 'Inaugurado en 1903, el recinto forma parte de la red cultural estatal. El Sistema de Información Cultural identifica al Instituto Estatal de la Cultura del Estado de Guanajuato como institución responsable. Su columnata de cantera y las esculturas de la cubierta representan la arquitectura ceremonial del Porfiriato. Hoy continúa funcionando como teatro, con programación y acceso que varían según el evento.',
    zh: '华雷斯剧院于 1903 年开放，属于瓜纳华托州的文化场馆体系。墨西哥文化信息系统将瓜纳华托州文化机构列为相关管理主体。剧院正面石柱、屋顶雕像与大型入口体现了波菲里奥时期的礼仪性建筑风格。如今仍举办演出，内部开放方式依节目与场馆安排变化。',
  },
  'alhondiga-de-granaditas': {
    en: 'The former grain store now houses the Museo Regional de Guanajuato, administered within the Instituto Nacional de Antropología e Historia (INAH) museum system. Its thick stone walls preserve the setting of the 28 September 1810 battle. The institution presents regional archaeological, historical and artistic heritage, connecting the building’s colonial commercial purpose with its later role in the independence narrative.',
    es: 'La antigua alhóndiga alberga hoy el Museo Regional de Guanajuato, integrado en el sistema museístico del Instituto Nacional de Antropología e Historia (INAH). Sus muros de piedra conservan el escenario de la batalla del 28 de septiembre de 1810. El museo difunde patrimonio arqueológico, histórico y artístico regional, relacionando su función original de almacén con la memoria de la Independencia.',
    zh: '旧粮仓现为瓜纳华托地区博物馆，纳入墨西哥国家人类学与历史研究所（INAH）的博物馆体系。厚实石墙保留了 1810 年 9 月 28 日战事发生的建筑环境。馆内呈现地区考古、历史与艺术遗产，帮助游客理解建筑从公共粮仓到独立战争纪念地的转变。',
  },
} as const;

const visitingNotes = {
  en: { title: 'Before you go', text: 'Wear comfortable shoes on the uneven stone streets and steps. Keep entrances clear, respect performances or museum rules, and check current notices for accessibility and temporary closures.' },
  es: { title: 'Antes de visitar', text: 'Usa calzado cómodo para calles y escaleras de piedra. No bloquees los accesos, respeta las normas de funciones o exposiciones y consulta avisos de accesibilidad y cierres temporales.' },
  zh: { title: '游览须知', text: '老城石板路与台阶不平，建议穿防滑舒适的鞋。不要挡住场馆入口，遵守演出或展馆规则，并留意无障碍设施及临时关闭公告。' },
} as const;

const expanded = {
  'teatro-juarez': {
    en: { tips: ['Visit the theatre steps in the morning for architectural details, then return after dark for a different view.', 'Check the event calendar before planning an interior visit; an exterior stop does not require attending a show.', 'Combine the theatre with Jardín de la Unión and the nearby lower funicular station.'], highlights: ['Monumental entrance with tall columns and a broad stone staircase', 'Roofline sculptures, ornamental lighting and an elaborate façade', 'A working cultural venue in the heart of the historic centre'], culture: 'The theatre is not only a historic building: performances and cultural events keep it in everyday use. Its prominent setting beside Jardín de la Unión connects formal performance culture with the city’s informal street life.', experience: 'Approach from the garden, pause at the base of the steps, inspect the façade and return after sunset if the schedule permits. If a performance is available, plan it as a separate booked activity.', parking: 'The centre has restricted and narrow roads. Use a suitable public car park or a permitted drop-off point, then walk to De Sopeña 10.' },
    es: { tips: ['Visita la escalinata por la mañana para apreciar detalles y vuelve al anochecer para otra perspectiva.', 'Consulta la cartelera antes de planificar una visita interior; puedes ver la fachada sin asistir a una función.', 'Combina el teatro con el Jardín de la Unión y la estación inferior del funicular.'], highlights: ['Entrada monumental con columnas altas y amplia escalinata de cantera', 'Esculturas en la cubierta, farolas y fachada ornamental', 'Recinto cultural activo junto al centro histórico'], culture: 'No es solamente un edificio antiguo: las funciones y actividades culturales mantienen vivo su papel público. Su ubicación frente al Jardín de la Unión conecta el espectáculo con la vida cotidiana de la plaza.', experience: 'Acércate desde el jardín, observa las columnas desde la base de las escaleras y regresa por la noche si tu horario lo permite. Reserva la función por separado si deseas asistir.', parking: 'Las calles del centro son estrechas y algunas tienen acceso restringido. Utiliza un estacionamiento autorizado o punto de descenso y camina a De Sopeña 10.' },
    zh: { tips: ['上午适合观察台阶和石刻细节，晚上亮灯后可再拍一次不同氛围。', '打算入内参观请先查节目安排；仅欣赏外立面不必购买演出票。', '建议与联合花园及附近的缆车下站串联。'], highlights: ['高大石柱与宽阔石阶组成的纪念性入口', '屋顶雕像、古典灯柱与装饰丰富的外立面', '位于历史城区、至今持续举办文化活动的剧院'], culture: '这座剧院不仅是历史建筑，也通过演出与文化活动继续参与城市生活。它与联合花园相邻，呈现正式舞台文化与广场日常活动之间的联系。', experience: '从联合花园走向台阶，先欣赏石柱和屋顶雕像；时间允许可在亮灯后再次观察。若想看演出，应另外核对档期与预订。', parking: '历史城区道路较窄，部分路段限制车辆进入。建议使用允许停车的场所或指定下车点，再步行至 De Sopeña 10。' },
  },
  'alhondiga-de-granaditas': {
    en: { tips: ['Start with the exterior and forecourt to understand the scale of the former grain store.', 'Allow additional time if you plan to see the museum collection; opening days can differ from outdoor access.', 'Pair the museum with an El Pípila history walk rather than treating the two places as the same site.'], highlights: ['Long stone walls and small windows reflecting its original storage purpose', 'The broad entrance approach and forecourt used for civic gatherings', 'Museum exhibits interpreting Guanajuato’s regional history and the independence period'], culture: 'The building links food storage, colonial urban administration and the violence of the independence struggle. Today its museum role turns that history into public education through exhibitions and collections.', experience: 'Begin at the exterior walls, read the architecture from the plaza, then enter the museum if it is open. Afterwards, follow the historic centre streets toward Plaza de la Paz to connect the wider independence story.', parking: 'The museum stands in a busy central district. Use a suitable central car park and walk to Mendizábal 6; a dedicated map location is preferable to guessing a route through the tunnels.' },
    es: { tips: ['Empieza por el exterior y la explanada para comprender la escala de la antigua alhóndiga.', 'Reserva tiempo adicional si visitarás las salas del museo; el horario interior es distinto del acceso a la plaza.', 'Relaciona el museo con la historia de El Pípila sin confundir ambos lugares.'], highlights: ['Largos muros de piedra y ventanas pequeñas de su función de almacén', 'Acceso monumental y explanada utilizada para actos cívicos', 'Salas del museo dedicadas a la historia regional y la Independencia'], culture: 'El edificio conecta el almacenamiento de alimentos, la administración urbana virreinal y los acontecimientos de la Independencia. Su función museística actual transforma esa memoria en educación pública.', experience: 'Comienza observando los muros desde la plaza, entra al museo si está abierto y después sigue las calles hacia Plaza de la Paz para completar la ruta histórica.', parking: 'El museo está en una zona céntrica concurrida. Utiliza un estacionamiento autorizado y camina a Mendizábal 6; evita improvisar el recorrido por los túneles.' },
    zh: { tips: ['先从广场观察粮仓的整体尺度与厚实外墙，再决定是否入馆。', '博物馆室内参观需要单独预留时间，开放日与室外广场不同。', '可与皮皮拉历史路线串联，但两者是不同的地点。'], highlights: ['体现储粮功能的厚重石墙与小窗', '宽阔的入口及可用于公共活动的前广场', '介绍地区历史与独立战争的博物馆展陈'], culture: '这座建筑将殖民时期的粮食储存、城市管理与独立战争中的冲突联系起来。如今作为博物馆，通过展览和藏品承担公共历史教育功能。', experience: '在前广场观察外墙与入口，若开放则安排入馆参观；之后沿历史城区街道前往和平广场，继续理解整座城市的独立战争故事。', parking: '博物馆位于繁忙市中心，建议在合规停车场停车后步行至 Mendizábal 6，避免凭直觉穿行复杂的市区隧道。' },
  },
} as const;

export function generateStaticParams() { return [...Object.keys(attractions), ...Object.keys(nearbyGuides), ...Object.keys(culturalPlaces)].map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: Lang = locale === 'es' || locale === 'zh' ? locale : 'en';
  const place = attractions[slug as keyof typeof attractions];
  const cultural = culturalPlaces[slug];
  if (cultural) {
    const copy = cultural.copy[lang];
    const urls = Object.fromEntries(['en','es','zh'].map(l => [l, `${base}/${l}/attractions/${slug}`]));
    return { title: copy.title, description: copy.body, alternates: { canonical: urls[lang], languages: { ...urls, 'x-default': urls.en } }, openGraph: { title: copy.title, description: copy.body, images: [cultural.photo] } };
  }
  const newGuide = nearbyGuides[slug];
  if (newGuide) {
    const c = newGuide.copy[lang];
    return { title: c.title, description: c.intro, alternates: { canonical: `${base}/${lang}/attractions/${slug}`, languages: { en: `${base}/en/attractions/${slug}`, es: `${base}/es/attractions/${slug}`, zh: `${base}/zh/attractions/${slug}`, 'x-default': `${base}/en/attractions/${slug}` } }, openGraph: { title: c.title, description: c.intro, images: [{ url: guidePhotoUrl(newGuide.photoFile), alt: c.photo }] } };
  }
  if (!place) return {};
  const c = place[lang];
  return { title: c.title, description: c.intro, alternates: { canonical: `${base}/${lang}/attractions/${slug}`, languages: { en: `${base}/en/attractions/${slug}`, es: `${base}/es/attractions/${slug}`, zh: `${base}/zh/attractions/${slug}`, 'x-default': `${base}/en/attractions/${slug}` } }, openGraph: { title: c.title, description: c.intro, images: [{ url: place.image, alt: imageDescriptions[slug as keyof typeof imageDescriptions][lang] }] } };
}

export default async function AttractionPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const lang: Lang = locale === 'es' || locale === 'zh' ? locale : 'en';
  if (culturalPlaces[slug]) return <CulturalPlacePage slug={slug} lang={lang} />;
  if (nearbyGuides[slug]) return <OtherAttractionPage slug={slug} lang={lang as GuideLanguage} />;
  const place = attractions[slug as keyof typeof attractions];
  if (!place) return null;
  const c = place[lang], t = ui[lang];
  const extra = expanded[slug as keyof typeof expanded][lang];
  const heading = { color: 'var(--text-primary)' }, body = { color: 'var(--text-secondary)' };
  const section = (title: string, content: string) => <section className="mb-10"><h2 className="font-display text-2xl font-semibold mb-3" style={heading}>{title}</h2><p className="leading-relaxed" style={body}>{content}</p></section>;
  const siblings = Object.entries(attractions).filter(([key]) => key !== slug);
  return <><main style={{ background: 'var(--bg-primary)' }} className="px-4 sm:px-6 py-14 sm:py-20"><article className="max-w-4xl mx-auto">
    <a href={`/${lang}`} className="text-sm hover:underline" style={{ color: 'var(--accent)' }}>← {t[16]}</a>
    <p className="uppercase tracking-widest text-xs mt-9 mb-3" style={{ color: 'var(--text-muted)' }}>{c.tag}</p>
    <h1 className="font-display text-3xl sm:text-4xl font-bold mb-5" style={heading}>{c.title}</h1>
    <div className="flex flex-wrap gap-3 mb-5 text-sm" style={{ color: 'var(--text-secondary)' }}>
      <span>{place.name}</span><span>·</span><span>{lang === 'es' ? 'Guanajuato, México' : lang === 'zh' ? '墨西哥·瓜纳华托' : 'Guanajuato, Mexico'}</span><span>·</span><a href="#visitor-reviews" className="hover:underline" style={{ color: 'var(--accent)' }}>{lang === 'es' ? 'Puntuaciones actuales en Maps' : lang === 'zh' ? '实时评分与评价' : 'Live ratings and reviews'}</a>
    </div>
    <p className="leading-relaxed mb-7" style={body}>{c.intro}</p>
    <div className="flex flex-wrap gap-3 mb-8"><a href={place.map} target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-2 text-sm font-semibold" style={{ background: 'var(--accent)', color: 'white' }}>{t[13]} ↗</a><a href={place.map} target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-2 text-sm font-semibold" style={{ border: '1px solid var(--border-color)', color: 'var(--accent)' }}>{t[14]} ↗</a></div>
    <img src={place.image} alt={imageDescriptions[slug as keyof typeof imageDescriptions][lang]} className="w-full rounded-2xl object-cover max-h-[480px] mb-12" loading="eager" />
    <section className="rounded-2xl p-6 sm:p-8 mb-12" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
      <p className="text-xs uppercase font-bold tracking-widest mb-2" style={{ color: 'var(--accent)' }}>{lang === 'es' ? 'Sobre el lugar' : lang === 'zh' ? '关于景点' : 'About this place'}</p>
      <h2 className="font-display text-2xl font-semibold mb-4" style={heading}>{lang === 'zh' ? `关于${place.name}` : lang === 'es' ? `Acerca de ${place.name}` : `About ${place.name}`}</h2>
      <p className="leading-relaxed mb-4" style={body}>{c.manager}</p>
      <p className="leading-relaxed" style={body}>{aboutDetails[slug as keyof typeof aboutDetails][lang]}</p>
    </section>
    <section className="mb-12">
      <h2 className="font-display text-2xl font-semibold mb-4" style={heading}>{lang === 'es' ? 'Consejos para la visita' : lang === 'zh' ? '游览建议' : 'Visit tips'}</h2>
      <ul className="list-disc pl-6 space-y-3 leading-relaxed" style={body}>{extra.tips.map(tip => <li key={tip}>{tip}</li>)}</ul>
    </section>
    <section className="mb-12">
      <h2 className="font-display text-2xl font-semibold mb-4" style={heading}>{lang === 'es' ? 'Lo más destacado' : lang === 'zh' ? '景区特色' : 'Highlights'}</h2>
      <div className="grid sm:grid-cols-3 gap-4">{extra.highlights.map((highlight, index) => <div key={highlight} className="rounded-xl p-5" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}><span className="font-bold text-xl" style={{ color: 'var(--accent)' }}>{index + 1}</span><p className="mt-3 text-sm leading-relaxed" style={body}>{highlight}</p></div>)}</div>
    </section>
    <section className="rounded-2xl p-6 mb-12" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}><h2 className="font-display text-xl font-bold mb-5" style={heading}>{t[0]}</h2><dl className="grid sm:grid-cols-2 gap-5" style={body}><div><dt className="font-semibold">{t[1]}</dt><dd>{place.address}</dd></div><div><dt className="font-semibold">{t[2]}</dt><dd>{c.hours}</dd></div><div><dt className="font-semibold">{t[3]}</dt><dd>{c.tickets}</dd></div><div><dt className="font-semibold">{t[4]}</dt><dd>{c.transport}</dd></div></dl></section>
    {section(t[2], c.hours)}
    {section(t[3], c.tickets)}
    {section(t[4], c.transport)}
    <section className="mb-12">
      <h2 className="font-display text-2xl font-semibold mb-5" style={heading}>{lang === 'es' ? 'Descubre su historia, cultura y experiencia' : lang === 'zh' ? '发现魅力：历史、建筑与文化体验' : 'Discover its history, culture and experience'}</h2>
      <div className="space-y-5" style={body}>
        <div><h3 className="font-semibold text-lg mb-2" style={heading}>{lang === 'es' ? 'Historia' : lang === 'zh' ? '历史背景' : 'History'}</h3><p className="leading-relaxed">{c.history}</p></div>
        <div><h3 className="font-semibold text-lg mb-2" style={heading}>{lang === 'es' ? 'Arquitectura' : lang === 'zh' ? '建筑观察重点' : 'Architecture'}</h3><p className="leading-relaxed">{c.features}</p></div>
        <div><h3 className="font-semibold text-lg mb-2" style={heading}>{lang === 'es' ? 'Significado cultural' : lang === 'zh' ? '文化意义' : 'Cultural significance'}</h3><p className="leading-relaxed">{extra.culture}</p></div>
        <div><h3 className="font-semibold text-lg mb-2" style={heading}>{lang === 'es' ? 'Experiencia principal' : lang === 'zh' ? '核心体验' : 'Core experience'}</h3><p className="leading-relaxed">{extra.experience}</p></div>
      </div>
    </section>
    <section className="mb-10"><h2 className="font-display text-2xl font-semibold mb-4" style={heading}>{t[7]}</h2><ol className="space-y-3 list-decimal pl-6" style={body}>{c.route.map(x => <li key={x}>{x}</li>)}</ol></section>
    {section(t[8], c.photo)}{section(t[9], c.stay)}
    {section(visitingNotes[lang].title, visitingNotes[lang].text)}
    {section(lang === 'es' ? 'Guía de transporte y estacionamiento' : lang === 'zh' ? '交通指南与停车' : 'Transport and parking guide', `${c.transport} ${extra.parking}`)}
    <section id="visitor-reviews" className="mb-10 scroll-mt-24"><h2 className="font-display text-2xl font-semibold mb-3" style={heading}>{t[10]}</h2><p className="mb-3 text-sm leading-relaxed" style={body}>{lang === 'zh' ? '本站尚未核实此景点的最新评分和评价数量，请以该景点独立 Google 地图条目的实时显示为准。' : lang === 'es' ? 'No se ha verificado aquí la nota y el número de reseñas actuales; consulta los datos en la ficha propia del lugar.' : 'Current review scores and counts have not been independently verified here; consult the attraction’s own listing.'}</p><a href={place.map} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>{t[14]} ↗</a></section>
    <section className="mb-10"><h2 className="font-display text-2xl font-semibold mb-4" style={heading}>{t[11]}</h2><dl className="space-y-5" style={body}>{c.faq.map(([q, a]) => <div key={q}><dt className="font-semibold" style={heading}>{q}</dt><dd className="mt-1">{a}</dd></div>)}</dl></section>
    <p className="mb-12"><a href={place.source} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }} className="text-sm hover:underline">{t[12]} ↗</a></p>
    <section><h2 className="font-display text-2xl font-semibold mb-5" style={heading}>{t[15]}</h2><div className="flex flex-col gap-3">{siblings.map(([key, p]) => <a key={key} href={`/${lang}/attractions/${key}`} className="rounded-xl p-4 hover:underline" style={{ background: 'var(--card-bg)', color: 'var(--accent)', border: '1px solid var(--border-color)' }}>{p.name} →</a>)}<a href={`/${lang}/guanajuato-one-day-itinerary`} className="rounded-xl p-4 hover:underline" style={{ background: 'var(--card-bg)', color: 'var(--accent)', border: '1px solid var(--border-color)' }}>{lang === 'es' ? 'Guanajuato en un día' : lang === 'zh' ? '瓜纳华托一日游' : 'One-day Guanajuato itinerary'} →</a></div></section>
  </article></main><Footer /></>;
}
