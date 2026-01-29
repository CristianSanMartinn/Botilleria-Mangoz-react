import styles from "./Catalogo.module.css";
import { useProductoData } from "../../hooks/producto/useProductoData";
import { ProductoCard } from "../productoCard/ProductoCard";

const Catalogo = () => {
  const { productos } = useProductoData();

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2 className={styles.titulo}>Catálogo Mangoz</h2>

        <p className={styles.subtitulo}>
          Explora nuestra variedad de bebidas, licores y cervezas disponibles
          en nuestras botillerías de Melipilla 🍷🍺
        </p>

        {/* Separador */}
        <div className={styles.separador}>
          <span className={styles.linea}>
            <span className={styles.circulo}></span>
          </span>
        </div>

        {/* Categorías */}
        <div className={styles.categorias}>
          {[
            "Bebidas",
            "Vinos",
            "Licores",
            "Cervezas",
            "Whisky",
            "Ron",
            "Tequila",
            "Ofertas",
          ].map((categoria) => (
            <button key={categoria} className={styles.btn}>
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
