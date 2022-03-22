let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Tusanth THALAYASINGAM 'Bienven'IDA est l'initiative en charge de l'accueil et de l'intégration informelle des nouvelles recrues chez IDA. Notre objectif est simple, mieux intégrer les nouvelles recrues avec une volonté de créer un effet de promotion !' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_M2ZlMDhlZWYtNDZkYy00ZjIxLWJiNGYtMjNmMzdhM2NkZmQ0%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2293e6bf65-3f7c-41dd-919b-e27e825683be%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})