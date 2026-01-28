import { useState, useEffect } from "react";

export function useOffersData(){
    const slides = [
        {
            icon:"🍷",
            titulo: "Vinos Selecionados",
            descuento: "20% OFF",
            descripcion: "En todo los vinos premium importados",
            dadge: "¡AHORRA!",
        },
        {
            icon: "🍺",
            titulo: "Cervezas 2x1",
            descuento: "50% OFF",
            descripcion: "Todos los viernes en cervezas nacionales",
            badge: "¡VIERNES!",
        },
        {
            icon: "🥃",
            titulo: "Licores Premium",
            descuento: "15% OFF",
            descripcion: "Whisky, Ron y Vodka seleccionados",
            badge: "¡PREMIUM!",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto cambio que cambia cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) =>
            prev === slides.length - 1? 0 :prev + 1
        );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const changeSlide = (index: number) => setActiveIndex(index);

    return {
        slides,
        activeIndex,
        changeSlide,
    };
}