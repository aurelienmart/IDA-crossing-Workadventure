WA.sendChatMessage('Bienvenue au 17eme étage, pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.','La team IDA Crossing');

WA.onEnterZone("myZone",()=>{
	WA.sendChatMessage('zone en travaux revenez plus tard',"chantier")
})
WA.onEnterZone("meeting",()=>{
	WA.openTab('https://teams.microsoft.com/l/meetup-join/19:meeting_NjBmY2EwMjQtNDkxZC00NmM4LWE3MWMtMmY4ZDZlNWVkMjk3@thread.v2/0?context=%7B%22Tid%22:%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22,%22Oid%22:%2288d5518e-74f0-4910-8e9c-052164f7d7fd%22%7D')
})

let travaux;

// Open the popup when we enter a given zone
travaux= WA.onEnterZone('myZone', () => {
    WA.openPopup("popup1", 'Cette zone est en travaux, revenez plus tard', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('myZone', () => {
    travaux.close();
});