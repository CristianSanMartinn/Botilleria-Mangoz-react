import styles from "./Events.module.css";
import { useEventsData } from "../../hooks/events/useEventsData";
import { EventCard } from "./EventsCard";
import { FaGift } from "react-icons/fa";
import { ParticipationStep } from "./ParticipationStep";

export const Events: React.FC = () => {
  const { events, steps } = useEventsData();

  return (
    <section className={styles.eventsSection} id="eventos">
      <div className={styles.eventsContainer}>
        
        <div className={styles.sectionHeader}>
          <h2>
              <FaGift className={styles.titleIcon} />
              Eventos y Sorteos
          </h2>
          <p id="events-subtitle">¡Participa y gana increíbles premios!</p>
        </div>

        <div className={styles.titleDivider}></div>

        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className={styles.participationInfo}>
          <h3>🎯 ¿Cómo Participar?</h3>

          <div className={styles.participationSteps}>
            {steps.map((step) => (
              <ParticipationStep key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
