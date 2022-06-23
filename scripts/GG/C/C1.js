let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Sina MOVAGHAR : 'Dans le cadre de notre intervention chez La Poste, nous avons construit un centre de service d'architecture fonctionnelle et applicative qui est passé de 2 ETP en janvier 2021 à 13 ETP fin 2021, le périmètre technologique est particulièrement intéressant : le SI est centré autour d'une architecture événementiel à l'état de l'art centré sur la solution Kafka, avec une ambition de s'ouvrir au cloud public.\n Viens découvrir cette aventure qui nous a permis de devenir un partenaire clé et des référents sur plusieurs programmes majeurs pour La Poste. \n Bonus, quelques hashtags pour gagner le coeur des castors : #Kafka #EDA #Application #Cloud #Platform' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_M2VlYTM0MmYtZjExMC00MjVjLWE2MGUtY2RiMjRmMmFlMGU2%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%222e46ea98-d444-48eb-bcdb-1d819a10caec%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})