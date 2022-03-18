let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", `Gael LACOSTE : "Les IDA Live, c’est le rendez-vous régulier de la practice IDA pour transmettre à l'ensemble à tout le monde les dernières actualités, décisions management et évènements à venir.

Ne loupez pas nos différents formats : Live show, JT, émission d'investigation, Jeux TV… Pour tout savoir des sujets brûlants de la practice !"`, [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_OGJkOWJiOTktNzhiMC00YTFlLWFlNmItZDY3NjYwMTJhNWM2%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2290ab68a1-0b52-40b6-a50f-1d444e6122a5%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})