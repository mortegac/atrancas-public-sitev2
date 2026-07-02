export type Zona =
  | "Centro"
  | "Oriente"
  | "Suroriente"
  | "Sur"
  | "Surponiente"
  | "Poniente"
  | "Norte";

export interface ComunaData {
  slug: string;
  nombre: string;
  zona: Zona;
  /** ~120-160 word GEO passage, direct answer, citable by AI */
  descripcion: string;
  /** Notable event venues or references for that commune */
  referencias: string[];
}

export const COMUNAS: ComunaData[] = [
  // ── CENTRO ────────────────────────────────────────────────────────────────
  {
    slug: "santiago",
    nombre: "Santiago",
    zona: "Centro",
    descripcion:
      "Santiago Centro es el corazón histórico y cultural de la capital, hogar de parques emblemáticos como el Parque O'Higgins y la Quinta Normal, espacios ideales para matrimonios campestres y eventos al aire libre. El arriendo de mesones de secuoya para eventos en Santiago Centro permite crear atmósferas rústicas únicas en patios, salones de barrio Italia, casas patrimoniales del barrio Brasil y terrazas del sector Lastarria. Con alta densidad de organizadores de eventos y wedding planners, la demanda de mesones buffet extensibles, bancas de secuoya y barras rústicas crece constantemente en esta zona. Las Trancas coordina el traslado de mesones directamente al lugar de tu evento en Santiago Centro, sin que debas preocuparte por la logística.",
    referencias: ["Parque O'Higgins", "Barrio Italia", "Barrio Brasil", "Lastarria", "Quinta Normal"],
  },

  // ── ORIENTE ───────────────────────────────────────────────────────────────
  {
    slug: "providencia",
    nombre: "Providencia",
    zona: "Oriente",
    descripcion:
      "Providencia es una de las comunas con mayor actividad de eventos privados en Santiago, con una oferta amplia de salones, rooftops, restoranes con terraza y jardines interiores en sectores como Manuel Montt, Bellavista y Pedro de Valdivia. El arriendo de mesones de secuoya y barras rústicas es especialmente demandado para cenas corporativas, cumpleaños en departamentos y eventos sociales en terrazas con vista a la cordillera. Nuestros mesones extensibles de 3 a 30 metros se adaptan perfectamente a los espacios disponibles en Providencia, desde un jardín íntimo de 20 personas hasta un salón de 150 invitados. Las Trancas coordina el traslado e instalación de mesones en Providencia con puntualidad y servicio completo.",
    referencias: ["Manuel Montt", "Bellavista", "Pedro de Valdivia", "Barrio Condell"],
  },
  {
    slug: "nunoa",
    nombre: "Ñuñoa",
    zona: "Oriente",
    descripcion:
      "Ñuñoa es conocida por su ambiente bohemio, sus plazas con historia y su alta concentración de matrimonios en casonas patrimoniales, fondas familiares y jardines con encanto. El barrio Italia limita con Ñuñoa y es uno de los sectores más solicitados para eventos sociales con ambientación campestre. El arriendo de mesones buffet de secuoya y bancas de mañío en Ñuñoa permite crear espacios con carácter propio para matrimonios en casas antiguas, cumpleaños en patios de villa y eventos corporativos en galpones reconvertidos. Nuestros mesones extensibles se adaptan a espacios irregulares típicos de las propiedades ñuñoínas. Las Trancas entrega e instala todos los productos directamente en tu evento en Ñuñoa.",
    referencias: ["Plaza Ñuñoa", "Barrio Italia", "Irarrázaval", "Casonas patrimoniales"],
  },
  {
    slug: "las-condes",
    nombre: "Las Condes",
    zona: "Oriente",
    descripcion:
      "Las Condes concentra una alta demanda de arriendo de mobiliario para eventos premium: matrimonios en casas con jardín grande, eventos corporativos de empresas del sector financiero, y celebraciones sociales en condominios con espacios comunes. Sectores como Escuela Militar, El Golf y Apoquindo son los más activos para eventos privados. El arriendo de mesones de secuoya y cedro en Las Condes aporta el contraste rústico campestre que se busca para diferenciar celebraciones del estilo urbano convencional. Las barras rústicas con barricas son especialmente solicitadas para inauguraciones y eventos de empresa en esta zona. Las Trancas lleva e instala mesones y ambientación completa en Las Condes con traslado coordinado.",
    referencias: ["Escuela Militar", "El Golf", "Apoquindo", "Condominios zona oriente"],
  },
  {
    slug: "vitacura",
    nombre: "Vitacura",
    zona: "Oriente",
    descripcion:
      "Vitacura es la comuna con mayor ingreso per cápita de Santiago y concentra los eventos de mayor producción: matrimonios en jardines de 500 m², galas de empresa, lanzamientos de productos y celebraciones sociales de alto estándar. El arriendo de mesones de madera nativa — secuoya, mañío y cedro — es una tendencia creciente en Vitacura porque el estilo rústico campestre contrasta elegantemente con los interiores modernos y los jardines cuidados de la zona. Las barras Barra 02 y Barra 03 con vasijas mapuche son las más solicitadas para eventos en Vitacura. Las Trancas coordina el traslado y montaje de ambientación completa en Vitacura, incluyendo lounges, mesones y artículos criollos.",
    referencias: ["Av. Vitacura", "Bicentenario", "Casas con jardín grande", "Clubes privados"],
  },
  {
    slug: "lo-barnechea",
    nombre: "Lo Barnechea",
    zona: "Oriente",
    descripcion:
      "Lo Barnechea es la puerta de entrada a los Andes desde Santiago y alberga sectores exclusivos como La Dehesa, San Carlos de Apoquindo y Chicureo (acceso por Colina). La geografía de la precordillera hace de esta comuna el escenario ideal para matrimonios campestres y eventos al aire libre con vista a la cordillera nevada. El arriendo de mesones de secuoya extensibles es muy demandado en Lo Barnechea para bodas en quintas de campo, fiestas en parcelas y eventos en clubes de golf. Los mesones de montaje para 10 y 12 personas con bancas incluidas son perfectos para eventos familiares íntimos en la zona. Las Trancas cubre toda Lo Barnechea con traslado e instalación de mesones y ambientación campestre.",
    referencias: ["La Dehesa", "San Carlos de Apoquindo", "Quinta de campo", "Clubes de golf"],
  },
  {
    slug: "la-reina",
    nombre: "La Reina",
    zona: "Oriente",
    descripcion:
      "La Reina es una comuna residencial tranquila con muchas casas de gran terreno y jardines generosos, ideal para eventos familiares, matrimonios íntimos y cumpleaños al aire libre. Su proximidad con Peñalolén y la precordillera da acceso a paisajes verdes únicos para eventos campestres. El arriendo de mesones buffet de secuoya y bancas para eventos en La Reina permite organizar celebraciones de 30 a 200 personas con el encanto rústico que caracteriza a Las Trancas. Los mesones de mañío de 3 metros son especialmente populares para reuniones íntimas en La Reina. Coordinamos el traslado e instalación de todos los mesones y barras directamente en tu domicilio o evento en La Reina.",
    referencias: ["Av. Ossa", "Sector cordillerano", "Casas con jardín", "Plaza La Reina"],
  },

  // ── SURORIENTE ────────────────────────────────────────────────────────────
  {
    slug: "la-florida",
    nombre: "La Florida",
    zona: "Suroriente",
    descripcion:
      "La Florida es la comuna más poblada de Santiago con más de 400.000 habitantes, lo que la convierte en uno de los mercados más activos para arriendo de mobiliario para eventos. La gran cantidad de salones de eventos, quintas de recreo y jardines privados en La Florida genera una demanda constante de mesones de secuoya, bancas y barras rústicas para matrimonios, quinceañeros, bautizos y cumpleaños. Sectores como Rojas Magallanes, Vicuña Mackenna poniente y las calles aledañas al metro Bellavista de La Florida concentran la mayor actividad de eventos sociales. Las Trancas cubre La Florida completa con traslado e instalación de mesones buffet extensibles, mesones de montaje y ambientación campestre.",
    referencias: ["Rojas Magallanes", "Vicuña Mackenna poniente", "Quintas de recreo", "Metro La Florida"],
  },
  {
    slug: "puente-alto",
    nombre: "Puente Alto",
    zona: "Suroriente",
    descripcion:
      "Puente Alto es la segunda comuna más poblada de Chile con casi 700.000 habitantes y una actividad muy dinámica de eventos sociales: matrimonios en salones, cumpleaños masivos, fiestas de 15 años y reuniones corporativas de empresas locales. La demanda de arriendo de mesones para eventos en Puente Alto crece año a año, especialmente para eventos de 50 a 200 personas en salones con espacio para el montaje de mesones buffet de secuoya y barras rústicas. Las comunas vecinas de Pirque y San José de Maipo también se atienden desde Puente Alto con un pequeño costo de distancia. Las Trancas coordina el traslado e instalación de mesones y ambientación completa en Puente Alto.",
    referencias: ["Sector Las Vegas", "Av. Camilo Henríquez", "Salones de eventos", "Acceso Pirque"],
  },
  {
    slug: "penalolen",
    nombre: "Peñalolén",
    zona: "Suroriente",
    descripcion:
      "Peñalolén combina sectores de alto poder adquisitivo (Lo Hermida alto, Peñalolén Alto) con zonas populares, generando una demanda variada de mobiliario para eventos que va desde cumpleaños familiares hasta matrimonios en casas con jardín de la precordillera. La vista a la cordillera desde Peñalolén Alto es uno de los marcos más buscados para matrimonios campestres al aire libre, donde los mesones de secuoya y las barras rústicas con barricas crean el ambiente perfecto. Las Trancas atiende toda la extensión de Peñalolén, incluyendo los sectores más alejados como Peñalolén Alto y Lo Hermida, con traslado coordinado de mesones y ambientación campestre.",
    referencias: ["Peñalolén Alto", "Lo Hermida", "Casas precordillera", "Jardines con vista cordillera"],
  },
  {
    slug: "san-jose-de-maipo",
    nombre: "San José de Maipo",
    zona: "Suroriente",
    descripcion:
      "San José de Maipo es el destino por excelencia para matrimonios campestres y eventos en contacto con la naturaleza en la Región Metropolitana. El Cajón del Maipo alberga decenas de quintas, lodges y espacios de eventos en medio del río Maipo y el paisaje andino, haciendo del arriendo de mesones de secuoya y bancas campestres una necesidad central para cualquier organización de eventos en la zona. Los mesones extensibles de 3 a 30 metros son ideales para los grandes banquetes de matrimonio que se realizan en los salones y jardines del Cajón del Maipo. Las Trancas coordina el traslado de mesones y ambientación completa hacia San José de Maipo con servicio puerta a puerta.",
    referencias: ["Cajón del Maipo", "San Alfonso", "San Gabriel", "Quintas y lodges cordilleranos"],
  },

  // ── SUR ───────────────────────────────────────────────────────────────────
  {
    slug: "san-miguel",
    nombre: "San Miguel",
    zona: "Sur",
    descripcion:
      "San Miguel es una de las comunas sur de Santiago con mayor dinamismo comercial y social, con múltiples salones de eventos, centros de recreación y jardines para fiestas en torno al eje Gran Avenida. El arriendo de mesones para eventos en San Miguel es muy demandado para matrimonios civiles, quinceañeros, bautizos y reuniones de empresa. Los mesones de montaje para 10 y 12 personas con bancas incluidas son los productos más solicitados para eventos de 50 a 150 personas en salones de San Miguel. Las Trancas entrega e instala mesones, bancas y barras rústicas en San Miguel con traslado coordinado, permitiendo que el organizador del evento se enfoque en los detalles de la celebración.",
    referencias: ["Gran Avenida", "Salones de eventos", "Centro de San Miguel", "Parque O'Higgins (acceso sur)"],
  },
  {
    slug: "la-cisterna",
    nombre: "La Cisterna",
    zona: "Sur",
    descripcion:
      "La Cisterna es una comuna dinámica del sur de Santiago con amplia tradición en eventos sociales y salones de fiestas a lo largo del eje Gran Avenida y el sector del metro La Cisterna. La cercanía con San Miguel, El Bosque y San Joaquín facilita la cobertura de eventos en todo el sector sur. El arriendo de mesones buffet de secuoya para eventos en La Cisterna es ideal para matrimonios, cumpleaños masivos y eventos corporativos que buscan diferenciarse con una ambientación rústica y campestre. Las Trancas cubre La Cisterna y comunas adyacentes con traslado e instalación de mesones, bancas y barras rústicas en el día del evento.",
    referencias: ["Metro La Cisterna", "Gran Avenida", "Salones zona sur", "Eje Pedro Aguirre Cerda"],
  },
  {
    slug: "san-joaquin",
    nombre: "San Joaquín",
    zona: "Sur",
    descripcion:
      "San Joaquín es una comuna industrial y residencial del sur de Santiago que alberga una creciente comunidad de organizadores de eventos y salones familiares. La demanda de arriendo de mesones para eventos en San Joaquín proviene principalmente de matrimonios, bautizos, quinceañeros y celebraciones familiares en salones de la zona. Los mesones de montaje con bancas incluidas para 10 y 12 personas son los más solicitados para este tipo de eventos. Las Trancas coordina el traslado e instalación de mesones y ambientación campestre en San Joaquín con servicio completo: llegamos, armamos y retiramos, para que tú solo disfrutes tu evento.",
    referencias: ["Av. Departamental", "Vicuña Mackenna sur", "Salones zona industrial"],
  },
  {
    slug: "la-granja",
    nombre: "La Granja",
    zona: "Sur",
    descripcion:
      "La Granja es una comuna popular del sur de Santiago con alta actividad de eventos sociales en salones familiares, jardines y centros de recreación. El arriendo de mesones y bancas de secuoya para eventos en La Granja permite agregar el estilo campestre a celebraciones de matrimonio, cumpleaños y quinceañeros realizados en salones de la zona. Los mesones de montaje para 10 personas (desde $35.000 c/u) son la opción más solicitada por organizadores de eventos en La Granja por su relación precio-calidad. Las Trancas entrega e instala mesones y ambientación completa en La Granja, coordinando el traslado para que la logística no sea un problema el día del evento.",
    referencias: ["Santa Rosa", "Av. La Florida (acceso)", "Salones familiares zona sur"],
  },
  {
    slug: "el-bosque",
    nombre: "El Bosque",
    zona: "Sur",
    descripcion:
      "El Bosque es una de las comunas más dinámicas del sur de Santiago en cuanto a eventos sociales, con una gran cantidad de salones de fiestas, quintas de recreo y jardines para celebraciones familiares. El arriendo de mesones buffet de secuoya y barras rústicas para eventos en El Bosque permite transformar salones convencionales en espacios con estilo rústico campestre único. La demanda de mesones extensibles y bancas de secuoya es especialmente alta en El Bosque para matrimonios y quinceañeros masivos de 100 a 300 personas. Las Trancas atiende El Bosque con traslado e instalación puerta a puerta de mesones, bancas y ambientación campestre completa.",
    referencias: ["Av. José Joaquín Pérez", "Salones zona sur", "Quintas de recreo El Bosque"],
  },
  {
    slug: "la-pintana",
    nombre: "La Pintana",
    zona: "Sur",
    descripcion:
      "La Pintana es una comuna del sur de Santiago con espacios naturales únicos como el Parque El Cañaveral y el Parque Intercomunal La Pintana, escenarios ideales para eventos al aire libre con ambientación campestre. El arriendo de mesones de secuoya y bancas para eventos en La Pintana permite organizar celebraciones familiares en jardines y espacios comunitarios con el estilo rústico que Las Trancas ofrece. Los mesones de montaje con bancas incluidas son la solución más práctica para eventos familiares en La Pintana. Coordinamos el traslado e instalación de todos los productos en La Pintana, con servicio de retiro al finalizar el evento.",
    referencias: ["Parque El Cañaveral", "Parque Intercomunal", "Jardines comunitarios"],
  },
  {
    slug: "pedro-aguirre-cerda",
    nombre: "Pedro Aguirre Cerda",
    zona: "Sur",
    descripcion:
      "Pedro Aguirre Cerda (PAC) es una comuna compacta del sur de Santiago con alta actividad de eventos sociales en salones de la Población Los Nogales, Villa Sur y otros sectores residenciales. El arriendo de mesones para eventos en Pedro Aguirre Cerda es ideal para matrimonios y cumpleaños familiares que buscan agregar un toque campestre a sus celebraciones sin salir de la ciudad. Las bancas de secuoya de 1.5 m a $6.000 c/u y los mesones buffet a $30.000 c/u son las opciones más accesibles para eventos en PAC. Las Trancas coordina el traslado e instalación de mesones y bancas en Pedro Aguirre Cerda con atención personalizada.",
    referencias: ["Población Los Nogales", "Villa Sur", "Gran Avenida (sector)"],
  },
  {
    slug: "lo-espejo",
    nombre: "Lo Espejo",
    zona: "Sur",
    descripcion:
      "Lo Espejo es una comuna del sur de Santiago con una comunidad activa en eventos sociales y tradición de celebraciones familiares en salones y jardines de la zona. El arriendo de mesones de secuoya para eventos en Lo Espejo permite que matrimonios, quinceañeros y bautizos cuenten con la ambientación rústica campestre que Las Trancas ofrece. Los mesones de montaje para 10 personas con bancas incluidas son ideales para los eventos familiares típicos de Lo Espejo. Nuestro servicio incluye traslado, armado y retiro de mesones en Lo Espejo, para que el organizador del evento solo deba enfocarse en los detalles de la fiesta.",
    referencias: ["Av. Cinco de Abril", "Salones zona sur", "Jardines familiares Lo Espejo"],
  },
  {
    slug: "san-ramon",
    nombre: "San Ramón",
    zona: "Sur",
    descripcion:
      "San Ramón es una comuna del sur de Santiago con fuerte vida comunitaria y alta frecuencia de eventos sociales como matrimonios civiles, quinceañeros, cumpleaños y bautizos en salones de la zona. El arriendo de mesones buffet de secuoya y barras rústicas en San Ramón agrega el estilo campestre auténtico que buscan cada vez más organizadores de eventos en el sector sur de la capital. Los mesones extensibles de 3 a 30 metros son perfectos para adaptar el metraje exacto al espacio del salón. Las Trancas entrega, instala y retira mesones, bancas y ambientación campestre en San Ramón con traslado coordinado.",
    referencias: ["Av. La Serena", "Salones de eventos San Ramón", "Comunidades zona sur"],
  },

  // ── SURPONIENTE ───────────────────────────────────────────────────────────
  {
    slug: "maipu",
    nombre: "Maipú",
    zona: "Surponiente",
    descripcion:
      "Maipú es la segunda comuna más poblada de Santiago con más de 600.000 habitantes y una de las más activas en eventos sociales: matrimonios, quinceañeros, bautizos y eventos corporativos se realizan en cientos de salones, quintas y jardines de la zona. El arriendo de mesones de secuoya, bancas y barras rústicas para eventos en Maipú tiene altísima demanda, especialmente en sectores como Pajaritos, Villa Las Américas y El Trebal. Los mesones buffet extensibles y los mesones de montaje para 10 y 12 personas son los productos más solicitados en Maipú. Las Trancas coordina el traslado e instalación de toda la ambientación campestre en Maipú con servicio completo puerta a puerta.",
    referencias: ["Pajaritos", "Villa Las Américas", "El Trebal", "Quintas de recreo Maipú"],
  },
  {
    slug: "cerrillos",
    nombre: "Cerrillos",
    zona: "Surponiente",
    descripcion:
      "Cerrillos es una comuna en proceso de consolidación urbana con proyectos residenciales nuevos y una creciente demanda de mobiliario para eventos sociales y corporativos. La cercanía del aeropuerto internacional Arturo Merino Benítez hace de Cerrillos un punto estratégico para eventos de empresas con participantes llegando desde otras ciudades. El arriendo de mesones y barras rústicas para eventos en Cerrillos es ideal para activaciones de marca, inauguraciones y eventos corporativos que buscan ambientación distinta. Las Trancas atiende Cerrillos con traslado e instalación de mesones, bancas y ambientación campestre, cubriendo también el sector de Parque Industrial de Cerrillos.",
    referencias: ["Aeropuerto (acceso)", "Parque Industrial Cerrillos", "Ciudad Parque Bicentenario"],
  },
  {
    slug: "estacion-central",
    nombre: "Estación Central",
    zona: "Surponiente",
    descripcion:
      "Estación Central es una comuna con importante actividad comercial y residencial, cruzada por el eje de Alameda y con acceso directo desde la Terminal de Buses Alameda. Su posición central en el poniente de Santiago la hace estratégica para eventos que reciben invitados de distintas comunas. El arriendo de mesones para eventos en Estación Central incluye matrimonios en salones del sector, eventos corporativos en hoteles de la Alameda y celebraciones familiares en jardines de Villa Portales y sectores aledaños. Las Trancas coordina el traslado e instalación de mesones de secuoya, bancas y barras rústicas en Estación Central con puntualidad y servicio completo.",
    referencias: ["Terminal Alameda", "Villa Portales", "Eje Alameda poniente", "Hoteles zona central"],
  },

  // ── PONIENTE ──────────────────────────────────────────────────────────────
  {
    slug: "quinta-normal",
    nombre: "Quinta Normal",
    zona: "Poniente",
    descripcion:
      "Quinta Normal alberga el Parque Quinta Normal, uno de los espacios verdes más grandes y emblemáticos de Santiago, que actúa como inspiración para matrimonios y eventos al aire libre en todo el sector poniente. La tradición de eventos sociales en Quinta Normal, con sus calles arboladas y casas con jardín, hace del arriendo de mesones de secuoya y bancas campestres una opción muy demandada en la zona. Los mesones extensibles y los mesones de montaje con bancas para 10 personas son los más solicitados en Quinta Normal. Las Trancas entrega e instala mesones y ambientación campestre en Quinta Normal, coordinando el traslado con anticipación.",
    referencias: ["Parque Quinta Normal", "Barrio Yungay (acceso)", "Casas con jardín sector"],
  },
  {
    slug: "lo-prado",
    nombre: "Lo Prado",
    zona: "Poniente",
    descripcion:
      "Lo Prado es una comuna residencial del poniente de Santiago con una comunidad muy activa en celebraciones familiares y eventos sociales. El arriendo de mesones de secuoya y bancas para eventos en Lo Prado permite agregar el encanto campestre a matrimonios, cumpleaños y bautizos realizados en salones y jardines de la zona. La oferta de mesones de montaje para 10 y 12 personas con bancas incluidas es ideal para los eventos familiares habituales de Lo Prado. Las Trancas coordina el traslado e instalación de todos los mesones en Lo Prado, cubriendo también los sectores limítrofes con Pudahuel y Quinta Normal.",
    referencias: ["Av. Neptuno", "Salones familiares Lo Prado", "Límite Pudahuel"],
  },
  {
    slug: "pudahuel",
    nombre: "Pudahuel",
    zona: "Poniente",
    descripcion:
      "Pudahuel es una extensa comuna del poniente de Santiago que incluye desde sectores urbanos densos hasta zonas semi-rurales en la periferia, todas con alta demanda de mobiliario para eventos. La proximidad al aeropuerto internacional Arturo Merino Benítez y la oferta de quintas de recreo en el sector de Pudahuel Rural hacen de esta comuna un destino relevante para eventos masivos y matrimonios campestres. El arriendo de mesones buffet extensibles de 3 a 30 metros y barras rústicas es muy solicitado en Pudahuel para bodas en quintas al aire libre. Las Trancas cubre toda la extensión de Pudahuel con traslado e instalación de mesones y ambientación campestre.",
    referencias: ["Aeropuerto (adyacente)", "Pudahuel Rural", "Quintas de recreo poniente", "Lo Boza"],
  },
  {
    slug: "cerro-navia",
    nombre: "Cerro Navia",
    zona: "Poniente",
    descripcion:
      "Cerro Navia es una comuna del poniente de Santiago con una comunidad comprometida en sus celebraciones sociales: matrimonios, quinceañeros, bautizos y cumpleaños son eventos frecuentes en los salones y jardines de la zona. El arriendo de mesones de secuoya y bancas para eventos en Cerro Navia permite que las celebraciones cuenten con el estilo campestre rústico que distingue a Las Trancas. Los mesones de montaje para 10 personas con bancas incluidas (desde $35.000) y las bancas de secuoya de 1.5 m (desde $6.000 c/u) son las opciones más accesibles para eventos en Cerro Navia. Las Trancas coordina el traslado e instalación en Cerro Navia con servicio completo.",
    referencias: ["Av. Mapocho (acceso)", "Salones Cerro Navia", "Sectores residenciales"],
  },

  // ── NORTE ─────────────────────────────────────────────────────────────────
  {
    slug: "recoleta",
    nombre: "Recoleta",
    zona: "Norte",
    descripcion:
      "Recoleta es una comuna con fuerte identidad cultural y barrios icónicos como el Barrio Patronato, el Cementerio General y la Vega Central, que conviven con una creciente escena de eventos sociales, matrimonios en espacios industriales reconvertidos y fiestas en casas antiguas del sector. El arriendo de mesones de secuoya y barras rústicas para eventos en Recoleta tiene una demanda especial en el segmento de matrimonios con estética vintage e industrial. La Barra 03 con vasijas mapuche y los mesones de mañío son los productos más demandados para este tipo de eventos únicos en Recoleta. Las Trancas coordina el traslado e instalación de mesones y ambientación campestre en Recoleta.",
    referencias: ["Barrio Patronato", "Vega Central", "Espacios industriales", "Barrio Italia (acceso)"],
  },
  {
    slug: "independencia",
    nombre: "Independencia",
    zona: "Norte",
    descripcion:
      "Independencia es una comuna estratégicamente ubicada entre el centro y el norte de Santiago, con alta actividad de eventos en salones del sector de Av. Independencia y los barrios residenciales aledaños. El arriendo de mesones para eventos en Independencia cubre matrimonios, cumpleaños y eventos corporativos de empresas del sector salud (Hospital San José) y educación (universidades). Los mesones buffet extensibles y las barras rústicas son ideales para eventos de 50 a 200 personas en Independencia. Las Trancas entrega e instala mesones, bancas y ambientación campestre en Independencia con traslado coordinado y servicio de retiro.",
    referencias: ["Av. Independencia", "Hospital San José", "Barrios residenciales norte", "Terminal Norte"],
  },
  {
    slug: "conchali",
    nombre: "Conchalí",
    zona: "Norte",
    descripcion:
      "Conchalí es una comuna residencial del norte de Santiago con una tradición fuerte en eventos sociales familiares. El arriendo de mesones de secuoya y bancas para eventos en Conchalí es demandado para matrimonios en salones de la zona, cumpleaños masivos y bautizos en jardines. Los mesones de montaje para 10 y 12 personas con bancas incluidas son los más solicitados en Conchalí por su practicidad para eventos de entre 50 y 150 invitados. Las Trancas cubre Conchalí y comunas limítrofes como Huechuraba y Renca con traslado coordinado, entrega y retiro de mesones y ambientación campestre.",
    referencias: ["Av. Independencia (acceso)", "Salones de eventos", "Barrios residenciales"],
  },
  {
    slug: "huechuraba",
    nombre: "Huechuraba",
    zona: "Norte",
    descripcion:
      "Huechuraba es una de las comunas con mayor desarrollo empresarial del norte de Santiago, sede de parques industriales y centros de negocios que generan alta demanda de arriendo de mobiliario para eventos corporativos, activaciones de marca y team building. Al mismo tiempo, sus sectores residenciales como Ciudad Empresarial y Valle Grande tienen fuerte actividad de matrimonios y celebraciones familiares. El arriendo de mesones de secuoya y barras rústicas con barricas en Huechuraba permite crear experiencias campestres dentro de un entorno urbano moderno. Las Trancas atiende toda Huechuraba con traslado e instalación de mesones y ambientación completa.",
    referencias: ["Ciudad Empresarial", "Parque Industrial Huechuraba", "Valle Grande", "Costanera Norte (acceso)"],
  },
  {
    slug: "quilicura",
    nombre: "Quilicura",
    zona: "Norte",
    descripcion:
      "Quilicura es una de las comunas de mayor crecimiento demográfico de Santiago, con numerosos proyectos residenciales nuevos y una creciente demanda de servicios de eventos. La densidad de salones de fiestas, quintas de recreo y jardines en Quilicura hace que el arriendo de mesones buffet extensibles, bancas de secuoya y barras rústicas sea muy demandado para matrimonios, quinceañeros y eventos corporativos. El sector Chicureo (acceso por Quilicura/Colina) es uno de los destinos más buscados para matrimonios campestres en el norte de Santiago. Las Trancas coordina el traslado e instalación de mesones y ambientación campestre en Quilicura con puntualidad garantizada.",
    referencias: ["Chicureo (acceso)", "Quintas zona norte", "Nuevos barrios residenciales", "Parques industriales"],
  },
  {
    slug: "renca",
    nombre: "Renca",
    zona: "Norte",
    descripcion:
      "Renca es una comuna con fuerte carácter comunitario en el norte de Santiago, con tradición en eventos sociales masivos y celebraciones familiares. El arriendo de mesones de secuoya y bancas para eventos en Renca permite organizar matrimonios, quinceañeros y cumpleaños con el estilo campestre rústico de Las Trancas. Los mesones de montaje para 10 personas y las bancas de secuoya son los productos más accesibles y demandados en Renca para eventos de 50 a 200 invitados. Las Trancas cubre Renca con traslado e instalación de mesones, bancas y barras rústicas, con servicio completo incluyendo armado y retiro.",
    referencias: ["Av. Ferrocarril del Norte", "Salones de eventos", "Sector Renca parque industrial"],
  },
  {
    slug: "colina",
    nombre: "Colina",
    zona: "Norte",
    descripcion:
      "Colina es una de las comunas más buscadas para matrimonios campestres y eventos rurales en la Región Metropolitana, con decenas de quintas, haciendas y espacios de celebración en contacto con la naturaleza. El sector de Chicureo en Colina concentra la mayor densidad de eventos privados de alto estándar del norte de Santiago. El arriendo de mesones de secuoya extensibles de 3 a 30 metros es imprescindible para los banquetes en las haciendas de Colina. Las barras rústicas Barra 02 y Barra 03 con vasijas mapuche son las más solicitadas para bodas en las quintas de Colina. Las Trancas cubre toda la comuna de Colina con traslado e instalación de mesones y ambientación campestre.",
    referencias: ["Chicureo", "Haciendas y quintas", "Ruta 57 (acceso)", "Sector rural Colina"],
  },
  {
    slug: "lampa",
    nombre: "Lampa",
    zona: "Norte",
    descripcion:
      "Lampa es una comuna semi-rural al norte de Santiago que alberga numerosas quintas de campo, haciendas y espacios de eventos al aire libre, ideales para matrimonios campestres y celebraciones en contacto con la naturaleza. La demanda de arriendo de mesones de secuoya extensibles y barras rústicas con barricas en Lampa es alta, especialmente para matrimonios de 100 a 300 personas en jardines de quintas con estilo criollo. Los mesones de mañío y los mesones de cedro con barricas son especialmente populares para lograr la ambientación auténtica que buscan los novios en Lampa. Las Trancas cubre Lampa y comunas adyacentes como Batuco con traslado e instalación de mesones y ambientación completa.",
    referencias: ["Quintas de campo Lampa", "Batuco (adyacente)", "Sector rural", "Ruta 5 Norte (acceso)"],
  },
];

export function getComunaBySlug(slug: string): ComunaData | undefined {
  return COMUNAS.find((c) => c.slug === slug);
}
