// components/sucursal/SucursalSelector.tsx
import { useState } from "react";
import styles from "./SucursalCard.module.css";
import { useSucursal } from "../../hooks/sucursal/useSucursalDate";
import SucursalCard from "./SucursalCard";

export const SucursalSelector = () => {
  const {
    sucursales,
    setSucursalSeleccionada,
    setTipoEntrega,
    sucursalSeleccionada,
    tipoEntrega,
  } = useSucursal();

  // Estado local para controlar selección visual (puedes usar context si quieres)
  // Aquí usamos el estado de hook para selección y tipo

  return (
    <section className={styles.section}>
      <h2>¿Dónde quieres recibir tu pedido?</h2>

      <div className={styles.grid}>
        {sucursales.map((sucursal) => {
          const isSelected =
            sucursalSeleccionada?.id === sucursal.id && tipoEntrega === "retiro";
          const isSelectedDelivery =
            sucursalSeleccionada?.id === sucursal.id && tipoEntrega === "domicilio";

          return (
            <SucursalCard
              key={sucursal.id}
              sucursal={sucursal}
              selected={isSelected || isSelectedDelivery}
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

        <SucursalCard
          isDomicilio
          selected={!sucursalSeleccionada && tipoEntrega === "domicilio"}
          onSelectDelivery={() => {
            setSucursalSeleccionada(null);
            setTipoEntrega("domicilio");
          }}
          onSelectRetiro={() => {}}
          sucursal={{
            id: -1,
            nombre: "",
            direccion: "",
            telefono: "",
            horario: "",
          }}
        />
      </div>
    </section>
  );
};
