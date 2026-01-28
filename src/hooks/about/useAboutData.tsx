export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export const useAboutData = () => {
  const title = "🏆 Sobre Nosotros";
  const subtitle = "Más de 15 años sirviendo a Melipilla";

  const paragraphs = [
    "Somos una empresa familiar que nació en 2008 con el sueño de ofrecer las mejores bebidas a los mejores precios en Melipilla. Lo que comenzó como un pequeño local en el centro, hoy se ha convertido en la botillería de confianza para miles de familias.",
    "Nuestra misión es clara: brindarte la mejor experiencia de compra, con productos de calidad, precios justos y un servicio al cliente excepcional. Cada miembro de nuestro equipo está comprometido con tu satisfacción."
  ];

  const values: ValueItem[] = [
    { icon: "✨", title: "Calidad", description: "Solo productos premium" },
    { icon: "💰", title: "Mejores Precios", description: "Garantizados en Melipilla" },
    { icon: "❤️", title: "Servicio", description: "Atención personalizada" },
  ];

  return {
    title,
    subtitle,
    paragraphs,
    values,
    photoBadge: "Desde 2008",
    photoIcon: "🏪"
  };
};
