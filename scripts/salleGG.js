let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", 'Feel Good Coffee c’est l’un des nombreux channels Teams de practice que nous avons lancé en 2021, un lieu de partage et de communication pour tout IDA. Bon c’est aussi l’endroit où on se lâche un peu, à coups de gifs et mêmes concoctés chaque jour par quelques « rédacteurs » bien connus', [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTYwY2NkMTEtY2MwZS00N2QwLWI2NGMtNzRmMjdkZmQ3YTFl%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%225af2322f-0a4e-4687-ae99-691b16e332a5%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})