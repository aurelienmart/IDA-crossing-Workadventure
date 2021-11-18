
//lancement réunion teams dans la salle de réunion du haut de la map
WA.room.onEnterZone("meeting",()=>{
	WA.nav.openTab('https://teams.microsoft.com/l/meetup-join/19:meeting_NjBmY2EwMjQtNDkxZC00NmM4LWE3MWMtMmY4ZDZlNWVkMjk3@thread.v2/0?context=%7B%22Tid%22:%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22,%22Oid%22:%2288d5518e-74f0-4910-8e9c-052164f7d7fd%22%7D')
})

//popup zone de travaux escaliers
let travaux= null;

WA.room.onEnterZone('myZone', () => {
    travaux = WA.ui.openPopup("popup1", 'Cette zone est en travaux, revenez plus tard', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('myZone',() =>{
	travaux.close();
});

//popup intro
let popintro= null;

WA.room.onEnterZone('start', () => {
    popintro = WA.ui.openPopup("intro", 'Bienvenue au 16eme étage, pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('start',() =>{
	popintro.close();
});

let waveplace=null;
WA.room.onEnterZone('waveplace', () => {
    waveplace=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour accéder à Waveplace",
        callback: () => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/Pages/default.aspx")
        }
    })
});

WA.room.onLeaveZone('waveplace',()=>{
    waveplace.remove();
})

let rick=null;
WA.room.onEnterZone('rick', () => {
    waveplace=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour accéder à Waveplace",
        callback: () => {
            WA.nav.openTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
    })
});

WA.room.onLeaveZone('rick',()=>{
    waveplace.remove();
})

let cafe=null;
WA.room.onEnterZone('cafe', () => {
    cafe=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour rejoindre un café virtuel",
        callback: () => {
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19:meeting_OGVjYTA1NjAtMGNkZS00NWVjLTk2YTAtZTg3N2QwZWMzNWZm@thread.v2/0?context=%7B%22Tid%22:%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22,%22Oid%22:%2288d5518e-74f0-4910-8e9c-052164f7d7fd%22%7D")
        }
    })
});

WA.room.onLeaveZone('cafe',()=>{
    cafe.remove();
})

let meme;
WA.room.onEnterZone('zonememe',()=>{
    meme=WA.ui.openPopup('targetmeme','A.D: Hey!.. Psssssssst!... Tu veux voir ma collection de memes ?!',
    [{label:'Oui avec plaisir',className:'primary',callback:(popup)=>
    {popup.close();WA.nav.openTab("https://teams.microsoft.com/l/channel/19%3ac8e919ce875d4c12a0d8e4fc617ada51%40thread.tacv2/Feel%2520good%2520-%2520coffee?groupId=2bac874a-c4bd-407e-ab0a-e77b00e9f609&tenantId=5de96c96-c87c-4dce-aad9-f5c557b52ac1")}},
    {label:" Non j'ai du boulot" ,className:'primary',callback:(popup)=>{
        popup.close();}}]);})

        WA.room.onLeaveZone('zonememe',() =>{
            meme.close();
        });