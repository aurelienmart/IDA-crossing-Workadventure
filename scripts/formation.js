WA.room.onEnterZone('obj1', () => {
    obj1 = WA.ui.openPopup("target1", "Les objectifs de la semaine 1 sont:/n Découvrir le parcours d'intégration \n Connaître les bonnes pratiques en télétravail <br> Se réapproprier les basiques", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('obj1',() =>{
	obj1.close();
});