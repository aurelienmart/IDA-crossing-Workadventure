

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

WA.room.onEnterZone('res1', () => {
    res1 = WA.ui.openPopup("target1", "Voici les différentes ressources de la semaine 1", [{
        label: "Mooc Télétravail, s’organiser à distance",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://wavestone.edflex.com/fr/path/teletravail-sorganiser-a-distance')
        }
    },
    {
        label: "Delivering in Wavestone",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/:p:/r/sites/WOF-HR-FORMATIONDIW/Documents%20partages/Formation%20%C3%A0%20distance/Support%20de%20formation%20J1/Formation%20Delivering%20in%20Wavestone%20-%20premi%C3%A8re%20matin%C3%A9e.pptx?d=wea1ad2cfa50c4ae89a04b96a6eb26d20&csf=1&web=1&e=doaJfG')
        }
    },
    {
        label: "Présentation de Wavestone",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/corporate/Pages/Wavestone-presentation.aspx")
        }
    },
    {
        label: "Premiers pas sur Wavekeeper",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/waveplace/fr-fr/it-services/Pages/Wavekeeper.aspx')
        }
    },
    {
        label: "Update de Pascal IMBERT",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/waveplace/fr-fr/corporate/covid-19/Pages/weekly-update.aspx')
        }
    },
    {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }
]);
});
WA.onLeaveZone('res1',() =>{
	res1.close();
});