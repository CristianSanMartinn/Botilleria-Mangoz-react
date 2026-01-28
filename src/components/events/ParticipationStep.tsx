// components/events/ParticipationStep.tsx
import styles from "./Events.module.css";
import { Step } from "../../hooks/events/useEventsData";

interface Props {
  step: Step;
}

export const ParticipationStep: React.FC<Props> = ({ step }) => {
  return (
    <div className={styles.stepItem}>
      <div className={styles.stepNumber}>{step.number}</div>
      <div className={styles.stepContent}>
        <h4>{step.title}</h4>
        <p>{step.text}</p>
      </div>
    </div>
  );
};

export default ParticipationStep;
