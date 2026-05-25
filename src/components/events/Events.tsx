import React from "react";
import styles from "./Events.module.css";
import { useEventsData } from "../../hooks/events/useEventsData";
import { EventCard } from "./EventsCard";
import { ParticipationStep } from "./ParticipationStep";

export const Events: React.FC = () => {
  const { events, steps } = useEventsData();

  return (
    <section className={styles.eventsSection} id="eventos">
      <div className={styles.eventsContainer}>

        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Premios y sorteos</span>
          <h2 className={styles.titulo}>Eventos Mangoz</h2>
          <div className={styles.titleRule} />
          <p className={styles.subtitle}>
            Cada compra es una oportunidad de ganar. ¡Participa y llévate increíbles premios!
          </p>
        </div>

        {/* Cards */}
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Pasos */}
        <div className={styles.participationInfo}>
          <div className={styles.participationHeader}>
            <span className={styles.eyebrow}>Es muy fácil</span>
            <h3 className={styles.participationTitle}>¿Cómo Participar?</h3>
          </div>

          <div className={styles.participationSteps}>
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <ParticipationStep step={step} />
                {i < steps.length - 1 && (
                  <div className={styles.stepConnector} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};