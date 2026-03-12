import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation, Trans } from "react-i18next";
import { createPortal } from "react-dom";
import { Section } from "./Section";
export const projectsData = [
    {
    id: 0,
    title: "3D Room ",
    category: "design",
    url: "https://www.cgtrader.com/3d-models/interior/bedroom/gaming-room-low-poly-3ad3b638-457d-4e94-b125-b0828e5f09b8",
    image: "./projects/3d_room.png",
    description: {
      pt: `Sala de jogos em 3D para usar como cenário criado no Blender 3D`,
      en: `Gaming room in 3d to use as a scenario made in Blender 3D`,
      es: `Sala de juegos en 3D para usar como escenario creado en Blender 3D.`,
      fr: `Salle de jeux en 3D à utiliser comme scénario, réalisée dans Blender 3D.`,
    },
    tech:"Blender 3d"
  },
  {
    id: 1,
    title: "Wheather App with API",
    category: "frontend",
    url: "https://nandachaves.github.io/weather-app/",
    image: "./projects/weather-app.png",
    description:{
      pt: `Aplicativo meteorológico em React JS. Aqui, obtemos os dados meteorológicos atuais usando a API do OpenWeatherMap e exibimos informações como temperatura em Celsius, condições meteorológicas, umidade e velocidade do vento de acordo com a cidade neste aplicativo meteorológico.`,
      en: `Weather app in React JS. Here we get the current Weather data using API from OpenWeatherMap and display informations like Temperature in Celsius, Weather condition, Humidity and Wind Speed according to the city in this Weather app.`,
      es: `Aplicación meteorológica en React JS. Aquí obtenemos los datos meteorológicos actuales utilizando la API de OpenWeatherMap y mostramos información como la temperatura en grados Celsius, las condiciones meteorológicas, la humedad y la velocidad del viento según la ciudad en esta aplicación meteorológica.`,
      fr: `Application météo en React JS. Ici, nous obtenons les données météorologiques actuelles à l'aide de l'API d'OpenWeatherMap et affichons des informations telles que la température en degrés Celsius, les conditions météorologiques, l'humidité et la vitesse du vent en fonction de la ville dans cette application météo.`,
    },
    tech:"React, CSS e OpenWeather"
  },
  {
    id: 2,
    title: "Portfolio 1.0",
    category: "frontend",
    url: "https://nandachaves.github.io/Portifolio-EN/",
    image: "./projects/portfolio1.0.png",
    description: {
      pt: `Primeira versão do meu portfolio. O objetivo principal foi criar uma interface responsiva e interativa, destacando minhas competências em design e programação. 
      A plataforma conta com um sistema de filtragem de projetos, gráficos de habilidades interativos e uma arquitetura limpa que prioriza a performance e a experiência do usuário (UI/UX).`,
      en: `First version of my portfolio. The main objective was to create a responsive and interactive interface, highlighting my skills in design and programming.
      The platform features a project filtering system, interactive skill charts, and a clean architecture that prioritizes performance and user experience (UI/UX).`,
      es: `Primera versión de mi portafolio. El objetivo principal era crear una interfaz responsiva e interactiva que resaltara mis habilidades en diseño y programación.
      La plataforma cuenta con un sistema de filtrado de proyectos, tablas de habilidades interactivas y una arquitectura limpia que prioriza el rendimiento y la experiencia de usuario (UI/UX).`,
      fr: `Première version de mon portfolio. L'objectif principal était de créer une interface réactive et interactive, mettant en valeur mes compétences en design et en programmation.
      La plateforme propose un système de filtrage des projets, des graphiques de compétences interactifs et une architecture épurée privilégiant la performance et l'expérience utilisateur (UI/UX).`,
    },
    tech:"HTML, CSS, JS e Ajax"
  },
  {
    id: 3,
    title: "App to do list",
    category: "frontend",
    url: "https://app-to-do-list-b90c4.web.app/",
    image: "./projects/app-to-do-list.png",
    description: {
      pt: `Aplicativo simples de lista de tarefas onde você pode adicionar, editar e excluir tarefas, além de adicionar itens.`,
      en: `Simple app to do list where you can add, edit and delete an task and add items.`,
      es: `Aplicación sencilla para hacer listas donde puedes agregar, editar y eliminar una tarea y agregar elementos.`,
      fr: `Application simple de liste de tâches permettant d'ajouter, de modifier et de supprimer des tâches et d'ajouter des éléments.`,
    },
    tech: "Angular, Bootstrap and Typescript"
  },
    {
    id: 4,
    title: "Advance Lighting & Electrical Distributors",
    category: "fullstack",
    url: "https://advancelighting.pt/",
    image: "./projects/advance.png",
    description:{ 
      pt: `Este projeto consiste em uma plataforma corporativa e catálogo digital informativoda empresa de soluções de iluminação LED e componentes elétricos da Advance. 
      Fui a desenvolvedora responsável por todo o ciclo de vida desta plataforma, desde a concepção de UI/UX até o desenvolvimento Full-stack. O  sistema possui funções de 
      busca de busca, filtragem por marcas (Lumiarq, Maxled, R-Electric, etc.) , produtos vistos recentemente e recomendações.`,
      en: `This project consists of a corporate platform and informative digital catalog for the LED lighting solutions and electrical components company Advance.
      I was the developer responsible for the entire lifecycle of this platform, from UI/UX conception to full-stack development. The system has functions such as:
      search, filtering by brands (Lumiarq, Maxled, R-Electric, etc.), recently viewed products, and recommendations.`,
      es: `Este proyecto consiste en una plataforma corporativa y un catálogo digital informativo para Advance, empresa de soluciones de iluminación LED y componentes eléctricos.
      Fui el desarrollador responsable de todo el ciclo de vida de esta plataforma, desde la concepción de la interfaz de usuario y la experiencia de usuario (UI/UX) hasta el desarrollo completo.
      El sistema incluye funciones como búsqueda, filtrado por marcas (Lumiarq, Maxled, R-Electric, etc.), productos vistos recientemente y recomendaciones.`,
      fr: `Ce projet comprend une plateforme d'entreprise et un catalogue numérique informatif pour Advance, société spécialisée dans les solutions d'éclairage LED et les composants électriques.
      J'étais le développeur responsable de l'intégralité du cycle de vie de cette plateforme, de la conception de l'interface utilisateur (UI/UX) au développement complet. Le système propose les fonctionnalités suivantes :
      recherche, filtrage par marque (Lumiarq, Maxled, R-Electric, etc.), produits récemment consultés et recommandations.`,

    },
    tech: "React js, MYSQL, Node js, PHP and Vercel"
  },
  {
    id: 5,
    title: "Iberolec",
    category: "frontend",
    url: "https://iberolec.com/",
    image: "./projects/iberolec.png",
    description:{ 
      pt: `Site em espanhol de uma empresa de produtos elétricos na Espanha`,
      en: `Spanish website of a company of eletrical products in Spain`,
      es: `Página web en español de una empresa de productos eléctricos en España.`,
      fr: `Site web espagnol d'une entreprise de produits électriques en Espagne`,
    },
    tech: "React js, MYSQL, PHP and Vercel"
  },
  {
    id: 6,
    title: "Basic 3D Living Room",
    category: "design",
    url: "https://www.cgtrader.com/3d-models/interior/living-room/basic-living-room-b00efe23-602e-4918-b364-ecb1248eafae",
    image: "./projects/3d_living-room.png",
    description: {
      pt: `Modelo básico de sala de estar, criado no Blender, contendo objetos como um vaso chinês, uma mesa de madeira, uma cadeira, macarons coloridos e canecas com textura de cerâmica.`,
      en: `Basic living room model, made in Blender, containing objects with Chinese vase, wood table made, chair, colorful macarrons and mugs with ceramic texture`,
      es: `Maqueta básica de sala, realizada en Blender, que contiene objetos con jarrón chino, mesa de madera realizada, silla, macarrones de colores y tazas con textura cerámica.`,
      fr: `Modèle de salon basique, réalisé dans Blender, contenant des objets tels qu'un vase chinois, une table en bois, une chaise, des macarons colorés et des tasses à la texture céramique.`,
    },
    tech: "Blender 3d"
  },
  {
    id: 7,
    title: "AurumXXI",
    category: "fullstack",
    url: "https://aurumxxi.com/pt/home/homepage",
    image: "./projects/aurumxxi.png",
    description:  {
      pt: `Site para cadeirantes criado na LVEngine. Eu implementei o back-office, inseri funções jQuery, testei os formulários e o formato responsivo.`,
      en: `Real wheelchair website made at LVEngine. I implemented it in the back-office, inserted Jquery functions, tested the forms and the responsive format.`,
      es: `Sitio web real para sillas de ruedas creado en LVEngine. Lo implementé en el back-office, inserté funciones de JQuery y probé los formularios y el formato responsivo.`,
      fr: `Site web fonctionnel pour fauteuils roulants, réalisé avec LVEngine. J'ai implémenté le système dans l'interface d'administration, inséré les fonctions jQuery, testé les formulaires et l'affichage adaptatif.`,
    },
    tech: "HTML, CSS, Jquery, AJAX e Back-office"
  },
  {
    id: 8,
    title: "Roteiro dos sabores",
    category: "fullstack",
    url: "https://roteirodesabores.pt/",
    image: "./projects/roteiro.png",
    description:  {
      pt: `Site real de venda de cabazes feito na LVEngine. Fiz a implementação, inseri funções Jquery, testei a responsividade e forneci formação aos clientes.`,
      en: `Real website for selling gift baskets, built with LVEngine. I implemented it, added jQuery functions, tested responsiveness, and provided training to clients.`,
      es: `Sitio web real para la venta de cestas de regalo, creado con LVEngine. Lo implementé, añadí funciones de jQuery, probé la capacidad de respuesta y ofrecí capacitación a los clientes.`,
      fr: `Site web fonctionnel de vente de paniers cadeaux, développé avec LVEngine. J'ai assuré sa mise en œuvre, intégré les fonctions jQuery, testé sa réactivité et formé les clients.`,
    },
     tech: "HTML, CSS, Jquery, AJAX e Back-office"
  },
  {
    id: 9,
    title: "Flavour Dream",
    category: "frontend",
    url: "https://prod-detail.vercel.app/",
    image: "./projects/prodetail.png",
    description: {
      pt: `Confeitaria fictícia criada em Angular com conexão API, onde ao clicar em um item você é redirecionado para a página de detalhes do produto. A logo foi criado por mim no Canva.`,
      en: `A fictional bakery created in Angular with an API connection, where clicking on an item redirects you to the product details page. I created the logo myself using Canva.`,
      es: `Una panadería ficticia creada en Angular con una conexión API. Al hacer clic en un artículo, se redirige a la página de detalles del producto. Creé el logotipo yo mismo con Canva.`,
      fr: `Une boulangerie fictive créée avec Angular et connectée à une API ; cliquer sur un article redirige vers sa fiche produit. J’ai créé le logo moi-même avec Canva.`,
    },
     tech: "Angular 17, SCSS, Typescript, Canva and JSON."
  },
  {
    id: 10,
    title: "Clone Kaiten Lab",
    category: "fullstack",
    url: "https://kaitenlab2-0.infinityfreeapp.com/",
    image: "./projects/kaitenlab.png",
    description:  {
      pt: `Clone do restaurante temático de Madri, "The Kaiten Lab Wonderland", com adaptações. Como um menu interativo onde, ao passar o mouse sobre o nome do prato (hover), o usuário visualiza 
      instantaneamente a imagem, painel de Gerenciamento que permite o controle total (CRUD) de reservas, mesas e funcionários e onde é possível visualizar a porcentagem de ocupação do restaurante 
      para cada dia específico.`,
      en: `A clone of the Madrid-themed restaurant, "The Kaiten Lab Wonderland", with adaptations. Such as an interactive menu where, by hovering the mouse over the name of the dish, the user instantly 
      sees the image, a Management panel that allows total control (CRUD) of reservations, tables and staff, and where it is possible to view the restaurant's occupancy percentage for each specific day.`,
      es: `Un clon del restaurante madrileño "The Kaiten Lab Wonderland", con adaptaciones. Por ejemplo, un menú interactivo donde, al pasar el ratón sobre el nombre del plato, el usuario ve la 
      imagen al instante; un panel de gestión que permite un control total (CRUD) de las reservas, las mesas y el personal; y donde es posible consultar el porcentaje de ocupación del restaurante cada día.`,
      fr: `Un clone du restaurant madrilène "The Kaiten Lab Wonderland", avec quelques adaptations. Par exemple, un menu interactif où, en survolant le nom du plat avec la souris, l'image s'affiche instantanément 
      ; un panneau de gestion permettant un contrôle total (CRUD) des réservations, des tables et du personnel ; et où il est possible de consulter le taux d'occupation du restaurant pour chaque jour.`,
    },
     tech: "PHP, MYSQL, JQuery and JSON."
  },
];
export default function MyProjects() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'pt').split('-')[0];  
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  const rotationRef = useRef(null);

  const [category, setCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
  setSelectedProject(project);
  rotationRef.current?.pause(); // Opcional: pausa o giro para o usuário ler
};

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 769);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Carousel 3D apenas desktop
  useEffect(() => {
    if (isMobile) {
      rotationRef.current?.kill();
      return;
    }

    rotationRef.current = gsap.to(carouselRef.current, {
      rotateY: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    return () => rotationRef.current?.kill();
  }, [isMobile]);

  // Filtro de categorias
  useEffect(() => {
  const cards = cardsRef.current;
  if (!cards.length) return;

  if (category === "all" || isMobile) {
    rotationRef.current?.restart();
    cards.forEach((card) => {
      gsap.set(card, { clearProps: "x,y,z,rotateY,opacity,scale" });
    });
  } else {
    rotationRef.current?.pause();
    gsap.to(carouselRef.current, { rotateY: 0, duration: 0.5 });

    const activeCards = cards.filter((card) => card.dataset.category === category);
    
    // CONFIGURAÇÃO DO GRID
    const cardsPerRow = 3; // Define o limite de 3 cards por linha
    const gapX = 240;      // Espaçamento horizontal
    const gapY = 350;      // Espaçamento vertical

    activeCards.forEach((card, i) => {
      // Calcula em qual coluna (0, 1, 2) e em qual linha o card deve estar
      const col = i % cardsPerRow;
      const row = Math.floor(i / cardsPerRow);

      // Centralização: calcula o offset para que o bloco de cards fique no meio
      const numCols = Math.min(activeCards.length, cardsPerRow);
      const numRows = Math.ceil(activeCards.length / cardsPerRow);
      
      const xPos = (col - (numCols - 1) / 2) * gapX;
      const yPos = (row - (numRows - 1) / 2) * gapY;

      gsap.to(card, {
        duration: 0.8,
        x: xPos,
        y: yPos, // Agora o Y muda conforme a linha
        z: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        ease: "expo.out",
      });
    });

    // Esconde os cards que não pertencem à categoria
    cards.forEach((card) => {
      if (!activeCards.includes(card)) {
        gsap.to(card, { opacity: 0, z: -100, duration: 0.5 });
      }
    });
  }
}, [category, isMobile]);

  
  return (
    <Section>
      <div className="w-full flex flex-col items-center">
      {/* FILTROS */}
      <div className="text-xl md:text-3xl filters block md:flex gap-4 mt-10 text-center md:text-justify">
        <button onClick={() => setCategory("all")}>{t("all")}</button>
        <button onClick={() => setCategory("frontend")}>📱Front-end</button>
        <button onClick={() => setCategory("fullstack")}>⚙️ Full-Stack</button>
        <button onClick={() => setCategory("design")}>💎Design</button>

        <span className="mobile_message text-3xl">My projects</span>
        <span className="mobile_message text-sm">Click to see</span>
      </div>

      {/* SCENE */}
      <div className={`scene w-full ${isMobile ? "carousel-mobile" : ""}`}>
        <div ref={carouselRef}
          className={`carousel ${isMobile ? "carousel-mobile" : ""} ${category !== "all" ? "is-filtered" : ""}`} >
          {projectsData.map((project, index) => (
            <div key={index} onClick={() => openModal(project)}
              ref={(el) => (cardsRef.current[index] = el)}
              data-category={project.category} className="card"
              style={{ "--i": index, "--total-cards": projectsData.length }} >
              <div className="shine"></div>
              <div className="card-inner">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description[currentLang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && createPortal(
  <div 
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    onClick={() => { setSelectedProject(null); rotationRef.current?.resume(); }}>
    <div 
      className="bg-[#1a1a1a] p-8 rounded-2xl max-w-lg w-full m-4 text-white relative border border-white/10"
      onClick={(e) => e.stopPropagation()}>
      <button className="absolute top-4 right-4 text-3xl"
        onClick={() => { setSelectedProject(null); if (category === "all" && !isMobile) { rotationRef.current?.resume();} }} >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
      <img src={selectedProject.image} className="w-full rounded-lg mb-4" alt={selectedProject.title} />
      <p className="text-gray-300 leading-[20px]">
        {selectedProject.description[i18n.language] || selectedProject.description['en']}
      </p>
      
      {selectedProject.url && (
        <>
        <a href={selectedProject.url} target="_blank" className="inline-block mt-4 bg-white text-black px-4 py-2 rounded-lg font-bold">Link</a>
        <span className="inline-block mt-4 text-indigo-600 px-4 py-2 rounded-lg font-bold">Tech: #{selectedProject.tech}</span>
        </>
      )}
    </div>
  </div>
  )}
    </div>
    </Section>
  );
}
