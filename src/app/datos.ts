
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
      foto: "https://super-ficcion.com/wp-content/uploads/2022/08/creador-escudo-capitan-america-1-780x470.webp",
      nombre: "Capitan America",
      descripcion: '',
      detalle: 'El Capitán América, cuyo nombre real es Steven "Steve" Grant Rogers, fue un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, predecesor de Marvel Comics. El Capitán América fue diseñado como un supersoldado patriota que luchaba frecuentemente contra las potencias del Eje en la Segunda Guerra Mundial, y fue el personaje más popular de Timely Comics durante el período de guerra. La popularidad de los superhéroes se desvaneció después de la guerra, y el cómic del Capitán América dejó de editarse en 1950, con un breve resurgimiento en 1953. Desde que Marvel Comics revivió al personaje en 1964, el Capitán América se ha mantenido en publicación.',
      estado: true
   },
   {
      id: 2,
      foto: "https://super-ficcion.com/wp-content/uploads/2022/05/spider-man-60-anos-780x470.webp",
      nombre: "Spider Man",
      descripcion: '',
      detalle: 'Spider-Man, traducido en ocasiones como El Hombre Araña,11​12​ es un personaje creado por los estadounidenses Stan Lee y Steve Ditko,13​14​ e introducido en el cómic Amazing Fantasy n.° 15, publicado por Marvel Comics en agosto de 1962.15​ Se trata de un superhéroe que emplea sus habilidades sobrehumanas, reminiscentes de una araña, para combatir a otros supervillanos que persiguen fines siniestros.',
      estado: false
   },
   {
      id: 3,
      foto: "https://super-ficcion.com/wp-content/uploads/2022/11/M%C2%B4baku-Black-Panther-780x470.webp",
      nombre: "Black Panter",
      descripcion: '',
      detalle: "Black Panther (traducido en algunos países como Pantera Negra) es una película de superhéroes estadounidense de 2018 basada en el personaje de Marvel Comics Pantera Negra. Producida por Marvel Studios en colaboración con Fox Searchlight Pictures (sin ser acreditada para esta película) y distribuida por Walt Disney Studios, es la decimoctava película del Universo cinematográfico de Marvel (UCM). La película es dirigida por Ryan Coogler, que escribió el guion con Joe Robert Cole, y fue protagonizada por Chadwick Boseman como T'Challa / Black Panther, junto con Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker y Andy Serkis. En Black Panther, T'Challa es coronado rey de Wakanda tras la muerte de su padre, pero su soberanía es cuestionada por un adversario que planea abandonar las políticas aislacionistas del país e iniciar una revolución mundial.",
      estado: false
   }
];