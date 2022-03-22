let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Leonard HEMION : 'Dans le cadre de la cession de Lapeyre par Saint-Gobain à un fond d’investissement allemand, Mutares, Wavestone a accompagné la DSI Lapeyre sur le cadrage et l'exécution du projet d’autonomisation du SI Lapeyre. Wavestone a dû gérer des adhérences fortes avec des programmes SI métier en cours, et s'adapter à un planning serré (TSA initial de 10 mois). Venez découvrir les résultats obtenus cette année par le large dispositif Wavestone déployé au sein de Lapeyre !' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2VhNzNhNzEtZmM4My00OTI1LTkzZjYtMmE2MWE3NWEyNjFi%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%224aedfeaa-d9eb-41ec-b691-3b2c12009424%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})