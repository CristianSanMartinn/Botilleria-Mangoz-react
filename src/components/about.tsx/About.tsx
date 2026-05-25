import styles from "./About.module.css";
import { useAboutData } from "../../hooks/about/useAboutData";

const AboutUs = () => {
  const { title, subtitle, paragraphs, values, photoBadge, photoIcon } = useAboutData();

  return (
    <section className={styles.aboutUs} id="nosotros">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>

          {/* Columna texto */}
          <div className={styles.aboutText}>
            <span className={styles.eyebrow}>Nuestra historia</span>
            <h2>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>

            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className={styles.aboutValues}>
              {values.map((value, idx) => (
                <div key={idx} className={styles.valueItem}>
                  <div className={styles.valueIcon} aria-hidden="true">
                    {value.icon}
                  </div>
                  <div className={styles.valueText}>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna imagen */}
          <div className={styles.aboutImage}>
            <div className={styles.photoOuter}>
              {/* Anillo decorativo */}
              <div className={styles.photoRing} aria-hidden="true" />

              <div className={styles.photoFrame} aria-hidden="true">
                {photoIcon}
              </div>

              <div className={styles.photoBadge}>
                <span className={styles.badgeDot} />
                {photoBadge}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;