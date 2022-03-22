let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "COWS, c'est la communauté des stagiaires, par les stagiaires, pour les stagiaires chez IDA - afin de faciliter leur intégration et d'organiser plein d'évents cool pour leur faire connaître leurs camarades, IDA et Wavestone !", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWMxM2VhOTEtZjEyYy00YzQyLTg3MTMtN2ZmYzRkYTUxNjU5%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22ab98db54-1e13-4a9a-8714-3bdc2714a6f0%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})