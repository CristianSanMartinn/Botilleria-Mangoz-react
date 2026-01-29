import React, { useState } from "react";
import styles from "./ProductoCard.module.css";
import { useCart } from "../../context/CartContext"; // Correcto: usando el CartContext

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

interface Props {
  producto: Producto;
}

export const ProductoCard = ({ producto }: Props) => {
  const { addToCart } = useCart(); // Correcto: accediendo a addToCart desde el contexto
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => setCantidad((c) => c + 1);
  const disminuir = () => setCantidad((c) => Math.max(1, c - 1));

  const agregarAlCarrito = () => {
    addToCart(
      {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
      },
      cantidad
    );
    setCantidad(1); // Restablecemos la cantidad a 1 después de agregar
  };

  return (
    <div className={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />

      <h3 className={styles.nombre}>{producto.nombre}</h3>
      <p className={styles.descripcion}>{producto.descripcion}</p>
      <p className={styles.precio}>${producto.precio.toLocaleString("es-CL")}</p>

      <div className={styles.card_footer}>
        <div className={styles.cantidad}>
          <button onClick={disminuir} className={styles.cantidad_btn}>-</button>
          <span className={styles.cantidad_num}>{cantidad}</span>
          <button onClick={aumentar} className={styles.cantidad_btn}>+</button>
        </div>

        <button onClick={agregarAlCarrito} className={styles.card_btn}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;
