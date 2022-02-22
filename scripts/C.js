let guide= null;

WA.room.onEnterZone('start', () => {
    guide = WA.ui.openPopup("target", 'Choisissez la bonne porte si vous espérez trouver la sortie !!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('start',() =>{
	guide.close();
});
