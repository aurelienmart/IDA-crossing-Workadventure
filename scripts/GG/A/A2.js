let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Karim ISKANDER : 'Le CDM Meeting c’est avant tout un moment privilégié entre CDM et CDMee pour se partager les dernières news de l’équipe, de la practice et du cabinet. Accueil des nouveaux venus, échanges décomplexés autour d’une bière ou d’un petit apéro, un CDM meeting on sait toujours quand cela commence mais jamais quand cela finit !' \n \n Avancez pour rejoindre la réunion teams   ", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTJhZjA3NWItYmU2ZS00NTY3LWJlOGEtYjZlNWFiNzE4NjQz%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2243945db5-175e-4a87-a750-44601ef4de04%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})