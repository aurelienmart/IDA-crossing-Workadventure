let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "El Ghali BENCHEKROUN : 'Le WaveGame est un challenge à destination des étudiants des écoles du cabinet, sous le format d'un serious game. Le but de ce challenge est de valoriser auprès de la population étudiante les savoir faire Tech de notre cabinet, et de les sensibiliser aux différents enjeux associés au DevOps. Le challenge se déroule en 3 épreuves qualificatives (3* 1 semaine d'épreuve), avec pour les meilleures équipes, la chance de se qualifier pour la grande finale en présentiel !' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjIwYjJiYjktYTQxNC00Y2EzLTg4ODktYjFkZjYwODI5MDNh%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%220a1dda50-de40-4ff2-a416-77807e8f31e5%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})