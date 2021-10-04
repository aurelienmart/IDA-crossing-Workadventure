
//lancement réunion teams dans la salle de réunion du haut de la map
WA.onEnterZone("meeting",()=>{
	WA.openTab('https://teams.microsoft.com/l/meetup-join/19:meeting_NjBmY2EwMjQtNDkxZC00NmM4LWE3MWMtMmY4ZDZlNWVkMjk3@thread.v2/0?context=%7B%22Tid%22:%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22,%22Oid%22:%2288d5518e-74f0-4910-8e9c-052164f7d7fd%22%7D')
})

//popup zone de travaux escaliers
let travaux= null;

WA.onEnterZone('myZone', () => {
    travaux = WA.openPopup("popup1", 'Cette zone est en travaux, revenez plus tard', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('myZone',() =>{
	travaux.close();
});

//popup intro
let popintro= null;

WA.onEnterZone('start', () => {
    popintro = WA.openPopup("intro", 'Bienvenue au 17eme étage, pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.onLeaveZone('start',() =>{
	popintro.close();
});

let waveplace=null;
WA.onEnterZone('waveplace', () => {
    waveplace=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour accéder à Waveplace",
        callback: () => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/Pages/default.aspx")
        }
    })
});

WA.onLeaveZone('waveplace',()=>{
    waveplace.remove();
})

let cafe=null;
WA.onEnterZone('cafe', () => {
    waveplace=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour rejoindre un café virtuel",
        callback: () => {
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19:meeting_OGVjYTA1NjAtMGNkZS00NWVjLTk2YTAtZTg3N2QwZWMzNWZm@thread.v2/0?context=%7B%22Tid%22:%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22,%22Oid%22:%2288d5518e-74f0-4910-8e9c-052164f7d7fd%22%7D")
        }
    })
});

WA.onLeaveZone('waveplace',()=>{
    cafe.remove();
})