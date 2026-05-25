import styles from "./SucursalCard.module.css";
import { useSucursalDate } from "../../hooks/sucursal/useSucursalDate";
import SucursalCard from "./SucursalCard";

export const SucursalSelector = () => {
  const {
    sucursales,
    setSucursalSeleccionada,
    setTipoEntrega,
    sucursalSeleccionada,
    tipoEntrega,
  } = useSucursalDate();

  return (
    <section className={styles.section} id="ubicaciones">
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Melipilla y alrededores</span>
        <h2 className={styles.titulo}>¿Dónde recibir tu pedido?</h2>
        <div className={styles.titleRule} />
        <p className={styles.subtitulo}>
          Retira en tienda o pide despacho a domicilio en toda la zona
        </p>
      </div>

      <div className={styles.grid}>
        {sucursales.map((sucursal) => (
          <SucursalCard
            key={sucursal.id}
            sucursal={sucursal}
            selected={sucursalSeleccionada?.id === sucursal.id}
            onSelectRetiro={() => {
              setSucursalSeleccionada(sucursal);
              setTipoEntrega("retiro");
            }}
            onSelectDelivery={() => {
              setSucursalSeleccionada(sucursal);
              setTipoEntrega("domicilio");
            }}
          />
        ))}

        {/* Card exclusiva de domicilio */}
        <SucursalCard
          isDomicilio
          selected={tipoEntrega === "domicilio" && !sucursalSeleccionada}
          sucursal={{ id: -1, nombre: "", direccion: "", telefono: "", horario: "" }}
          onSelectRetiro={() => {}}
          onSelectDelivery={() => {
            setSucursalSeleccionada(null);
            setTipoEntrega("domicilio");
          }}
        />
      </div>
    </section>
  );
};