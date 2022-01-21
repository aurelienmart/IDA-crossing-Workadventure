
WA.room.onEnterZone('start', () => {
    WA.controls.disablePlayerControls();
    popintro2 = WA.ui.openPopup("target", 'A quel étage veux-tu aller ?', [{
        label: "16eme",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/17.json')
        }
    },
    {
        label: "Au bureau RH",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/RH2.json')
        }
    },
    {
        label: "Parcours NA",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/formation.json')
        }
    },
    {
        label: "Cercles",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/cercles.json')
        }
    },
    {
        label: "Dehors",
        className: "secondary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/entree.json')
        }
    }







]);
});