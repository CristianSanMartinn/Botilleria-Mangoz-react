import styles from "./Offers.module.css";
import { useOffersData } from "../../hooks/offers/useOffersData";

export default function Offers() {
  const { slides, activeIndex, changeSlide } = useOffersData();

  return (
    <section className={styles.specialOffers} id="ofertas">
      <div className={styles.offersContainer}>

        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Esta semana</span>
          <h2 className={styles.sectionTitle}>Ofertas Especiales</h2>
          <div className={styles.titleRule} />
        </div>

        {/* Carrusel */}
        <div className={styles.offersCarousel}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.offerSlide} ${
                activeIndex === index ? styles.offerActive : ""
              }`}
            >
              <div className={styles.offerContent}>
                {/* Shine sweep */}
                <div className={styles.shineSweep} aria-hidden="true" />

                {/* Ícono */}
                <div className={styles.offerIconWrap}>
                  <div className={styles.offerIcon}>{slide.icon}</div>
                </div>

                {/* Info */}
                <div className={styles.offerInfo}>
                  <h3>{slide.titulo}</h3>
                  <p className={styles.offerDiscount}>{slide.descuento}</p>
                  <p className={styles.offerDescription}>{slide.descripcion}</p>
                </div>

                {/* Badge */}
                <div className={styles.offerBadge}>{slide.badge}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.offersDots}>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a oferta ${i + 1}`}
              className={`${styles.offerDot} ${
                activeIndex === i ? styles.offerDotActive : ""
              }`}
              onClick={() => changeSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}