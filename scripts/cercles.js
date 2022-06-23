
WA.room.onEnterZone('start', () => {
    WA.controls.disablePlayerControls();
    res1 = WA.ui.openPopup("popup", "Bienvenue dans le Carré des Cercles, quel cercle souhaites-tu consulter ?", [{
        label: "NEXT GEN IT",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/Cercles/NextGenIT.json')
        }
    },
    {
        label: "M&A",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/Cercles/MnA.json')
        }
    },
    {
        label: "APM",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/Cercles/APM.json')
        }
    },
    {
        label: "DBT",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/Cercles/DBT.json')
        }
    },
    {
        label: "CORE AI",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/Cercles/CoreAI.json')
        }
    },
    {
        label: "repartir",
        className: "secondary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/elevator.json')
            
        }
    }
]);
});