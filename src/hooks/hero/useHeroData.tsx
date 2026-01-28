import { useEffect, useState } from "react";

export function useHeroData() {
  const slides = [
    { icon: "🔥", text: "DESCUENTO 20% en Vinos Seleccionados" },
    { icon: "⚡", text: "ENVÍO GRATIS en compras sobre $25.000" },
    { icon: "🎁", text: "2x1 en Cervezas todos los Viernes" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: 500, label: "Productos" },
    { number: 3, label: "Sucursales" },
    { number: 5, label: "Calificación ★" },
    { number: 2000, label: "Clientes" },
  ];

  const floatingIcons = ["🍺", "🍷", "🥃", "🍾", "🍸"];

  return { slides, activeIndex, stats, floatingIcons };
}
