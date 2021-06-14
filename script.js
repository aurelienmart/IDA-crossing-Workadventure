WA.sendChatMessage('Bienvenue au 17eme étage, pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.','La team IDA Crossing');
WA.onEnterZone("myZone",()=>{
	WA.sendChatMessage('zone en travaux revenez plus tard',"chantier")
})

WA.onEnterZone('myZone', () => {
    WA.openPopup("popup1", 'This is an imporant message!', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            popup.close();
        }
    }]);
});