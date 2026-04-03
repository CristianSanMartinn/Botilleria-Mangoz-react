import { useState } from "react";

/** Tipos de entrega disponibles */
export type TipoEntrega = "retiro" | "domicilio";

/** Modelo de sucursal */
export interface Sucursal {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  horario: string;
}

/** Sucursales fijas (landing page) */
const SUCURSALES: Sucursal[] = [
  {
    id: 1,
    nombre: "Botillería Mangoz Centro",
    direccion: "Av. Vicuña Mackenna 123, Melipilla",
    telefono: "+56912345678",
    horario: "Lun a Dom · 10:00 – 23:00",
  },
  {
    id: 2,
    nombre: "Botillería Mangoz Norte",
    direccion: "Camino a Pomaire 456, Melipilla",
    telefono: "+56987654321",
    horario: "Lun a Dom · 11:00 – 22:00",
  },
];

/** Hooks principal */
export function useSucursalDate() {
  const [sucursalSeleccionada, setSucursalSeleccionada] =
    useState<Sucursal | null>(null);

  const [tipoEntrega, setTipoEntrega] =
    useState<TipoEntrega | null>(null);

  return {
    sucursales: SUCURSALES,

    sucursalSeleccionada,
    tipoEntrega,

    setSucursalSeleccionada,
    setTipoEntrega,
  };
}
