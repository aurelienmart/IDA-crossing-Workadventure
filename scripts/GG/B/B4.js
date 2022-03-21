let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Tech For Students est un webinaire à l'intention des étudiants pour leur presenter les different sujets tech et missions portés par Wavestone. Les sujets sont présentés mensuellement et à tour de role par les practices IDA, DET et DIS. Venez découvrir et discuter des sujets couverts et à venir"
    , [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODJkN2U1MjEtYmVlZC00MzhmLTlhNDYtMDc0ZTdhOTIzYTNm%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2273b36313-4d50-4fcb-ae2a-121ef237e1bb%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})