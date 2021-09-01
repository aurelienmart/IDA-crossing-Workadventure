WA.onEnterZone('start', () => {
    WA.disablePlayerControls();
    popintro2 = WA.openPopup("target", 'A quel étage veux-tu aller ?', [{
        label: "17eme",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/17.json')
        }
    },
    {
        label: "21eme",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/21.json')
        }
    },
    {
        label: "Au bureau RH",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/RH.json')
        }
    },
    {
        label: "Ressources",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/ressources.json')
        }
    },
    {
        label: "Dehors",
        className: "primary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/entree.json')
        }
    }







]);
});