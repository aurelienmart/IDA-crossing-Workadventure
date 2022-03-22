let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Pauline PARISOT : 'Sustainable Tech for IDA c'est une nouvelle équipe au sein de Next Gen IT qui travaille sur la déclinaison de nos savoirs faire architecture & DevOps sur les enjeux d'éco-responsabilité : Eco-conception applicative, Green Datacenter, GreenOps , architecture frugale… Notre but est simple : injecter de plus en plus de considérations eco-responsables dans les missions IDA !' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2ZjZDA4MjMtZWEyZS00NWFjLWFiMmItNzU3YjQ4OGNjMzk4%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22d506e7ab-b8ff-45da-97ef-23da51bbb3ac%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})