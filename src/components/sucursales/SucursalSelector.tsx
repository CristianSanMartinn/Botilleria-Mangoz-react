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
    <section className={styles.section}>
      <h2 className={styles.titulo}>¿Dónde quieres recibir tu pedido?</h2>

      <div className={styles.grid}>
        {sucursales.map((sucursal) => {
          const selected =
            sucursalSeleccionada?.id === sucursal.id;

          return (
            <SucursalCard
              key={sucursal.id}
              sucursal={sucursal}
              selected={selected}
              onSelectRetiro={() => {
                setSucursalSeleccionada(sucursal);
                setTipoEntrega("retiro");
              }}
              onSelectDelivery={() => {
                setSucursalSeleccionada(sucursal);
                setTipoEntrega("domicilio");
              }}
            />
          );
        })}

        {/* CARD SOLO DOMICILIO */}
        <SucursalCard
          isDomicilio
          selected={tipoEntrega === "domicilio" && !sucursalSeleccionada}
          sucursal={{
            id: -1,
            nombre: "",
            direccion: "",
            telefono: "",
            horario: "",
          }}
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
