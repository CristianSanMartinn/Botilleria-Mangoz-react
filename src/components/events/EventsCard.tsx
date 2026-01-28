// components/events/EventCard.tsx
import styles from "./Events.module.css";
import { EventCardData } from "../../hooks/events/useEventsData";

interface Props {
  event: EventCardData;
}

export const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div
      className={`${styles.eventCard} ${
        event.badgeType === "featured" ? styles.featured : ""
      }`}
    >
      <div
        className={`${styles.eventBadge} ${
          event.badgeType === "secondary" ? styles.secondary : ""
        }`}
      >
        {event.badge}
      </div>

      <div className={styles.eventIconLarge}>{event.icon}</div>

      <h3>{event.title}</h3>
      <p className={styles.eventPrize}>{event.prize}</p>
      <p className={styles.eventDescription}>{event.description}</p>

      {event.countdown && (
        <div className={styles.eventCountdown}>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{event.countdown.days}</span>
            <span className={styles.countdownLabel}>Días</span>
          </div>

          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{event.countdown.hours}</span>
            <span className={styles.countdownLabel}>Horas</span>
          </div>

          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{event.countdown.minutes}</span>
            <span className={styles.countdownLabel}>Min</span>
          </div>
        </div>
      )}

      <button
        className={`${styles.eventBtn} ${
          event.badgeType === "secondary" ? styles.secondary : ""
        }`}
      >
        {event.button}
      </button>
    </div>
  );
};

export default EventCard;