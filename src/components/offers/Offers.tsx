import styles from "./Offers.module.css";
import { useOffersData } from "../../hooks/offers/useOffersData";

export default function Offers() {
  const { slides, activeIndex, changeSlide } = useOffersData();

  return (
    <section className={styles.specialOffers} id="ofertas">
      <div className={styles.offersContainer}>
        <h2>🔥 Ofertas Especiales de la Semana</h2>

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
                <div className={styles.offerIcon}>{slide.icon}</div>

                <div className={styles.offerInfo}>
                  <h3>{slide.titulo}</h3>
                  <p className={styles.offerDiscount}>{slide.descuento}</p>
                  <p className={styles.offerDescription}>{slide.descripcion}</p>
                </div>

                <div className={styles.offerBadge}>{slide.badge}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.offersDots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.offerDot} ${
                activeIndex === i ? styles.offerDotActive : ""
              }`}
              onClick={() => changeSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

