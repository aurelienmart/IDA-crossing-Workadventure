let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Julie CRISTOFOL : 'Libérer l'EA, c'est s'autoriser à améliorer le mode de fonctionnement de l'Entretien Annuel en repensant le déroulé de l'exercice, la construction du parcours du consultant entre le CDM et le CDMee et les types de trajectoires que l'on propose aujourd'hui. Tu aimes sortir du cadre ? Alors viens libérer l'EA avec nous ! '\n \n Avancez pour rejoindre la réunion teams    ", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzQxNjk3NTEtN2MyZS00YjllLWI4YTUtODRkYWY3MmI4MWJk%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2211916595-da3e-424d-ba96-1eede3078932%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})