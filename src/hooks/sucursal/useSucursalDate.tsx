// hooks/sucursal/useSucursalDate.tsx
import { useState } from "react";

export type TipoEntrega = "retiro" | "domicilio";

export interface Sucursal {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  horario: string;
}

const SUCURSALES: Sucursal[] = [
  {
    id: 1,
    nombre: "Botillería Mangoz Centro",
    direccion: "Av. Vicuña Mackenna 123, Melipilla",
    telefono: "+56 9 1234 5678",
    horario: "Lun a Dom 10:00 – 23:00",
  },
  {
    id: 2,
    nombre: "Botillería Mangoz Norte",
    direccion: "Camino a Pomaire 456, Melipilla",
    telefono: "+56 9 8765 4321",
    horario: "Lun a Dom 11:00 – 22:00",
  },
];

export function useSucursal() {
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
