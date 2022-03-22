let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "'Louis JAOUEN : 'AXA REACTIVATED, une simple migration vers le Cloud ? Venez découvrir les aventures de nos consultants IDA qui ont su déjouer les infâmes plans du Covid-19 pour mettre à mal cette mission.' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_OGRmODdmMDAtMjhjMi00YTA1LThhZjMtMzg2MzQ5OWJjOGZj%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%22e07fb882-bff2-4930-9f94-56fd57445983%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})