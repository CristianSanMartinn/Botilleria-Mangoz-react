// components/sucursal/SucursalCard.tsx
import styles from "./SucursalCard.module.css";
import type { Sucursal } from "../../hooks/sucursal/useSucursalDate";

interface Props {
  sucursal: Sucursal;
  onSelectRetiro: () => void;
  onSelectDelivery: () => void;
  selected?: boolean;
  isDomicilio?: boolean;
}

export const SucursalCard = ({
  sucursal,
  onSelectRetiro,
  onSelectDelivery,
  selected = false,
  isDomicilio = false,
}: Props) => {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""} ${isDomicilio ? styles.domicilioCard : ""}`}
    >
      {!isDomicilio && (
        <>
          <h3 className={styles.nombre}>{sucursal.nombre}</h3>
          <p className={styles.info}>{sucursal.direccion}</p>
          <p className={styles.info}>{sucursal.horario}</p>
          <a
            href={`https://wa.me/${sucursal.telefono}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            📞 Contactar
          </a>
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={onSelectRetiro}>
              Retirar aquí
            </button>
            <button className={styles.btnSecondary} onClick={onSelectDelivery}>
              Despacho
            </button>
          </div>
        </>
      )}

      {isDomicilio && (
        <>
          <h3>Despacho a domicilio</h3>
          <p>Recibe tu pedido en casa</p>
          <button className={styles.btnPrimary} onClick={onSelectDelivery}>
            Elegir despacho
          </button>
        </>
      )}
    </div>
  );
};

export default SucursalCard;
