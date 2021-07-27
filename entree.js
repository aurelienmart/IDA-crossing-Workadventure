
WA.onEnterZone('start', () => {
    popintro1 = WA.openPopup("start 1", 'Bienvenue sur Workaventure,pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('start',() =>{
	popintro1.close();
});

WA.onEnterZone('entretour', () => {
    pasc1 = WA.openPopup("Pasc", 'C"est une heure pour arriver au bureau ça ?! Allez on se dépêche !!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('entretour',() =>{
	pasc1.close();
});

WA.onEnterZone('miparcours', () => {
    popintro2 = WA.openPopup("start2", 'Si tu es nouveau ici n"hésite pas à aller voir Pascal pour plus d"informations', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('miparcours',() =>{
	popintro2.close();
});


console.log('dehors')
$.getScript('./dialogcreator.js', function(){
 console.log('ici ça marche');
});
