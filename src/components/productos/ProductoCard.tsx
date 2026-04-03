import type { Producto } from "../../hooks/producto/useProductoDate";
import styles from "./Productos.module.css";

interface Props {
  producto: Producto;
}

const ProductoCard = ({ producto }: Props) => {
  return (
    <div className={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} />

      <h3>{producto.nombre}</h3>

      <span className={styles.categoria}>
        {producto.categoria}
      </span>

      <p>{producto.descripcion}</p>

      <p
        className={
          producto.disponible
            ? styles.disponible
            : styles.noDisponible
        }
      >
        {producto.disponible ? "Disponible" : "No disponible"}
      </p>
    </div>
  );
};

export default ProductoCard;