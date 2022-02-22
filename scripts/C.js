let guide= null;

WA.room.onEnterZone('start', () => {
    WA.controls.disablePlayerControls();
    guide = WA.ui.openPopup("target", 'Choisissez la bonne porte si vous espérez trouver la sortie !!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            WA.controls.restorePlayerControls();
        }
    }]);
});

WA.room.onLeaveZone('start',() =>{
	guide.close();
});
