let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Fanny EZINGEARD: 'WorkAdventure permet de recréer un bureau virtuel à la mode rétrogaming. Chaque collaborateur peut ainsi créer son avatar et se déplacer dans le bâtiment virtuel et interagir avec ses collègues comme il le ferait dans la vie réelle. Les nouveaux arrivants peuvent y trouver des ressources comme le parcours d'intégration, le bureau des RH, et bientôt les cercles.' \n \n Avancez pour rejoindre la réunion teams ", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('intro',() =>{
	popintro1.close();
});

let meeting=null;
WA.room.onEnterZone('teams', () => {
    meeting=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour accéder à la réunion teams",
        callback: () => {
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTljZTg5NzQtYTg4Yy00ZmMxLWE4MGQtYjMwNzc1OWUxOTA5%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22ad5dd5f6-b738-4a53-957c-553260feeb90%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})