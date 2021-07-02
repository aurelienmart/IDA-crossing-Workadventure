WA.onEnterZone('start', () => {
    popintro = WA.openPopup("start1", 'Bienvenue sur Workaventure,pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('start',() =>{
	popintro.close();
});

WA.onEnterZone('escaliers', () => {
    popintro = WA.openPopup("pasc", 'C"est une heure pour arriver au bureau ça ?! Allez on se dépêche !!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('escaliers',() =>{
	popintro.close();
});

WA.onEnterZone('miparcours', () => {
    popintro = WA.openPopup("start2", 'Si tu es nouveau ici n"hésite pas à aller voir Pascal pour plus d"informations', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('miparcours',() =>{
	popintro.close();
});