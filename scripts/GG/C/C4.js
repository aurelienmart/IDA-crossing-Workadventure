let popintro1=null;
WA.room.onEnterZone('intro', () => {
    popintro1 = WA.ui.openPopup("presentation", "Frank BRAVARD : 'Air Liquide a lancé un grand programme de transformation qui couvre l'ensemble de ses capacités business, ses processus et son paysage IS/IT en Europe : eu-Align. Après des échanges commerciaux et de nombreuses avant-ventes infructueuses sur ce Programme, nous avons enfin décroché fin 2021 un accompagnement pour choisir un intégrateur en charge de la migration de son principal ERP européen et le re-design de ses processus cœur. Venez découvrir cette nouvelle mission Digital Business Transformation !' \n \n Avancez pour rejoindre la réunion teams", [{
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
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDllMTAxOTEtZThmZC00MmU3LWI3NTctMDg4ZGYxMjc4N2Uy%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%221f5cf377-fe03-475b-b30a-5852af70c160%22%7d")
        }
    })
});

WA.room.onLeaveZone('teams',()=>{
    meeting.remove();
})