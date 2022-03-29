let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Anton SPITZER : 'Chaque mois, une à deux rencontres avec des acteurs dynamiques du Cloud sont organisées à distance pour te faire découvrir les dernières technologies et nouvelles offres sur le marché du Cloud. Avec ces évènements, il te sera plus facile de te construire des convictions sur les offres cloud ! ' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_MGUxMTAzM2MtYjRkNi00NThkLTgzNzUtYmExYzg1OTMyYjBh%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22fbe320f7-5761-406d-916c-6ec7c5fd174c%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})