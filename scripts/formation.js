////////////Semaine 1
let obj1=null;
WA.room.onEnterZone('obj1', () => {
    obj1 = WA.ui.openPopup("target1", "Les objectifs de la semaine 1 sont:\n -Découvrir Wavestone, la periode d'intégration et la politique du cabinet \n -Réaliser un résumé de carrière au format Wavestone \n -Découvrir les outils Wavestone et la charte graphique du cabinet", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('obj1',() =>{
	obj1.close();
});

let cal1=null;
WA.room.onEnterZone('cal1', () => {
    cal1 = WA.ui.openPopup("target1", "-Formation Delivering in Wavestone \n -Atelier résumé de carrière \n -Atelier Wavekeeper", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('cal1',() =>{
	cal1.close();
});

let res1=null;
WA.room.onEnterZone('res1', () => {
    res1 = WA.ui.openPopup("target1", "Voici les différentes ressources de la semaine 1", [
        {
        label: "La CVthèque de Wavestone pour s'inspirer",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/RepositoryCV/Forms/AllItems.aspx")
        }
    },
    {
        label: "Delivering in Wavestone",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOF-HR-FORMATIONDIW/Documents%20partages/Forms/AllItems.aspx')
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
        label: "La politique RH de Wavestone",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/waveplace/fr-fr/hr/Pages/career.aspx')
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
WA.room.onLeaveZone('res1',() =>{
	res1.close();
});

////////////Semaine 2
let obj2=null
WA.room.onEnterZone('obj2', () => {
    obj2 = WA.ui.openPopup("target2", "Les objectifs de la semaine 2 sont:\n -Découvrir les bonnes pratiques du télétravail \n -Approfondir sa maîtrise des outils informatiques \n -Commencer à dévellopper ses connaissances sur le travail d'équipe", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('obj2',() =>{
	obj2.close();
});

let cal2=null
WA.room.onEnterZone('cal2', () => {
    cal2 = WA.ui.openPopup("target2", "Les RDV de cette semaine sont: \n -Débrief sur les bonnes pratiques du télétravail \n -Débrief sur la gestion du temps et le travail en équipe", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('cal2',() =>{
	cal2.close();
});

let res2=null
WA.room.onEnterZone('res2', () => {
    res2 = WA.ui.openPopup("target2", "Voici les différentes ressources de la semaine 2", [    {
        label: "Mooc Gérez votre temps efficacement",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://openclassrooms.com/fr/courses/5944991-gerez-votre-temps-efficacement')
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
        label: "Mooc Télétravail",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://wavestone.edflex.com/fr/mooc/mini-mooc-sur-le-teletravail/')
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
        label: "Formation Social Media Wavestone: How to place your Pawns",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://sequoia.wavestone-app.com/course/social-media-how-to-place-your-pawns/')
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
WA.room.onLeaveZone('res2',() =>{
	res2.close();
});

////////////Semaine 3
let obj3=null
WA.room.onEnterZone('obj3', () => {
    obj3 = WA.ui.openPopup("target3", "Les objectifs de la semaine 3 sont:\n -Découvrir le Wavestone Horizon \n -Conclure le Mooc sur les bonnes pratiques du travail en équipe \n -Découverte du processus de staffing et du plan de charge \n -Renforcer l'intégration au sein du cabinet", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('obj3',() =>{
	obj3.close();
});
let cal3=null
WA.room.onEnterZone('cal3', () => {
    cal3 = WA.ui.openPopup("target3", "Les RDV de cette semaine sont: \n -Atelier Wavestone Horizon \n -Atelier Plan de Charge et Staffing", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('cal3',() =>{
	cal3.close();
});

let res3=null
WA.room.onEnterZone('res3', () => {
    res3 = WA.ui.openPopup("target3", "Voici les différentes ressources de la semaine 3", [
        {
            label: "Découvrir le Wavestone Horizon",
            className: "primary",
            callback: (popup) => {
                WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/HR/Pages/WH.aspx")
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
            label: "Mooc Gérez votre temps efficacement",
            className: "primary",
            callback: (popup) => {
                WA.nav.openTab('https://openclassrooms.com/fr/courses/5944991-gerez-votre-temps-efficacement')
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
            label: "Mooc Télétravail",
            className: "primary",
            callback: (popup) => {
                WA.nav.openTab('https://wavestone.edflex.com/fr/mooc/mini-mooc-sur-le-teletravail/')
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
WA.room.onLeaveZone('res3',() =>{
	res3.close();
});

////////////Semaine 4
let obj4=null
WA.room.onEnterZone('obj4', () => {
    obj4 = WA.ui.openPopup("target4", "Les objectifs de la semaine 4 sont:\n -Découvrir le CSE\n -Démarrer son initiation aux techniques commerciales et à l’offre cabinet \n -Se sensibiliser à l'engagement RSE", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('obj4',() =>{
	obj4.close();
});
let cal4=null
WA.room.onEnterZone('cal4', () => {
    cal4 = WA.ui.openPopup("target4", "Les RDV de cette semaine sont: \n -Découvrir le CSE Wavestone \n -Atelier sur l'introduction à la politique RSE du cabinet \n -Atelier sur le modèle commercial Wavestone \n -Débrief de votre parcours d'intégration", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('cal4',() =>{
	cal4.close();
});

let res4=null
WA.room.onEnterZone('res4', () => {
    res4 = WA.ui.openPopup("target4", "Voici les différentes ressources de la semaine 4", [
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
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }
]);
});
WA.room.onLeaveZone('res4',() =>{
	res4.close();
});

///////////Autre

WA.room.onEnterZone('start',()=>{WA.controls.disablePlayerControls();WA.ui.openPopup('targetStart','Bonjour et bienvenue sur le parcours de fomation des nouveaux arrivants',[{label:'C’est quoi ?',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('targetStart','Ici tu pourras retrouver toutes les informations nécessaires à ta bonne intégration au cabinet.',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('targetStart','Ce parcours se déroule en 4 semaines, ici représenté par 4 pièces.',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('targetStart','Dans chaque pièce tu découvriras les objectifs de la semaine associée. Pour visualiser tes RDV de chaque semaine, dirige toi vers le planning en haut à gauche de chaque pièce.',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('targetStart','Pour accéder aux ressources dirige toi vers les bibliothèques en haut à droite de chaque pièce.\n A bientot !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},])}},])}},])}},{label:' Je connais !',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('targetStart','Je te laisse alors, à bientôt !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},]);})