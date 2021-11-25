WA.room.onEnterZone('start',()=>{WA.controls.disablePlayerControls();WA.ui.openPopup('target','Bonjour et bienvenue au bureau RH d’IDA',[{label:'C’est quoi ?',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Je suis Océane DHOME, Je m’occupe des tâches suivantes: \n -Pilotage Rh de la practice en lien avec le Steering Commitee \n -Suivi et accompagnement des équipes et du management \n -Gestion des mobilités internes',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Pour rencontrer les Référentes RH tu peux aller au bench en haut à gauche. \nSi tu veux discuter avec les Assitantes RH tu les trouveras au bench en haut à droite. \nEt finalement si tu as des questions sur la gestion du personnel et des fiches de paie tu peux aller au dernier bench en bas à droite.',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},])}},{label:' Je connais !',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Je te laisse alors, à bientôt !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},]);})

WA.room.onEnterZone('RRH', () => {
    RRH = WA.ui.openPopup("target", "Bonjour nous sommes les référentes RH,\n nous sommes en charge des éléments suivants: \n \n -Suivi et accompagnement des collaborateurs sur les sujets d'évolution, parcours, mobilité interne... \n-Appui au management de la practice sur les sujets RH \n -Animation des processus et politiques RH sur le périmètre \n - Intégration des nouveaux collaborateurs \n -Suivi des periodes d'éssai, stages et alternances \n -Animation et com' interne", [{
        label: "Contacter Anne-Lise",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:anne-lise.arcuset@wavestone.com')
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
        label: "Contacter Inès",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:ines.lecendreux@wavestone.com')
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
WA.room.onLeaveZone('RRH',() =>{
	RRH.close();
});

WA.room.onEnterZone('ARH', () => {
    ARH = WA.ui.openPopup("target", "Bonjour nous sommes les Assitantes RH, \n \n\n Lucie est en charge des éléments suivants: \n -Gestion des imputations \n -Suivi et déclaration des astreintes et intervention en heures non ouvrées \n \n Charlène s'occupe des sujets suivants: \n -Organisation des formations  \n -Intégration des nouveaux collaborateurs \n -Réalisation des démarches pour les collaborateurs de nationalité étrangère \n \n Sophie est responsable des éléments suivants: \n -Rédaction des attestations employeur \n -Distribution des tickets restaurant \n -Rédaction des Ordres de Mission", [{
        label: "Contacter Lucie",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:lucie.brule@wavestone.com')
        }
    },
    {
        label: "Contacter Charlène",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:charlene.gracia@wavestone.com')
        }
    },
    {
        label: "Contacter Sophie",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:sophie.lerbier@wavestone.com')
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
WA.room.onLeaveZone('ARH',() =>{
	ARH.close();
});

WA.room.onEnterZone('payroll', () => {
    payroll = WA.ui.openPopup("target", "Si tu as des questions sur les sujets suivants:\n -Information sur les fiches de paie \n -Gestion des avances sur frais \n -Mise à jour des données personnelles \n -Suivi des arrêts maladie et gestion des dossiers Mutuelle et Prévoyance \n -Traitement des notes de frais non refacturables \n -Remboursement des abonnements de transports en commun \n -Suivi des absences (congés, CDT, sans solde) \n tu peux contacter la Mailing list IDA Payroll and staff administration", [{
        label: "Envoyer un mail",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('mailto:IDAPayrollandstaffadministration@wavestone.com')
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
WA.room.onLeaveZone('payroll',() =>{
	payroll.close();
});