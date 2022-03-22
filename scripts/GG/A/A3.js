let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Yosr ABIDA : 'Le Tower Day est l'occasion idéale pour retrouver toute la practice à la tour : boire un café, assister à des ateliers, apprendre à mieux connaître les initiatives d'IDA, vous aurez de quoi occuper votre DAY !! Ne ratez pas nos prochaines éditions !' \n \n Avancez pour rejoindre la réunion teams  ", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTk3MDhkZWQtODBlYy00ZDZiLTg3OWEtNzY3ZjVhOGRhNDhh%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2243945db5-175e-4a87-a750-44601ef4de04%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})