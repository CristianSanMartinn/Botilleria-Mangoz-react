import type { Producto } from "../../hooks/producto/useProductoDate";
import styles from "./Productos.module.css";

interface Props {
  producto: Producto;
}

const ProductoCard = ({ producto }: Props) => {
  return (
    <article className={`${styles.card} ${!producto.disponible ? styles.cardAgotado : ""}`}>

      {/* Imagen */}
      <div className={styles.imgWrap}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className={styles.img}
          loading="lazy"
        />
        {/* Badge de categoría */}
        <span className={styles.catBadge}>{producto.categoria}</span>
        {/* Overlay agotado */}
        {!producto.disponible && (
          <div className={styles.agotadoOverlay}>Agotado</div>
        )}
      </div>

      {/* Contenido */}
      <div className={styles.body}>
        <h3 className={styles.nombre}>{producto.nombre}</h3>
        <p className={styles.descripcion}>{producto.descripcion}</p>

        <div className={styles.footer}>
          <span className={styles.precio}>
            ${producto.precio.toLocaleString("es-CL")}
          </span>

          <button
            className={styles.addBtn}
            disabled={!producto.disponible}
            aria-label={`Agregar ${producto.nombre} al carrito`}
          >
            {producto.disponible ? "Agregar" : "Sin stock"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductoCard;