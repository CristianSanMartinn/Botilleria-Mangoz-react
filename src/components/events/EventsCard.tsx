// components/events/EventsCard.tsx
import React, { useEffect, useState } from "react";
import styles from "./Events.module.css";
import type { EventCardData } from "../../hooks/events/useEventsData";

interface Props {
  event: EventCardData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Calcula tiempo restante a partir del countdown inicial
function useCountdown(initial?: { days: number; hours: number; minutes: number }): TimeLeft | null {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => {
    if (!initial) return null;
    return { ...initial, seconds: 0 };
  });

  useEffect(() => {
    if (!initial) return;
    // Convierte a segundos totales
    let total =
      initial.days * 86400 + initial.hours * 3600 + initial.minutes * 60;

    const tick = () => {
      if (total <= 0) return;
      total -= 1;
      setTimeLeft({
        days:    Math.floor(total / 86400),
        hours:   Math.floor((total % 86400) / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
      });
    };

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return timeLeft;
}

const pad = (n: number) => String(n).padStart(2, "0");

export const EventCard: React.FC<Props> = ({ event }) => {
  const isFeatured = event.badgeType === "featured";
  const timeLeft = useCountdown(event.countdown);

  return (
    <article
      className={`${styles.eventCard} ${isFeatured ? styles.featured : ""}`}
    >
      {/* Glow line para el destacado */}
      {isFeatured && <div className={styles.featuredGlow} aria-hidden="true" />}

      {/* Badge */}
      <div
        className={`${styles.eventBadge} ${
          !isFeatured ? styles.badgeSecondary : ""
        }`}
      >
        {event.badge}
      </div>

      {/* Ícono */}
      <div className={styles.eventIconWrap} aria-hidden="true">
        <span className={styles.eventIconLarge}>{event.icon}</span>
      </div>

      {/* Texto */}
      <h3 className={styles.eventTitle}>{event.title}</h3>
      <p className={styles.eventPrize}>{event.prize}</p>
      <p className={styles.eventDescription}>{event.description}</p>

      {/* Countdown */}
      {timeLeft && (
        <div className={styles.eventCountdown} aria-label="Cuenta regresiva">
          {[
            { value: timeLeft.days,    label: "Días" },
            { value: timeLeft.hours,   label: "Hrs" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Seg" },
          ].map(({ value, label }) => (
            <div key={label} className={styles.countdownItem}>
              <span className={styles.countdownNumber}>{pad(value)}</span>
              <span className={styles.countdownLabel}>{label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Botón */}
      <button
        className={`${styles.eventBtn} ${!isFeatured ? styles.secondaryBtn : ""}`}
      >
        {event.button}
      </button>
    </article>
  );
};