let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", '« Chers consultants et consultantes de la maison IDA, ces deux dernières années ont été marquées par le combat d’un virus diabolique dont on ne doit pas prononcer le nom. Nous avons malgré tout accueilli de nombreux apprentis consultants au sein de notre école en adaptant et enrichissant notre parcours d’intégration, venez donc le découvrir ! »    ', [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTYzOWE3MTAtNDEyYy00ZDg2LTkzYTgtMGFjZmViZWNlYzk4%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%226e68d253-2a12-4391-9d62-e880fb735ce8%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})