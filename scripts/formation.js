

////////////Semaine 1
WA.room.onEnterZone('obj1', () => {
    obj1 = WA.ui.openPopup("target1", "Les objectifs de la semaine 1 sont:\n /Découvrir le parcours d'intégration \n /Connaître les bonnes pratiques en télétravail \n /Se réapproprier les basiques", [{
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

WA.room.onEnterZone('cal1', () => {
    cal1 = WA.ui.openPopup("target1", "Il n'y a pas de RDV cette semaine", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('cal1',() =>{
	cal1.close();
});