let popintro=null
let popup=null
WA.room.onEnterZone('start', () => {
    popintro = WA.ui.openPopup("target", 'Bienvenue dans la salle M&A \n Que veux-tu savoir ?', [{
        label: "Types d'opération",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/17.json')
        }
    },
    {
        label: "Sujets",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/RH2.json')
        }
    },
    {
        label: "Phases",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/formation.json')
        }
    },
    {
        label: "Structure",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/cercles.json')
        }
    },
]);
});

WA.room.onLeaveZone('start',() =>{
    popintro.close();
    });