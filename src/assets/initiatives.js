const allInitiatives = [
  {
    description:
      "Por el que se reforma la fracción VII del artículo 27 de la Ley para Prevenir y Erradicar la Discriminación en el Estado de Baja California",
    type: "Iniciativa de Reforma",
    presented_by: "Adrian Humberto Valle Ballesteros",
    group: "PRI",
    date: "2025/03/13",
    color: "btn-error",
    stage: "Idea",
  },
  {
    description:
      "Por el que se adiciona el artículo 145 BIS al Código Penal para el Estado de Baja California, en materia de protección a adultos mayores",
    type: "Iniciativa de Adición",
    presented_by: "María del Rocío Adame Muñoz",
    group: "MORENA",
    date: "2025/03/12",
    color: "btn-warning",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se reforman los artículos 4 y 8 de la Ley de Educación del Estado de Baja California, en materia de educación ambiental",
    type: "Iniciativa de Reforma",
    presented_by: "Dunnia Montserrat Murillo López",
    group: "MORENA",
    date: "2025/03/11",
    color: "btn-success",
    stage: "Comision",
  },
  {
    description:
      "Por el que se reforma el artículo 7 de la Ley de Fomento a la Competitividad y Desarrollo Económico para el Estado de Baja California",
    type: "Iniciativa de Reforma",
    presented_by: "Santa Alejandrina Corral Quintero",
    group: "PAN",
    date: "2025/03/10",
    color: "btn-primary",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se reforman y adicionan diversas disposiciones de la Ley de Protección al Ambiente para el Estado de Baja California",
    type: "Iniciativa de Reforma",
    presented_by: "Julio César Vázquez Castillo",
    group: "PT",
    date: "2025/03/09",
    color: "btn-info",
    stage: "Comision",
  },
  {
    description:
      "Por el que se reforman y adicionan diversas disposiciones de la Ley de Protección al Ambiente para el Estado de Baja California",
    type: "Iniciativa de Reforma",
    presented_by: "Julio César Vázquez Castillo",
    group: "PT",
    date: "2025/03/09",
    color: "btn-neutral",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se crea el programa de fomento a la cultura y las artes en diversas regiones del Estado de Baja California",
    type: "Iniciativa de Creación",
    presented_by: "Alejandro Ramírez Ortega",
    group: "PAN",
    date: "2025/03/08",
    color: "btn-secondary",
    stage: "Idea",
  },
  {
    description:
      "Por el que se modifica la Ley de Transparencia para incorporar nuevas medidas de rendición de cuentas",
    type: "Iniciativa de Reforma",
    presented_by: "Luisa Fernanda Castro",
    group: "PRI",
    date: "2025/03/07",
    color: "btn-success",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se adiciona el capítulo sobre protección animal en la Ley de Bienestar del Estado de Baja California",
    type: "Iniciativa de Adición",
    presented_by: "Ricardo Solís Mendoza",
    group: "MORENA",
    date: "2025/03/06",
    color: "btn-warning",
    stage: "Comision",
  },
  {
    description:
      "Por el que se deroga el artículo 10 relativo a restricciones comerciales en zonas fronterizas",
    type: "Iniciativa de Derogación",
    presented_by: "Cecilia Inés Duarte",
    group: "PT",
    date: "2025/03/05",
    color: "btn-error",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se moderniza la Ley de Desarrollo Social para ampliar programas de apoyo en comunidades marginadas",
    type: "Iniciativa de Reforma",
    presented_by: "Fernando Alberto Guzmán",
    group: "PRI",
    date: "2025/03/04",
    color: "btn-primary",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se establece un mecanismo de participación ciudadana en la gestión de recursos naturales",
    type: "Iniciativa de Creación",
    presented_by: "Mónica Esther Rivas",
    group: "PAN",
    date: "2025/03/03",
    color: "btn-info",
    stage: "Idea",
  },
  {
    description:
      "Por el que se reforman los procedimientos administrativos para agilizar la obtención de permisos en obras públicas",
    type: "Iniciativa de Reforma",
    presented_by: "Guillermo Ernesto Ponce",
    group: "MORENA",
    date: "2025/03/02",
    color: "btn-neutral",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se reforman disposiciones de la Ley de Salud para fortalecer programas de prevención en enfermedades crónicas",
    type: "Iniciativa de Reforma",
    presented_by: "Patricia Eloísa Delgado",
    group: "PRI",
    date: "2025/03/01",
    color: "btn-warning",
    stage: "Comision",
  },
  {
    description:
      "Por el que se adiciona un nuevo artículo en la Ley de Vivienda Social para fomentar la construcción de unidades habitacionales",
    type: "Iniciativa de Adición",
    presented_by: "Oscar Manuel López",
    group: "PT",
    date: "2025/02/28",
    color: "btn-primary",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se implementan medidas para la protección de los recursos hídricos en áreas urbanas y rurales",
    type: "Iniciativa de Creación",
    presented_by: "Verónica Alejandra Maldonado",
    group: "MORENA",
    date: "2025/02/27",
    color: "btn-info",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se reforman las normas de seguridad en el transporte público de personas, garantizando mayor protección",
    type: "Iniciativa de Reforma",
    presented_by: "Sergio Adrián Mendoza",
    group: "PAN",
    date: "2025/02/26",
    color: "btn-secondary",
    stage: "Idea",
  },
  {
    description:
      "Por el que se adicionan medidas de fomento a la inversión en energías renovables en el Estado",
    type: "Iniciativa de Adición",
    presented_by: "Elena Gabriela Roldán",
    group: "PRI",
    date: "2025/02/25",
    color: "btn-success",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se moderniza la ley de asociaciones civiles para fortalecer la participación ciudadana",
    type: "Iniciativa de Reforma",
    presented_by: "Manuel Arturo Contreras",
    group: "PT",
    date: "2025/02/24",
    color: "btn-warning",
    stage: "Comision",
  },
  {
    description:
      "Por el que se reforman disposiciones de la Ley de Protección Civil para mejorar protocolos de emergencia",
    type: "Iniciativa de Reforma",
    presented_by: "Carmen Estefanía Ruiz",
    group: "MORENA",
    date: "2025/02/23",
    color: "btn-error",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se crea el observatorio de transparencia y rendición de cuentas en el gobierno del Estado",
    type: "Iniciativa de Creación",
    presented_by: "Arturo Iván Salinas",
    group: "PAN",
    date: "2025/02/22",
    color: "btn-neutral",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se reestructura la Ley de Desarrollo Urbano para impulsar el crecimiento ordenado de las ciudades",
    type: "Iniciativa de Reforma",
    presented_by: "Fernanda Julieta Méndez",
    group: "PRI",
    date: "2025/02/21",
    color: "btn-primary",
    stage: "Idea",
  },
  {
    description:
      "Por el que se adicionan disposiciones de inclusión laboral en la Ley de Empleo",
    type: "Iniciativa de Adición",
    presented_by: "Ramiro Esteban Castro",
    group: "PT",
    date: "2025/02/20",
    color: "btn-info",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se reforman los criterios para la asignación de recursos en materia de infraestructura educativa",
    type: "Iniciativa de Reforma",
    presented_by: "Alicia Mariela Torres",
    group: "MORENA",
    date: "2025/02/19",
    color: "btn-secondary",
    stage: "Comision",
  },
  {
    description:
      "Por el que se establece un programa integral de apoyo a emprendedores del sector tecnológico",
    type: "Iniciativa de Creación",
    presented_by: "Javier Esteban Rivas",
    group: "PAN",
    date: "2025/02/18",
    color: "btn-warning",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se moderniza la Ley de Ciencia y Tecnología para impulsar la innovación en el Estado",
    type: "Iniciativa de Reforma",
    presented_by: "Marisol Leticia Peña",
    group: "PRI",
    date: "2025/02/17",
    color: "btn-success",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se adiciona un apartado sobre sustentabilidad en la Ley de Obras Públicas",
    type: "Iniciativa de Adición",
    presented_by: "Víctor Manuel Guevara",
    group: "PT",
    date: "2025/02/16",
    color: "btn-error",
    stage: "Idea",
  },
  {
    description:
      "Por el que se reforman las normas para la protección de los derechos de personas con discapacidad",
    type: "Iniciativa de Reforma",
    presented_by: "Norma Leticia Figueroa",
    group: "MORENA",
    date: "2025/02/15",
    color: "btn-neutral",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se impulsa la creación de espacios verdes y parques en zonas urbanas",
    type: "Iniciativa de Creación",
    presented_by: "Héctor Orlando Rivera",
    group: "PAN",
    date: "2025/02/14",
    color: "btn-primary",
    stage: "Comision",
  },
  {
    description:
      "Por el que se reforman las disposiciones de la Ley de Impuestos para promover la igualdad fiscal",
    type: "Iniciativa de Reforma",
    presented_by: "Claudia Sofía Ramírez",
    group: "PRI",
    date: "2025/02/13",
    color: "btn-warning",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se adiciona un protocolo de integridad en la contratación pública",
    type: "Iniciativa de Adición",
    presented_by: "Esteban Rodrigo Marín",
    group: "PT",
    date: "2025/02/12",
    color: "btn-success",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se actualiza la Ley Orgánica del Poder Legislativo para incorporar transparencia en la toma de decisiones",
    type: "Iniciativa de Reforma",
    presented_by: "Diana Marcela Soto",
    group: "MORENA",
    date: "2025/02/11",
    color: "btn-info",
    stage: "Idea",
  },
  {
    description:
      "Por el que se impulsa la modernización del sistema de transporte urbano con nuevas tecnologías ecológicas",
    type: "Iniciativa de Creación",
    presented_by: "Rafael Ignacio Molina",
    group: "PAN",
    date: "2025/02/10",
    color: "btn-secondary",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se reforman los mecanismos de financiamiento para proyectos de desarrollo comunitario",
    type: "Iniciativa de Reforma",
    presented_by: "Laura Beatriz Cárdenas",
    group: "PRI",
    date: "2025/02/09",
    color: "btn-primary",
    stage: "Comision",
  },
  {
    description:
      "Por el que se adiciona el uso de tecnologías digitales en la gestión administrativa del Estado",
    type: "Iniciativa de Adición",
    presented_by: "Roberto Daniel Ochoa",
    group: "MORENA",
    date: "2025/02/08",
    color: "btn-warning",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se establecen lineamientos para la preservación del patrimonio histórico en el Estado",
    type: "Iniciativa de Creación",
    presented_by: "Marina Julieta Paredes",
    group: "PT",
    date: "2025/02/07",
    color: "btn-info",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se reforma la Ley de Seguridad Pública para optimizar los protocolos de respuesta ante crisis",
    type: "Iniciativa de Reforma",
    presented_by: "Guillermo Arturo Salas",
    group: "PAN",
    date: "2025/02/06",
    color: "btn-neutral",
    stage: "Idea",
  },
  {
    description:
      "Por el que se adiciona un módulo de ética y transparencia en la formación de funcionarios públicos",
    type: "Iniciativa de Adición",
    presented_by: "Adriana Soledad Fuentes",
    group: "PRI",
    date: "2025/02/05",
    color: "btn-success",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se modernizan los procedimientos para la contrataciones estatales y la rendición de cuentas",
    type: "Iniciativa de Reforma",
    presented_by: "Jorge Luis Jiménez",
    group: "MORENA",
    date: "2025/02/04",
    color: "btn-error",
    stage: "Comision",
  },
  {
    description:
      "Por el que se impulsa la creación de programas de formación en oficios técnicos para jóvenes en riesgo",
    type: "Iniciativa de Creación",
    presented_by: "Isabel Cristina Navarro",
    group: "PAN",
    date: "2025/02/03",
    color: "btn-primary",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se reforman y fortalecen las disposiciones de la Ley del Deporte para promover estilos de vida saludables",
    type: "Iniciativa de Reforma",
    presented_by: "Estela Marina Rojas",
    group: "PRI",
    date: "2025/02/02",
    color: "btn-warning",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se adiciona una sección sobre innovación en la Ley de Fomento a la Economía Digital",
    type: "Iniciativa de Adición",
    presented_by: "Mauricio Alejandro Herrera",
    group: "PT",
    date: "2025/02/01",
    color: "btn-info",
    stage: "Idea",
  },
  {
    description:
      "Por el que se revisan y actualizan criterios en la Ley de Acceso a la Información Pública",
    type: "Iniciativa de Reforma",
    presented_by: "Leticia Fernanda Delgado",
    group: "MORENA",
    date: "2025/01/31",
    color: "btn-secondary",
    stage: "Mesa directiva",
  },
  {
    description:
      "Por el que se impulsa la creación de un observatorio de cambio climático en el Estado",
    type: "Iniciativa de Creación",
    presented_by: "Ricardo Andrés Paredes",
    group: "PAN",
    date: "2025/01/30",
    color: "btn-primary",
    stage: "Comision",
  },
  {
    description:
      "Por el que se reforman las políticas de promoción de la cultura indígena en las leyes estatales",
    type: "Iniciativa de Reforma",
    presented_by: "Sofía Milagros Velázquez",
    group: "PRI",
    date: "2025/01/29",
    color: "btn-warning",
    stage: "Juridico",
  },
  {
    description:
      "Por el que se adiciona un programa de incentivos para la inversión en infraestructura educativa rural",
    type: "Iniciativa de Adición",
    presented_by: "Diego Armando López",
    group: "PT",
    date: "2025/01/28",
    color: "btn-success",
    stage: "Pleno",
  },
  {
    description:
      "Por el que se moderniza la Ley de Protección a la Infancia, ampliando mecanismos de vigilancia y acción",
    type: "Iniciativa de Reforma",
    presented_by: "Verónica Elisa Salinas",
    group: "MORENA",
    date: "2025/01/27",
    color: "btn-error",
    stage: "Idea",
  },
];

export const addInitiative = (initiative) => {
  allInitiatives.unshift(initiative);
  return allInitiatives;
};

export const removeInitiative = (index) => {
  allInitiatives.splice(index, 1);
  return allInitiatives;
};

export default allInitiatives;