let win= null;

WA.room.onEnterZone('start', () => {
    win = WA.ui.openPopup("target", 'Félicitation vous avez trouvé la sortie !!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('start',() =>{
	win.close();
});
