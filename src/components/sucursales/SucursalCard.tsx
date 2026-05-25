import styles from "./SucursalCard.module.css";
import type { Sucursal } from "../../hooks/sucursal/useSucursalDate";

interface Props {
  sucursal: Sucursal;
  selected?: boolean;
  isDomicilio?: boolean;
  onSelectRetiro: () => void;
  onSelectDelivery: () => void;
}

const SucursalCard = ({
  sucursal,
  selected = false,
  isDomicilio = false,
  onSelectRetiro,
  onSelectDelivery,
}: Props) => {
  return (
    <article
      className={`${styles.card} ${selected ? styles.selected : ""} ${
        isDomicilio ? styles.domicilioCard : ""
      }`}
    >
      {/* Glow superior cuando está seleccionado */}
      {selected && <div className={styles.selectedGlow} aria-hidden="true" />}

      {/* Indicador seleccionado */}
      {selected && (
        <div className={styles.selectedBadge}>
          <span className={styles.selectedDot} />
          Seleccionado
        </div>
      )}

      {/* Ícono */}
      <div className={styles.cardIcon} aria-hidden="true">
        {isDomicilio ? "🛵" : "📍"}
      </div>

      {/* Nombre */}
      <h3 className={styles.nombre}>
        {isDomicilio ? "Despacho a Domicilio" : sucursal.nombre}
      </h3>

      {/* Detalles de sucursal */}
      {!isDomicilio && (
        <ul className={styles.details}>
          <li className={styles.detailItem}>
            <span className={styles.detailIcon} aria-hidden="true">📌</span>
            <span>{sucursal.direccion}</span>
          </li>
          <li className={styles.detailItem}>
            <span className={styles.detailIcon} aria-hidden="true">🕐</span>
            <span>{sucursal.horario}</span>
          </li>
          <li className={styles.detailItem}>
            <span className={styles.detailIcon} aria-hidden="true">📞</span>
            <a
              href={`https://wa.me/${sucursal.telefono.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              {sucursal.telefono}
            </a>
          </li>
        </ul>
      )}

      {/* Descripción para domicilio */}
      {isDomicilio && (
        <p className={styles.domicilioDesc}>
          Recibe tu pedido directo en tu puerta. Cobertura en toda Melipilla.
        </p>
      )}

      {/* Acciones */}
      <div className={styles.actions}>
        {!isDomicilio && (
          <button
            onClick={onSelectRetiro}
            className={styles.btnRetiro}
            aria-label={`Retirar en ${sucursal.nombre}`}
          >
            Retirar aquí
          </button>
        )}
        <button
          onClick={onSelectDelivery}
          className={`${styles.btnDelivery} ${isDomicilio ? styles.btnDeliveryFull : ""}`}
          aria-label={isDomicilio ? "Elegir despacho a domicilio" : `Despacho desde ${sucursal.nombre}`}
        >
          {isDomicilio ? "Elegir despacho" : "A domicilio"}
        </button>
      </div>
    </article>
  );
};

export default SucursalCard;