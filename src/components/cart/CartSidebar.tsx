import React from "react";
import { useCart } from "../../context/CartContext"; // Usamos el CartContext
import styles from "./CartSidebar.module.css"; // Estilos para el carrito lateral

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: Props) => {
  const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart(); // Accedemos al carrito desde el contexto

  const aumentar = (id: number, current: number) => updateQuantity(id, current + 1);
  const disminuir = (id: number, current: number) => {
    if (current > 1) updateQuantity(id, current - 1);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <h2>Tu Carrito</h2>
        <button onClick={onClose} className={styles.closeBtn}>✖</button>
      </div>

      <div className={styles.items}>
        {cartItems.length === 0 ? (
          <p className={styles.empty}>Tu carrito está vacío</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.imagen} alt={item.nombre} className={styles.itemImage} />
              <div className={styles.itemInfo}>
                <p>{item.nombre}</p>
                <p className={styles.price}>${item.precio.toLocaleString()}</p>

                <div className={styles.quantity}>
                  <button onClick={() => disminuir(item.id, item.cantidad)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => aumentar(item.id, item.cantidad)}>+</button>
                </div>
              </div>
              <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          ))
        )}
      </div>

      {/* Total y botones de acción */}
      {cartItems.length > 0 && (
        <div className={styles.footer}>
          <p><strong>Total:</strong> ${total.toLocaleString()}</p>
          <button className={styles.clearButton} onClick={clearCart}>Vaciar Carrito</button>
          <button className={styles.checkoutButton}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
