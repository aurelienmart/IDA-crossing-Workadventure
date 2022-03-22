let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", " Le pôle biz IDA c'est l'équipe qui gère le pilotage commercial de la practice : on suit tous les indicateurs clés tels que le pipe (le volume d'opportunités clients), la prise de commande, le nombre de pitchs, etc. On se coordonne avec les cercles mais aussi les relais de compte pour identifier les ventes clés et les plans d'actions à mener.    ", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTI0Y2JlNTMtMDQ0Ni00YjVmLTkxNzktNzAxNmY1MTUzMGZj%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22ccd19f39-5ed0-44c0-9dc5-40a4de618bfc%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})