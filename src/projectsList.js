export const projectsList = [
    {
        id:1,
        name: 'Famox SA - Ecommerce',
        code: 'react',
        tech:{
            responsive: true,
            auth: false,
            db: true,
            ls: true,
            api: true,
            redux: false,
            mongoDB: true,
            customHook: true,
            aws: true,
            mern: true
        },
        date: 'July 2022',
        repo:'https://github.com/TomasCapizzi/Famox',
        img: './img/responsive/famox.png',
        portada: './img/portada/famox.png',
        gif: '../gif/famoxPrueba2.gif',
        route: 'https://www.famox.com.ar/',
        descripcion: 'Ecommerce diseñado para la empresa Famox SA, con base de datos en Mongo y una api rest para el back; y para el front una app en React.',
        description: 'Ecommerce designed for a small businnes, Famox SA. It has a mongoDB database and a rest api for the backend, and for frontend an app in React.'
    
    },{
        id:2,
        name: 'Medical Records',
        code: 'react-fb',
        tech:{
            responsive: true,
            auth: true,
            sass: true,
            db: true,
            ls: false,
            api: false,
            customHook: true
        },
        date: 'December 2021',
        repo:'https://github.com/TomasCapizzi/historia-clinica',
        img: './img/responsive/medrecords.png',
        portada: './img/portada/medrecords.png',
        gif:'../gif/records.gif',
        route: 'https://historia-clinica.vercel.app/',
        descripcion: 'Esta app esta hecha para mantener un registro de historias clínicas. Esta pensada para el uso de doctores. Se pueden registrar mediante Google, gracias a Firebase Auth. Los datos se guardan en Firestore. Esta desarrollada con React, Sass y Firebase. Además se utilizó react-icons, react-router-dom.',
        description: 'This application was made to keep a register of medical records. It´s purpose is for doctors use only. They can login with Google, thanks to firebase auth. Data is stored in firestore. It´s developed with React, Sass and Firebase. I also used react-icons and react-router-dom.'
    },{
        id:3,
        name: 'Craft-Beer',
        code: 'react-fb',
        tech:{
            responsive: true,
            auth: false,
            sass: true,
            db: true,
            ls: false,
            api: false,
            customHook: false
        },
        date: 'August 2021',
        repo:'https://github.com/TomasCapizzi/ecommerce',
        img: './img/responsive/craftbeer.png',
        portada: './img/portada/craftbeer.png',
        gif: '../gif/Ecommerce.gif',
        route: 'https://craft-beer-ecommerce.netlify.app/',
        descripcion: 'Este proyecto fue hecho durante el curso de Reacts Js en Coderhouse. Es un ecommerce donde una serie de productos se traen desde una base de datos de Firebase y las ordenes de compra y data del usuario son creadas en una nueva colección en Firebase. Las tecnologías utilizadas para realizar esto fueron: HTML - SASS - JS - REACT - FIREBASE ',
        description: 'This project was done in the React JS course at CoderHouse. It is an ecommerce where a series of products are brought from a firebase database and the purchase order and user data are created in a new collection. The technologies used for this project were: HTML - SASS - JS - REACT - FIREBASE'
    },{
        id:4,
        name: 'Recipe App',
        code: 'react',
        tech:{
            responsive: true,
            auth: false,
            sass: true,
            db: false,
            ls: true,
            api: true,
            customHook: false
        },
        date: 'September 2021',
        repo:'https://github.com/TomasCapizzi/recipe-app',
        img: './img/responsive/recipes.png',
        portada: './img/portada/recipes.png',
        gif: '../gif/recipe-app2.gif',
        route: 'https://recipe-app-000.netlify.app/',
        descripcion: 'Este proyecto fue llevado a cabo mediante el uso de la API TheMealDB, la cual brinca una cierta cantidad de recetas y permite llevar a cabo varias acciones. En este caso hice una recetario donde podes guardar tus comidas favoritas usando LocalStorage, se puede filtrar por categorias y tambien realizar búsquedas. Las tecnologías utilizadas para realizar esto fueron:HTML - SASS - JS - REACT',
        description: 'This project was carried out through the use of the TheMeal DB API, which has different food recipes and allows various actions to be carried out. In this case I made a recipe book where you can store your favorite recipes by using LocalStorage, you can also filter by categories and perform a search. The technologies used for this project were: HTML - SASS - JS - REACT'
    },{
        id:5,
        name: 'Chat app',
        code: 'react-fb',
        tech:{
            responsive: true,
            auth: true,
            sass: true,
            db: true,
            ls: false,
            api: false,
            customHook: false
        },
        date: 'January 2022',
        repo:'https://github.com/TomasCapizzi/auth-chat-app',
        img: '../img/responsive/chat-auth.png',
        portada: '../img/portada/chat.png',
        gif: './gif/chat.gif',
        route: 'https://chat-app-auth.netlify.app/',
        descripcion: 'Esta app es un chat en tiempo real. Fue hecha para aprender los sistemas de autentificación de Firebase y al mismo tiempo para practicar con firebase database. Use React JS y Sass para los estilos.',
        description: 'This app is a real time chat application.It was done to learn firebase authentication services and to keep practising with firebase database. Ive used React JS and Sass for styling'
    },{
        id:6,
        name: 'Trivia App',
        code: 'react-fb',
        tech:{
            responsive: true,
            auth: false,
            sass: true,
            db: true,
            ls: false,
            api: true,
            customHook: true
        },
        date: 'October 2021',
        repo:'https://github.com/TomasCapizzi/Trivia',
        img: './img/responsive/quiz.png',
        portada: '../img/portada/trivia.png',
        gif: '../gif/trivia.gif',
        route: 'https://trivia-app-project.netlify.app/',
        descripcion: 'Use la api Open-Trivia y cree esta app donde podes jugar diferentes quizes como de deportes, historia, cine, música, etc. Tiene diferentes modalidades como facil, medium y hard; y se puede elegir hasta 20 preguntas. También utilize Firebase para crear una base de datos para poder crear usuarios con sus respectivas contraseñas. Tambien almacenará todos los puntajes de cada usuario respectivamente. Las tecnologías utilizadas para realizar esto fueron:HTML - SASS - JS - REACT.',
        description: 'Ive used the Open-Trivia DB and created this app where you can play different quizzes like Sports, Music, Film, History, etc. It has different modes, like easy, medium and hard, and you can choose up to 20 questions. I also used firebase to create a database so we can create users with their respective passwords. It will store all the scores from every user. The technologies used for this project were: HTML - SASS - JS - REACT'
    },{
        id:7,
        name: 'World Timezones App (Coderio Challenge)',
        code: 'react',
        tech:{
            responsive: true,
            auth: false,
            sass: true,
            db: false,
            ls: false,
            api: true,
            customHook: true
        },
        date: 'December 2021',
        repo:'https://github.com/TomasCapizzi/timezones',
        img: './img/responsive/timezone.png',
        portada: '../img/portada/time.png',
        gif: '../gif/timezones.gif',
        route: 'https://worldtimezones.netlify.app/',
        descripcion: 'Para este proyecto me base en el challenge de Coderio, el cual pedía utilizar la API de Worldtimezones y poder elegir horarios de cualquier parte. Las tecnologías utilizadas para realizar esto fueron:HTML - SASS - JS - REACT',
        description: 'For this project i based on Coderio´s challenge, which consists on using Worldtimezones API y choose between different regions and timezones from anywhere . The technologies used for this project were: HTML - SASS - JS - REACT'
    
    },{
        id:8,
        name: 'Task Manager',
        code: 'react',
        tech:{
            responsive: true,
            auth: false,
            bulma: true,
            db: false,
            ls: false,
            api: false,
            redux: true,
            mern: true,
            mongoDB: true,
        },
        date: 'February 2022',
        repo:'https://github.com/TomasCapizzi/task-manager',
        img: './img/responsive/tasksmanager.png',
        portada: '../img/portada/tasksmanager.png',
        gif: '../gif/taskmanager.gif',
        route: 'https://task-manager-brown.vercel.app/',
        descripcion: 'Task Manager es una aplicación de manejo de tareas.Este proyecto lo hice para aprender a utilizar Redux y Bulma. Las tecnologías utilizadas para realizar esto fueron:REACT-REDUX-BULMA',
        description: 'Task Manager is an app where you can handle yous tasks. I developed it to learn Redux and Bulma. The technologies used for this project were: REACT-REDUX-BULMA'
    
    },{
        id:9,
        name: 'Pokedex',
        code: 'js',
        tech:{
            responsive: true,
            auth: false,
            sass: false,
            db: false,
            ls: false,
            api: true,
            customHook: false
        },
        date: 'June 2021',
        repo:'https://github.com/TomasCapizzi/pokedex',
        img: './img/responsive/poke.png',
        portada: '../img/portada/poke.png',
        gif: '../gif/pokedex.gif',
        route: 'https://tomascapizzi.github.io/pokedex/',
        descripcion: 'Este Pokedex esta hecho con la PokeApi. Podemos obtener cada pókemon, ir del id mas bajo al mas alto o viceversa, ver las características a través de un modal y tambien esta paginado. fue realizado con HTML - CSS - JS',
        description: 'This Pokedex was made with the PokeApi API. We can obtain each Pokemon character, go from lowest to highest, see the characteristics of each one through a modal; and it is also paged in order to see a specific amount of pokemons per page. It was made with HTML - CSS - JS'
    },{
        id:10,
        name: 'Memotest',
        code: 'js',
        tech:{
            responsive: true,
            auth: false,
            sass: false,
            db: false,
            ls: false,
            api: false,
            customHook: false
        },
        date: 'May 2021',
        repo:'https://github.com/TomasCapizzi/memotest',
        img: './img/responsive/memotest.png',
        portada: '../img/portada/memo.png',
        gif:'../gif/memotest.gif',
        route: 'https://tomascapizzi.github.io/memotest/',
        descripcion:'Una réplica del conocido juego Memotest, el propósito del juego es encontrar el par en la menor cantidad de intentos posibles. Posee 3 tipos de dificultades. Esta hecho con HTML - CSS - JS VANILLA',
        description: 'A replica of the well-known Memotest game, the purpose of the game is to find the color pair with the fewest possible moves. It has 3 types of difficulties. The project was made with: HTML - CSS - JS VANILLA'       
    },{
        id:11,
        name: 'Memory Game',
        img: './img/responsive/memory.png',
        portada: '../img/portada/memory.png',
        gif: '../gif/memorygame.gif',
        code: 'js',
        tech:{
            responsive: true,
            auth: false,
            sass: false,
            db: false,
            ls: false,
            api: false,
            customHook: false
        },
        date: 'June 2021',
        repo:'https://github.com/TomasCapizzi/memory-game',
        route: 'https://tomascapizzi.github.io/memory-game/',
        descripcion: 'El juego de la memoria consiste en acordarse la ubicación de diferentes pares de imágenes y poder encontrarlas correctamente. Esta hecho con Js Vanilla.',
        description: 'The memory game consists of remembering the location of different pairs of images and locating them correctly. It was made with JS vanilla'
    },
]