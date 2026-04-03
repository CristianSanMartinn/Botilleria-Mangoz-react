import { useState } from "react";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  categoria: string;
  disponible: boolean;
}

export const useProductoData = () => {

  const [categoriaActiva, setCategoriaActiva] = useState<string>("Todo");

  const productosMock: Producto[] = [
    {
      id: 1,
      nombre: "Cerveza Artesanal",
      precio: 2000,
      imagen: "/img/productos/Cerveza-artezanal.jpg",
      descripcion: "Cerveza 100% artesanal",
      categoria: "Cervezas",
      disponible: true,
    },
    {
      id: 2,
      nombre: "Cerveza Negra",
      precio: 4500,
      imagen: "/img/productos/cerveza-negra.jpg",
      descripcion: "Cerveza artesanal hecha en el sur de Chile",
      categoria: "Cervezas",
      disponible: true,
    },
    {
      id: 3,
      nombre: "Cerveza Corona",
      precio: 4500,
      imagen: "/img/productos/corona.png",
      descripcion: "Una de las cervezas preferidas de nuestros clientes",
      categoria: "Cervezas",
      disponible: true,
    },
    {
      id: 4,
      nombre: "Gaseosa Cola",
      precio: 9000,
      imagen: "/img/productos/gaseosa-cola.jpg",
      descripcion: "Refresca tu día con nuestra bebida",
      categoria: "Bebidas",
      disponible: true,
    },
    {
      id: 5,
      nombre: "Tequila Plata",
      precio: 9000,
      imagen: "/img/productos/tequila-plata.jpg",
      descripcion: "Tequila muy rico",
      categoria: "Tequila",
      disponible: false,
    },
    {
      id: 6,
      nombre: "Vino Blanco",
      precio: 9000,
      imagen: "/img/productos/vino-blanco.jpg",
      descripcion: "Vino blanco especial",
      categoria: "Vinos",
      disponible: true,
    },
    {
      id: 7,
      nombre: "Whisky Escoces",
      precio: 9000,
      imagen: "/img/productos/whisky-escoces.jpg",
      descripcion: "Whisky con sabor a miel",
      categoria: "Whisky",
      disponible: true,
    },
  ];

  const productosFiltrados =
    categoriaActiva === "Todo"
      ? productosMock
      : productosMock.filter(
          (producto) => producto.categoria === categoriaActiva
        );

  return {
    productos: productosFiltrados,
    categoriaActiva,
    setCategoriaActiva,
  };
};