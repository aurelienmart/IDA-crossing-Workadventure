let popintro1=null;
WA.room.onEnterZone('start', () => {
    popintro1 = WA.ui.openPopup("start 1", 'Bienvenue sur Workaventure,pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('start',() =>{
	popintro1.close();
});

let pasc1=null
WA.room.onEnterZone('entretour', () => {
    pasc1 = WA.ui.openPopup("Pasc", "Bienvenue à la journée porte ouverte WorkAdventure à l'occasion du Tower Day ! Bonne exploration, nous attendons vos retours !", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('entretour',() =>{
	pasc1.close();
});

let popintro2=null;
WA.room.onEnterZone('miparcours', () => {
    popintro2 = WA.ui.openPopup("start2", "Si tu es nouveau ici n'hésite pas à aller voir Pascal, au pied de la tour pour plus d'informations", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('miparcours',() =>{
	popintro2.close();
});
WA.room.onEnterZone('tuto',()=>{WA.controls.disablePlayerControls();WA.ui.openPopup('Pasc','Bonjour et bienvenue sur Workadventure !',[{label:'Où suis-je ?',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('Pasc','Tu es dans une simulation des bureaux de Wavestone de Paris',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('Pasc','Tu peux discuter avec tes collègues grace à ton micro et ta caméra ou à  travers du chat !',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('Pasc','Accède à waveplace depuis les ordinateurs du 16ème étage ou bien rejoins tes amis à la machine à café !',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('Pasc','Workadventure est encore en chantier, certains étages ne sont pas encore finis mais l’équipe IDA Crossing y travaille d’arrache-pied !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},])}},])}},])}},{label:' Je connais !',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('Pasc','Je te laisse alors, à bientôt !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},]);})