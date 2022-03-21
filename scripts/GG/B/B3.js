let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "IDA for Good est l'antenne relai IDA de la stratégie RSE de notre cabinet. L'objectif est double : assurer la sensibilisation des collaborateurs IDA aux sujets RSE porté par Wavestone et adapter la stratégie RSE aux problématiques et spécificités de notre practice. Les thématiques RSE portées aujourd'hui par IDA for Good sont le mécénat de compétences, la parité femmes/hommes, ainsi que la responsabilité environnementale."
    , [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDY0NWVhYjktNmJkNi00NzhmLTlkODAtYmMwNzg4NjY0NzBj%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22a891dad7-a4d7-4867-b3ca-f2434946e6f5%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})