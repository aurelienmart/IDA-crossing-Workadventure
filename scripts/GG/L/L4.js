let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Edouard SCHEFFER-KUNTZ : 'Skill’Up Business, c’est un dispositif imaginé pour accompagner dans la formation nos consultants qui souhaitent monter en compétences sur le volet business. Fonctionnant en binôme rookie / mentor, le mentor va partager les ficelles du métier au rookie en l'embarquant sur toutes les phases d'une avant-vente mission (pitch, propale, demande plan de charge,...). Toi aussi tu t’intéresses au business ? Ou tu souhaites voir comme nous avons réussi à faire passer cette initiative à l’échelle practice ? C’est par ici !' \n \n Avancez pour rejoindre la réunion teams    ", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_NmNhMmFlMjAtYzAxYS00YzlkLWEwYzktZmUwMDVlNTE5NTdk%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2223fa193d-bdd7-4195-bcd1-c8754e01c9c6%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})