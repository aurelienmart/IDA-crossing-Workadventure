//start
let popintro1=null;
WA.room.onEnterZone('start', () => {
    popintro1 = WA.ui.openPopup("targetup", 'Bienvenue dans la salle APM, tu peux explorer la salle pour découvrir le cercle ou bien venir me voir si tu as des questions !', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('start',() =>{
	popintro1.close();
});

//info contact

let PNJA=null;
let PNJ=null;
WA.room.onEnterZone('PNJ', () => {
   PNJA=WA.ui.displayActionMessage({
        message: "Parler",
        callback: () => {
            PNJ=WA.ui.openPopup('targetup',"Des informations sur le cercle sont disponibles au fond de la pièce, si tu as des questions tu peux contacter les personnes suivantes: ",
            [{label:'Omar',className:'primary',callback:()=> {WA.nav.openTab('https://eur.delve.office.com/?u=4aa5d268-cf09-49c5-9d81-34e20eab0638&v=work')}},
        {label:'Sina',className:'primary',callback:()=> {WA.nav.openTab('https://eur.delve.office.com/?u=04edcd99-90be-4f47-829c-7c4382a5c521&v=work')}},
            {label:'Close',className:'secondary',callback:(popup)=>{popup.close();}}])}
    })
});
WA.room.onLeaveZone('PNJ',() =>{
    PNJA.remove();
    if(PNJ!=null){
        PNJ.close()
    }
    
    });

//lien vers les ressources
let ressourcesA=null;
let ressources=null;
WA.room.onEnterZone('ressources', () => {
   ressourcesA=WA.ui.displayActionMessage({
        message: "Accéder aux ressources",
        callback: () => {
            ressources=WA.ui.openPopup('target',"Voici les ressources disponibles pour le cercle APM: ",
            [{label:'Sharepoint APM',className:'primary',callback:()=> {WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOPIDA-AMAZINGPLATFORMMAKERS/SitePages/Accueil.aspx')}},
            {label:'Vidéo de présentation',className:'primary',callback:()=> {WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOPIDA-AMAZINGPLATFORMMAKERS/Documents%20partages/Forms/AllItems.aspx?id=%2Fsites%2FWOPIDA%2DAMAZINGPLATFORMMAKERS%2FDocuments%20partages%2F0000%20%2D%20Pr%C3%A9sentation%20Offres%20APM%2FPr%C3%A9sentation%20Cercle%20APM%20%5BVersion%20Courte%5D%2Emp4&parent=%2Fsites%2FWOPIDA%2DAMAZINGPLATFORMMAKERS%2FDocuments%20partages%2F0000%20%2D%20Pr%C3%A9sentation%20Offres%20APM')}},
            {label:'Close',className:'secondary',callback:(popup)=>{popup.close();}}])}
    })
});
WA.room.onLeaveZone('ressources',() =>{
    ressourcesA.remove();
    if(ressources!=null){
        ressources.close()
    }
    
    });