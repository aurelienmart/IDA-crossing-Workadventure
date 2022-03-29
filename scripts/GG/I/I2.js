let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Mohamed Aimed HAMOUR : 'La roulette de l'interne est l'initiative en charge de faire découvrir aux nouveaux arrivants les rouages des cercles et initiatives internes en les affectant à une activité temporaire chaque semaine au cours des 3 semaines suivant leur intégration. L'objectif est de leur donner envie de contribuer à ces cercles et initiatives de manière durable, afin de favoriser leur épanouissement en interne et le développement de la practice' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzEzMTQ3NTAtNGFhMi00OGQ2LWE3OTktYzgyMTJlMjc0N2Y3%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22e963bd36-46bd-497d-803c-85edc3ccc525%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})