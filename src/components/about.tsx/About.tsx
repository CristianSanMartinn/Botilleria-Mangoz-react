import styles from "./About.module.css";
import { useAboutData } from "../../hooks/about/useAboutData";

const AboutUs = () => {
  const { title, subtitle, paragraphs, values, photoBadge, photoIcon } = useAboutData();

  return (
    <section className={styles.aboutUs} id="nosotros">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          
          <div className={styles.aboutText}>
            <h2>{title}</h2>
            <h3 className={styles.subtitle}>{subtitle}</h3>

            <p>{paragraphs[0]}</p>
            <p>{paragraphs[1]}</p>

            <div className={styles.aboutValues}>
              {values.map((value, idx) => (
                <div key={idx} className={styles.valueItem}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <div className={styles.valueText}>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutImage}>
            <div className={styles.aboutPhoto}>
              <div className={styles.photoFrame}>{photoIcon}</div>
              <div className={styles.photoBadge}>
                <span>{photoBadge}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
