// components/sucursal/SucursalLists.tsx
import styles from "./SucursalCard.module.css";
import { useSucursalData } from "../../hooks/sucursal/useSucursalDate";
import SucursalCard from "./SucursalCard";

export const SucursalList = () => {
  const { sucursales } = useSucursalData();

  const seleccionarSucursal = (id: number, tipo: "retiro" | "delivery") => {
    console.log("Sucursal:", id, "Tipo:", tipo);
    // acá luego va Context / carrito
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.titulo}>Elige tu sucursal</h2>
      <p className={styles.subtitulo}>
        Selecciona retiro en tienda o despacho a domicilio 🍻
      </p>

      <div className={styles.grid}>
        {sucursales.map((Sucursal) => (
          <SucursalCard
            key={sucursal.id}
            sucursal={sucursal}
            onSelectRetiro={() => seleccionarSucursal(sucursal.id, "retiro")}
            onSelectDelivery={() => seleccionarSucursal(sucursal.id, "delivery")}
          />
        ))}
      </div>
    </section>
  );
};
