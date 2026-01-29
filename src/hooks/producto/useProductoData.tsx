import { useEffect, useState } from "react";


export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    categoria: string;
    descripcion: string;
    destacado?: boolean;
}

export const useProductoData = () => {
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        // Simulación de datos (después puede venir de API)
        setProductos([
            {
                id: 1,
                nombre: "Cerveza Artesanal",
                precio: 2500,
                imagen: "/img/productos/Cerveza-artezanal.jpg",
                categoria: "Bebidas",
                descripcion: "Cerveza artesanal rubia",
            },
            {
                id: 2,
                nombre: "Vino Tinto",
                precio: 4500,
                imagen: "/img/productos/vino-tinto.jpg",
                categoria: "Vinos",
                descripcion: "Vino reserva",
            },
            {
            
                id: 3,
                nombre: "Vino Tinto 120 merlot",
                precio: 4500,
                imagen: "/img/productos/vino-tinto120.jpg",
                categoria: "Vinos",
                descripcion: "Vino reserva",
            },
            {
                id: 4,
                nombre: "Whisky Escocés",
                precio: 15000,
                imagen: "/img/productos/whisky-escoces.jpg",
                categoria: "Licores",
                descripcion: "Whisky de malta",
                destacado: true,
            },
            {
                id: 5,
                nombre: "Gaseosa Cola",
                precio: 1200,
                imagen: "/img/productos/gaseosa-cola.jpg",
                categoria: "Bebidas",
                descripcion: "Gaseosa sabor cola",
            },
            {
                id: 6,
                nombre: "Tequila Silver",
                precio: 18000,
                imagen: "/img/productos/tequila-plata.jpg",
                categoria: "Licores",
                descripcion: "Tequila 100% agave",
            },
            {
                id: 7,
                nombre: "Cerveza Negra",
                precio: 2700,
                imagen: "/img/productos/cerveza-negra.jpg",
                categoria: "Bebidas",
                descripcion: "Cerveza artesanal negra",
            },
            {
                id: 8,
                nombre: "Vino Blanco",
                precio: 4000,
                imagen: "/img/productos/vino-blanco.jpg",
                categoria: "Vinos",
                descripcion: "Vino blanco seco",
            }
            // agrega más productos aquí
    ]);
  }, []);

  return {
    productos,
  };
};
