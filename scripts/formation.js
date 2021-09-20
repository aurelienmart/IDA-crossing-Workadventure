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

////////////Semaine 2
WA.room.onEnterZone('obj2', () => {
    obj2 = WA.ui.openPopup("target2", "Les objectifs de la semaine 2 sont:\n /Découvrir la politique RH de Wavestone\n /Approfondir sa maîtrise des outils informatiques \n /Découvrir les offres du cabinet \n /Commencer à dévelloper ses connaissances sur le travail d'équipe", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('obj2',() =>{
	obj2.close();
});

WA.room.onEnterZone('cal2', () => {
    cal2 = WA.ui.openPopup("target2", "Les RDV de cette semaine sont: \n /Atelier politique RH \n /Atelier Positive Way", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('cal2',() =>{
	cal2.close();
});

WA.room.onEnterZone('res2', () => {
    res2 = WA.ui.openPopup("target2", "Voici les différentes ressources de la semaine 2", [{
        label: "La politique RH de Wavestone",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/waveplace/fr-fr/hr/Pages/career.aspx')
        }
    },
    {
        label: "Le Positive Way",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/waveplace/fr-fr/corporate/Pages/the-positive-way.aspx')
        }
    },
    {
        label: "Approfondir sa connaissance des outils utilisés chez Wavestone",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/it-services/Pages/Groups.aspx")
        }
    },
    {
        label: "Mooc Travailler efficacement en équipe",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/5164316-travaillez-efficacement-en-equipe')
        }
    },
    {
        label: "Outils Boost my pitch pour découvrir les offres du cabinet",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/:p:/r/sites/WOSBOOSTMYPITCH/_layouts/15/Doc.aspx?sourcedoc=%7B0F1CF6BB-551C-4B94-95B4-5155D6CFBD1D%7D&file=BOOST%20MY%20PITCH%202019.pptx&action=edit&mobileredirect=true&cid=0840aa54-7dcc-4dfa-97a8-477b6bfd7a9b')
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
WA.onLeaveZone('res2',() =>{
	res2.close();
});

////////////Semaine 3
WA.room.onEnterZone('obj3', () => {
    obj3 = WA.ui.openPopup("target3", "Les objectifs de la semaine 3 sont:\n /Découvrir le rôle du CSE et les avantages proposés\n /Réaliser un résumé de carrière au format Wavestone \n /Poursuivre l'apprentissage des bonnes pratiques du travail en équipe \n /Commencer à découvrir comment bien s'organiser", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('obj3',() =>{
	obj3.close();
});

WA.room.onEnterZone('cal3', () => {
    cal3 = WA.ui.openPopup("target3", "Les RDV de cette semaine sont: \n /Atelier résumé de carrière \n /Atelier bonnes pratiques du télétravail \n /Atelier découverte du CSE", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('cal3',() =>{
	cal3.close();
});

WA.room.onEnterZone('res3', () => {
    res3 = WA.ui.openPopup("target3", "Voici les différentes ressources de la semaine 3", [{
        label: "Le CSE",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/waveplace/fr-fr/employee-representative-bodies/CSE/Pages/default.aspx')
        }
    },
    {
        label: "Mooc Gérez votre temps efficacement",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/5944991-gerez-votre-temps-efficacement')
        }
    },
    {
        label: "La CVthèque de Wavestone pour s’inspirer",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/RepositoryCV/Forms/AllItems.aspx")
        }
    },
    {
        label: "Mooc Travailler efficacement en équipe",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/5164316-travaillez-efficacement-en-equipe')
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
WA.onLeaveZone('res3',() =>{
	res3.close();
});

////////////Semaine 4
WA.room.onEnterZone('obj4', () => {
    obj4 = WA.ui.openPopup("target4", "Les objectifs de la semaine 4 sont:\n /Comprendre le Wavestone Horizon\n /Poursuivre son apprentissage des fondamentaux de la gestion de son temps \n /Conclure le Mooc sur les bonnes pratiques du travail en équipe \n /Démarrer son initiation aux techniques commerciales", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('obj4',() =>{
	obj4.close();
});

WA.room.onEnterZone('cal4', () => {
    cal4 = WA.ui.openPopup("target4", "Les RDV de cette semaine sont: \n /Atelier Wavestone Horizon", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('cal4',() =>{
	cal4.close();
});

WA.room.onEnterZone('res4', () => {
    res4 = WA.ui.openPopup("target4", "Voici les différentes ressources de la semaine 4", [   {
        label: "Mooc Gérez votre temps efficacement",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/5944991-gerez-votre-temps-efficacement')
        }
    },
    {
        label: "Mooc Initiez-vous aux techniques commerciales",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/4750821-initiez-vous-aux-techniques-commerciales')
        }
    },
    {
        label: "Découvrir le Wavestone Horizon",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/HR/Pages/WH.aspx")
        }
    },
    {
        label: "Mooc Travailler efficacement en équipe",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/5164316-travaillez-efficacement-en-equipe')
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
WA.onLeaveZone('res4',() =>{
	res4.close();
});

////////////Semaine 5
WA.room.onEnterZone('obj5', () => {
    obj5 = WA.ui.openPopup("target5", "Les objectifs de la semaine 4 sont:\n /Comprendre le modèle commercial de Wavestone\n /Poursuivre son initiation aux techniques commerciales \n /Comprendre les enjeux de la satisfaction client chez Wavestone", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('obj5',() =>{
	obj5.close();
});

WA.room.onEnterZone('cal5', () => {
    cal5 = WA.ui.openPopup("target5", "Les RDV de cette semaine sont: \n /Atelier sur le modèle commercial de Wavestone \n /Atelier bien s'organiser et travailler en équipe \n /Débrief de votre parcours d'intégration \n /Atelier Introduction à la RSE", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('cal5',() =>{
	cal5.close();
});

WA.room.onEnterZone('res5', () => {
    res5 = WA.ui.openPopup("target5", "Voici les différentes ressources de la semaine 5", [
    {
        label: "Mooc Initiez-vous aux techniques commerciales",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/4750821-initiez-vous-aux-techniques-commerciales')
        }
    },
    {
        label: "Découvrir le modèle commercial de Wavestone",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/business-marketing/Pages/Business-Model.aspx")
        }
    },
    {
        label: "Comprendre les enjeux de la satisfaction client",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/waveplace/fr-fr/corporate/pages/client-satisfaction-implementation.aspx')
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
WA.onLeaveZone('res5',() =>{
	res5.close();
});