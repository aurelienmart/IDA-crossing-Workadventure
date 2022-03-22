let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Dans le cadre de leur redéfinition de la beauty tech, L'Oréal se munit de plusieurs briques technologiques pour développer une multitude de cas d'usages. L'une des briques majeures de cette stratégie est un assistant selfie augmenté à l'IA, notamment pour assurer une qualité de photos suffisante pour qu'elles servent notamment de base à un suivi dermatologique.", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_Mzc2ODc5MzUtZDRhYS00ODgwLWI5ZDYtOTJmNWNhZGExOTZi%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2265c4633f-452e-4362-b512-b7391f0483f7%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})