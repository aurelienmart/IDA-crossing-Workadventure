WA.room.onEnterZone('start',()=>{WA.controls.disablePlayerControls();WA.ui.openPopup('target','Bonjour et bienvenue au bureau RH d’IDA',[{label:'C’est quoi ?',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Je suis Océane DHOME, Je m’occupe des tâches suivantes: \n -Pilotage Rh de la practice en lien avec le Steering Commitee \n -Suivi et accompagnement des équipes et du management \n -Gestion des mobilités internes',[{label:'Suite',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Pour rencontrer les Référentes RH tu peux aller au bench en haut à gauche. \nSi tu veux discuter avec les Assistantes RH tu les trouveras au bench en haut à droite. \nEt finalement si tu as des questions sur la gestion du personnel et des fiches de paie tu peux aller au dernier bench en bas à droite.',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},])}},{label:' Je connais !',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Je te laisse alors, à bientôt !',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},]);})

let RRH=null;
WA.room.onEnterZone('RRH', () => {
    RRH = WA.ui.openPopup("target", "Bonjour nous sommes les référentes RH,\n nous sommes en charge des éléments suivants: \n \n -Suivi et accompagnement des collaborateurs sur les sujets d'évolution, parcours, mobilité interne... \n-Appui au management de la practice sur les sujets RH \n -Animation des processus et politiques RH sur le périmètre \n - Intégration des nouveaux collaborateurs \n -Suivi des périodes d'éssai, stages et alternances \n -Animation et com' interne", [{
        label: "Contacter Anne-Lise",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('https://eur.delve.office.com/?u=c81fd1cd-8f4b-40c7-b3d9-de9b54621c0c&v=work')
        }
    },
    {
        label: "Contacter Elise",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('https://eur.delve.office.com/?u=6e68d253-2a12-4391-9d62-e880fb735ce8&v=work')
        }
    },
    {
        label: "Contacter Inès",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('https://eur.delve.office.com/?u=fa95e3a4-6a39-42c7-8f6b-19cccaca5b14&v=work')
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

let ARH=null;
WA.room.onEnterZone('ARH', () => {
    ARH = WA.ui.openPopup("target", "Bonjour nous sommes les Assitantes RH, \n \n\n Lucie est en charge des éléments suivants: \n -Gestion des imputations \n -Suivi et déclaration des astreintes et intervention en heures non ouvrées \n \n Charlène s'occupe des sujets suivants: \n -Organisation des formations  \n -Intégration des nouveaux collaborateurs \n -Réalisation des démarches pour les collaborateurs de nationalité étrangère \n \n Sophie est responsable des éléments suivants: \n -Rédaction des attestations employeur \n -Distribution des tickets restaurant \n -Rédaction des Ordres de Mission", [{
        label: "Contacter Lucie",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('https://eur.delve.office.com/?u=41f7782b-e033-4644-b3a2-9b639aed93ed&v=work')
        }
    },
    {
        label: "Contacter Charlène",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('https://eur.delve.office.com/?u=11fc10eb-cb0d-427b-b2d0-550e1dab8318&v=work')
        }
    },
    {
        label: "Contacter Sophie",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            WA.nav.openTab('https://eur.delve.office.com/?u=aefc3072-ccc1-4bcc-8ceb-06e321998080&v=work')
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

let payroll=null;
WA.room.onEnterZone('payroll', () => {
    payroll = WA.ui.openPopup("target", "Si tu as des questions sur les sujets suivants:\n -Information sur les fiches de paie \n -Gestion des avances sur frais \n -Mise à jour des données personnelles \n -Suivi des arrêts maladie et gestion des dossiers Mutuelle et Prévoyance \n -Traitement des notes de frais non refacturables \n -Remboursement des abonnements de transports en commun \n -Suivi des absences (congés, CDT, sans solde) \n tu peux contacter la Mailing list IDA Payroll and staff administration \n\n\n Envoyer un mail à WL-[Practice]Payrollandstaffadministration", [
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