let win= null;

WA.room.onEnterZone('start', () => {
    win = WA.ui.openPopup("target", 'Tu croyais vraiment que ça allait être si facile ?', [{
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
