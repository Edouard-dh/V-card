const data = [
    {
        id: 1,
        name: "La taverne du chat borgne",
        text: "La taverne du chat borgne est un site autour du jdr, il est réalisé avec WordPress.",
        url:"https://la-taverne.edouard-dhalluin.fr/",
        image:`${process.env.PUBLIC_URL}/img/taverne.jpg`
    },
    {
        id: 2,
        name: "Gw2 fan site",
        text: "Gw2 fan site est un site réalisé avec Bootstrap.",
        url:"https://gw2-fan-site.edouard-dhalluin.fr/",
        image:`${process.env.PUBLIC_URL}/img/gw2.jpg` 
    },
    {
        id:3,
        name:"The Ho Ho Ho Liste",
        text: "Voici la liste magique qu'utilise le Père Noël, lui permetant de trouver le cadeau idéal pour chaque enfant. Elle est réalisée en React avec des Hook et Redux. ",
        url:"https://the-hohoho-liste.edouard-dhalluin.fr/",
        image:`${process.env.PUBLIC_URL}/img/santadab.jpg` 
    },
    {
        id:4,
        name:"Ça part en live",
        text: "One-page réaliser pour la chaine twitch d'un ami.",
        url:"https://cpl.edouard-dhalluin.fr/",
        image:`${process.env.PUBLIC_URL}/img/cpl.jpg` 
    },
    {
        id:5,
        name:"Corsell",
        text: "Projet fil rouge réaliser durant la formation en trinome avec Alexandre Roy, Jérémy Dejonghe et moi même.",
        url:"https://cor-sell.edouard-dhalluin.fr/",
        image:`${process.env.PUBLIC_URL}/img/corsell.jpg` 
    },
    {
        id:6,
        name:"Dark & Light",
        text: "Petit projet afin de crée un dark thème réutilisable .",
        url:"https://darkandlight.edouard-dhalluin.fr/",
        image:`${process.env.PUBLIC_URL}/img/D&L.PNG` 
    },
    {
        id:6,
        name:"Hooki Doki",
        text: "Ce projet à pour but d'utilsier des hooks afin d'ajouter via un formulaire des données dans une base de données sous strapi et de les afficher sans changement de page.Afin d'utiliser au mieux ce projet il vous sera demander de faire un git clone sur votre pc de ceci https://github.com/Edouard-dh/hookidookiapi.",
        url:"https://hookidoki.edouard-dhalluin.fr/",
        image:`${process.env.PUBLIC_URL}/img/hookidooki.PNG` 
    },
    
];

export default data;