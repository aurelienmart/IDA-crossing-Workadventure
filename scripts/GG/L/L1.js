let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Solène PINEL : 'SmartWorking souhaite concevoir LE futur cadre de travail à travers différentes expérimentations à l’échelle du cabinet, mais aussi de la practice. Au sein d'IDA, différentes expérimentations ont déjà été lancées : ateliers de réfléxion, nouveau forfait de réservations de salles privés, etc. Les objectifs sont tout aussi variés que les expérimentations testées : accroitre le bien-être au travail, disposer d’un bon équilibre vie pro/vie perso, améliorer notre efficacité, ou encore faire un bilan des interactions réalisées entre le télétravail/présence sur site pour proposer notamment le modèle ( hybride ou non) le plus bénéfique possible à nos collaborateurs !' \n \n Avancez pour rejoindre la réunion teams", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('intro',() =>{
	popintro1.close();
});

let meeting=null;
WA.room.onEnterZone('teams', () => {
    meeting=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour accéder à la réunion teams",
        callback: () => {
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmExMTczNjktYjFkNi00NzE4LWI2YmEtMDhkNWZlODNiODNk%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%223871fffb-fed9-4461-b194-be7636122f27%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})