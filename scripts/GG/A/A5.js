let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", `Nans PREJEAN : "Meet'IDA ce sont des lives qui te permettent de découvrir les personnes et les initiatives d'IDA. 
Que tu sois nouvel arrivant ou un peu plus expérimenté tu trouveras toujours un sujet qui t'intéresse sur un Meet'IDA." \n \n Avancez pour rejoindre la réunion teams`, [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjMxNzFkNTUtNjVkMy00Nzc4LTk1MDgtNjZkOWEyNTMxOTY1%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22733ce17f-0f71-4e99-9fb4-c28e6ef7c0c6%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})