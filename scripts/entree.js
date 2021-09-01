
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
WA.onEnterZone('tuto',()=>{WA.disablePlayerControls();WA.openPopup('Pasc','Bonjour et bienvenue sur Workadventure !',[{label:'Où suis-je ?',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('Pasc','Tu es dans une simulation des bureaux de Wavestone de Paris',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('Pasc','Tu peux discuter avec tes collègues grace à ton micro et ta caméra ou à  travers du chat !',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('Pasc','Accède à waveplace depuis les ordinateurs du 17ème étage ou bien rejoins tes amis à la machine à café !',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('Pasc','Workadventure est encore en chantier, certains étages ne sont pas encore finis mais l’équipe IDA Crossing y travaille d’arrache-pied !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.restorePlayerControls()}}])}},])}},])}},])}},{label:' Je connais !',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('Pasc','Je te laisse alors, à bientôt !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.restorePlayerControls()}}])}},]);})