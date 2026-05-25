import styles from "./Hero.module.css";
import { useHeroData } from "../../hooks/hero/useHeroData";

export default function Hero() {
  const { slides, activeIndex, stats, floatingIcons } = useHeroData();

  return (
    <section className={styles.hero} id="inicio">
      {/* Iconos flotantes decorativos */}
      <div className={styles.floatingIcons} aria-hidden="true">
        {floatingIcons.map((icon, i) => (
          <div key={i} className={styles.floatingIcon}>
            {icon}
          </div>
        ))}
      </div>

      {/* Líneas de fondo decorativas */}
      <div className={styles.bgLines} aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.bgLine} />
        ))}
      </div>

      <div className={styles.heroContent}>
        {/* Badge de estado */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Los mejores precios de Melipilla
        </div>

        {/* Título principal */}
        <h2 className={styles.heroTitle}>Botillería</h2>
        <div className={styles.heroTitleAccent}>Mangoz</div>

        {/* Carrusel de promos */}
        <div className={styles.promoCarousel} aria-live="polite">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`${styles.promoSlide} ${
                i === activeIndex ? styles.active : ""
              }`}
            >
              <span className={styles.promoIcon} aria-hidden="true">
                {s.icon}
              </span>
              <span className={styles.promoText}>{s.text}</span>
            </div>
          ))}
        </div>

        <p className={styles.heroDesc}>
          Amplio surtido de bebidas nacionales e importadas. Precios
          imbatibles y despacho rápido a tu puerta.
        </p>

        {/* Botones */}
        <div className={styles.heroButtons}>
          <a href="#productos" className={styles.ctaButton}>
            Ver Catálogo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#ubicaciones" className={`${styles.ctaButton} ${styles.secondary}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s-8-6.686-8-12a8 8 0 0 1 16 0c0 5.314-8 12-8 12z"/><circle cx="12" cy="9" r="3"/>
            </svg>
            Nuestras Tiendas
          </a>
        </div>

        {/* Stats */}
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