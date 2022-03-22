let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Baptiste PUGNAIRE : 'L'initiative communication externe vise à promouvoir une communication décompléxée des consultants en leur donnant les clés pour réussir l'écriture de leurs articles. L'objectif étant d'améliorer la présence de Wavestone sur les réseaux et ainsi servir d'accélérateur pour le business et le recrutement.' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDkzOTFiNGMtYzAyYi00NmZjLTg5MTktZjZjYmUxY2I5MmFl%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2235720a93-69d4-4ac0-9620-39cc005d04b8%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})