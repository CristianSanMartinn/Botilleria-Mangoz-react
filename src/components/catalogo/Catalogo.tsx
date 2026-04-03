import styles from "./Catalogo.module.css";
import { useProductoData } from "../../hooks/producto/useProductoDate";
import ProductoCard from "../productos/ProductoCard";
import { FaShoppingCart } from "react-icons/fa";

const Catalogo = () => {
  const { productos, categoriaActiva, setCategoriaActiva } = useProductoData();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.titulo}>Catálogo Mangoz</h2>

        <p className={styles.subtitulo}>
          Explora nuestra variedad de bebidas, licores y cervezas disponibles
          en nuestras botillerías de Melipilla 🍷🍺
        </p>

        <div className={styles.separador}>
          <span className={styles.linea}>
            <span className={styles.circulo}></span>
          </span>
        </div>

        <div className={styles.categorias}>
          {[
            "Todo",
            "Bebidas",
            "Vinos",
            "Licores",
            "Cervezas",
            "Whisky",
            "Ron",
            "Tequila",
            "Ofertas",
          ].map((categoria) => (
            <button
              key={categoria}
              className={`${styles.btn} ${
                categoriaActiva === categoria ? styles.activo : ""
              }`}
              onClick={() => setCategoriaActiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={styles.vacio}>
            <p>
              No hay productos disponibles en esta categoría 
              <FaShoppingCart className={styles.iconoVacio} />
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalogo;