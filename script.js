WA.sendChatMessage('Bienvenue au 17eme étage, pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.','La team IDA Crossing');
let testpopup;

testpopup = WA.onEnterZone("myZone",()=>{
	WA.openPopup("popup1","zone en travaux, revenez plus tard",[{
		label:'Close'
		className:"primary",
		callback: (popup)=> {
			popup.close();
		}
	}])
})