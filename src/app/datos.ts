
import { Heroe } from "./Heroe";
import { Proyecto } from "./Proyecto";

export let listaHeroes : Heroe[] = [
    {
       id: 1,
       foto: "https://super-ficcion.com/wp-content/uploads/2022/10/Arma-definitiva-Superman-780x470.webp",
       nombre: "Super Man",
       profesion: "Super Hero in Marvel"
    }

];


export let listaProyectos : Proyecto[] = [
   {
      id: 1,
      foto: "https://www.ina.ac.cr/multimedia/SiteAssets/img/ina.png",
      nombre: "Sistema de Investigación para INA",
      institucion: 'Instituto Nacional de Aprendizaje',
      detalle: 'Sistema para el INA en el lenguaje C# para la gestión de investigaciones.',
      estado: true,
      ano: 2020
   },
   {
      id: 2,
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_del_Banco_Central_de_Costa_Rica.svg/1280px-Logo_del_Banco_Central_de_Costa_Rica.svg.png",
      nombre: "Crédito Nueva Norma",
      institucion: 'Banco Central de Costa Rica y SUGEF',
      detalle: 'Configuración de validiaciones en SQL para nueva Normativa crédito 2024 para el BCCR y SUGEF',
      estado: true,
      ano: 2021
   },
   {
      id: 3,
      foto: "https://www.cruxconsultores.com/images/draco_slider_logo-01.png",
      nombre: "Draco",
      institucion: 'Anónima - Privada',
      detalle: "Fue un sistema desarrollado en el lenguaje de C# para gestionar Actas",
      estado: true,
      ano: 2021
   }
];