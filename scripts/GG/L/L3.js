let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "La coordination du Plan de Charge, c'est une équipe de 7 Power Rangers en charge de qualifier toutes les demandes, de les rentrer dans PxxxL et d'animer les plans de charge, bref de faire en sorte que tout roule !! Une Task Force spéciale a même été montée pour staffer nos jeunes !    ", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTgyNWVjNGUtYTI1Mi00MzU1LWE0NDYtM2I5MzYxZGNlY2Q5%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22f9963faa-3663-4b91-9f44-e4be03a309b2%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})