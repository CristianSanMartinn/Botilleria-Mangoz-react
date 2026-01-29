// hooks/events/useEventsData.tsx
import type { ReactNode } from "react";

export type BadgeType = "featured" | "secondary";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
}

export interface EventCardData {
  id: number;
  title: string;
  prize: string;
  description: string;
  icon: ReactNode;
  badge: string;
  badgeType: BadgeType;
  countdown?: Countdown;
  button: string;
}

export interface Step {
  id: number;
  number: number;
  title: string;
  text: string;
}

export const useEventsData = () => {
  const events: EventCardData[] = [
    {
      id: 1,
      title: "Gran Sorteo Mensual",
      prize: "Premio: Champagne Moët & Chandon + Whisky Premium",
      description:
        "Cada compra sobre $20.000 participa automáticamente. Sorteo el último viernes de cada mes en nuestro Instagram.",
      icon: "🍾",
      badge: "🔥 ACTIVO",
      badgeType: "featured",
      countdown: { days: 12, hours: 5, minutes: 23 },
      button: "Más Información"
    },
    {
      id: 2,
      title: "Viernes de Cóctel Gratis",
      prize: "Premio: Cóctel Premium a elección",
      description:
        "Todos los viernes sorteamos 5 cócteles premium entre nuestros seguidores de redes sociales.",
      icon: "🍹",
      badge: "📅 PRÓXIMO",
      badgeType: "secondary",
      button: "Participar"
    },
     {
      id: 3,
      title: "Cliente del Mes",
      prize: "Premio: $50.000 en productos",
      description:
        "Nuestro cliente más frecuente del mes se lleva $50.000 para gastar en cualquiera de nuestros locales.",
      icon: "🎊",
      badge: "🎁 MENSUAL",
      badgeType: "secondary",
      button: "Ver Bases"
    }
  ];

  const steps: Step[] = [
    { id: 1, number: 1, title: "Compra", text: "Realiza tu compra en cualquiera de nuestros locales" },
    { id: 2, number: 2, title: "Síguenos", text: "Sigue nuestras redes sociales @botilleriapremium" },
    { id: 3, number: 3, title: "Participa", text: "Automáticamente entras en todos los sorteos activos" },
    { id: 4, number: 4, title: "Gana", text: "Anunciamos ganadores en Instagram y WhatsApp" }
  ];

  return { events, steps };
};
