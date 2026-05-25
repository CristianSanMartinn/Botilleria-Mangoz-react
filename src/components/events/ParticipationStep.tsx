// components/events/ParticipationStep.tsx
import React from "react";
import styles from "./Events.module.css";
import type { Step } from "../../hooks/events/useEventsData";

interface Props {
  step: Step;
}

export const ParticipationStep: React.FC<Props> = ({ step }) => {
  return (
    <div className={styles.stepItem}>
      <div className={styles.stepNumber}>
        <span>{step.number}</span>
      </div>
      <div className={styles.stepContent}>
        <h4>{step.title}</h4>
        <p>{step.text}</p>
      </div>
    </div>
  );
};