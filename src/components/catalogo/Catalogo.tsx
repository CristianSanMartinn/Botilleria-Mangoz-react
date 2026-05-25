import styles from "./Catalogo.module.css";
import { useProductoData } from "../../hooks/producto/useProductoDate";
import ProductoCard from "../productos/ProductoCard";
import { FaShoppingCart } from "react-icons/fa";

const CATEGORIAS = [
  "Todo",
  "Bebidas",
  "Vinos",
  "Licores",
  "Cervezas",
  "Whisky",
  "Ron",
  "Tequila",
  "Ofertas",
];

const Catalogo = () => {
  const { productos, categoriaActiva, setCategoriaActiva } = useProductoData();

  return (
    <section className={styles.section} id="productos">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Lo que tenemos para ti</span>
        <h2 className={styles.titulo}>Catálogo Mangoz</h2>
        <div className={styles.titleRule} />
        <p className={styles.subtitulo}>
          Bebidas, licores y cervezas disponibles en nuestras botillerías de Melipilla
        </p>

        {/* Filtros */}
        <div className={styles.categorias} role="group" aria-label="Filtrar por categoría">
          {CATEGORIAS.map((categoria) => (
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

      {/* Contador */}
      <div className={styles.resultBar}>
        <span className={styles.resultCount}>
          {productos.length} {productos.length === 1 ? "producto" : "productos"}
        </span>
        {categoriaActiva !== "Todo" && (
          <span className={styles.activeFilter}>en {categoriaActiva}</span>
        )}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={styles.vacio}>
            <FaShoppingCart className={styles.iconoVacio} aria-hidden="true" />
            <p>Sin productos en esta categoría</p>
            <button
              className={styles.resetBtn}
              onClick={() => setCategoriaActiva("Todo")}
            >
              Ver todos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalogo;