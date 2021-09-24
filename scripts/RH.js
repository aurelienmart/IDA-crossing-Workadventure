WA.onEnterZone('start',()=>{WA.disablePlayerControls();WA.openPopup('target','Bonjour et bienvenue au bureau RH d’IDA',[{label:'C’est quoi ?',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('target','Je suis Océane DHOME, Je m’occupe des tâches suivantes: \n -Pilotage Rh de la practice en lien avec le Steering Commitee \n -Suivi et accompagnement des équipes et du management \n -Gestion des mobilités internes',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('target','Pour rencontrer les Référentes RH tu peux aller au bench en haut à gauche. \nSi tu veux discuter avec les Assitantes RH tu les trouveras au bench en haut à droite. \nEt finalement si tu as des questions sur la gestion du personnel et des fiches de paie tu peux aller au dernier bench en bas à droite.',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.restorePlayerControls()}}])}},])}},{label:' Je connais !',className:'primary',callback:(popup)=>{popup.close();WA.openPopup('target','Je te laisse alors, à bientôt !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.restorePlayerControls()}}])}},]);})

WA.room.onEnterZone('RRH', () => {
    RRH = WA.ui.openPopup("target", "Bonjour nous sommes les référentes RH, nous sommes en charge des éléments suivants: \n -Suivi et accompagnement des collaborateurs sur les sujets d'évolution, parcours, mobilité interne... \n-Appui au management de la practice sur les sujets RH \n -Animation des processus et politiques RH sur le périmètre \n - Intégration des nouveaux collaborateurs \n -Suivi des periodes d'éssai, stages et alternances \n -Animation et com' interne", [{
        label: "Contacter Myriam",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:myriam.le-masson@wavestone.com')
        }
    },
    {
        label: "Contacter Elise",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:elise.amadei@wavestone.com')
        }
    },
    {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.onLeaveZone('RRH',() =>{
	RRH.close();
});