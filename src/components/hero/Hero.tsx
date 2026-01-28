import styles from "./Hero.module.css";
import { useHeroData } from "../../hooks/hero/useHeroData";

export default function Hero() {
  const { slides, activeIndex, stats, floatingIcons } = useHeroData();

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.promoBanner}>🎉 OFERTAS</div>

      <div className={styles.floatingIcons}>
        {floatingIcons.map((icon, i) => (
          <div key={i} className={styles.floatingIcon}>
            {icon}
          </div>
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.promoCarousel}>
          {slides.map((s, i) => (
            <div
              key={i}
              className={`${styles.promoSlide} ${
                i === activeIndex ? styles.active : ""
              }`}
            >
              <span className={styles.promoIcon}>{s.icon}</span>
              <span className={styles.promoText}>{s.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.badge}>✨ Los mejores precios de Melipilla</div>

        <h2>Tu Botillería de Confianza en Melipilla</h2>
        <p>Amplio surtido de bebidas, los mejores precios y entrega rápida</p>

        <div className={styles.heroButtons}>
          <a href="#productos" className={styles.ctaButton}>
            Ver Productos 🛒
          </a>

          <a href="#ubicaciones" className={`${styles.ctaButton} ${styles.secondary}`}>
            📍 Nuestras Tiendas
          </a>
        </div>

        <div className={styles.statsSection}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
