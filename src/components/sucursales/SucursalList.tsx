// components/sucursal/SucursalList.tsx
import styles from "./SucursalCard.module.css";
import { useSucursalDate } from "../../hooks/sucursal/useSucursalDate";
import SucursalCard from "./SucursalCard";

export const SucursalList = () => {
  // CORRECCIÓN: el código original mezclaba useSucursalData y useSucursalDate
  const { sucursales } = useSucursalDate();

  const seleccionarSucursal = (id: number, tipo: "retiro" | "domicilio") => {
    console.log("Sucursal:", id, "Tipo:", tipo);
    // TODO: conectar con Context / carrito
  };

  return (
    <section className={styles.section} id="ubicaciones">
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Encuéntranos</span>
        <h2 className={styles.titulo}>Nuestras Sucursales</h2>
        <div className={styles.titleRule} />
        <p className={styles.subtitulo}>
          Retiro en tienda o despacho a domicilio en toda Melipilla
        </p>
      </div>

      <div className={styles.grid}>
        {/* CORRECCIÓN: el original iteraba con (Sucursal) mayúscula
            pero luego usaba (sucursal) minúscula — causaba ReferenceError */}
        {sucursales.map((sucursal) => (
          <SucursalCard
            key={sucursal.id}
            sucursal={sucursal}
            onSelectRetiro={() => seleccionarSucursal(sucursal.id, "retiro")}
            onSelectDelivery={() => seleccionarSucursal(sucursal.id, "domicilio")}
          />
        ))}
      </div>
    </section>
  );
};