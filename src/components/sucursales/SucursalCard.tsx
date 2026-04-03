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
    <div className={`${styles.card} ${selected ? styles.selected : ""}`}>
      <h3 className={styles.nombre}>
        {isDomicilio ? "Despacho a domicilio" : sucursal.nombre}
      </h3>

      {!isDomicilio && (
        <>
          <p className={styles.info}>{sucursal.direccion}</p>
          <p className={styles.info}>{sucursal.horario}</p>

          <a
            href={`https://wa.me/${sucursal.telefono.replace(/\s+/g, "")}`}
            target="_blank"
            className={styles.whatsapp}
          >
            📞 {sucursal.telefono}
          </a>
        </>
      )}

      <div className={styles.actions}>
        {!isDomicilio && (
          <button onClick={onSelectRetiro} className={styles.btnPrimary}>
            Retirar aquí
          </button>
        )}

        <button onClick={onSelectDelivery} className={styles.btnSecondary}>
          {isDomicilio ? "Elegir despacho" : "Despacho a domicilio"}
        </button>
      </div>
    </div>
  );
};

export default SucursalCard;
