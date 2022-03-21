let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", 'MakeIT a pour but de rassembler les différentes communautés tech de Wavestone et ainsi promouvoir le savoir faire technique de nos consultants. Nous communiquons sur de nombreux projets et nous sommes toujours en recherche de nouveaux talents qui souhaite monter en compétences sur des sujets techniques.', [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjIzNGEwYjQtODk3NC00NjNkLWE1MjgtOGUwOWFiNzNlYzQ3%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2213b0d68d-ed74-48f1-9cca-8d51e110ef02%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})