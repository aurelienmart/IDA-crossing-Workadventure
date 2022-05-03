//start
let popintro1=null;
WA.room.onEnterZone('start', () => {
    popintro1 = WA.ui.openPopup("targetup", 'Bienvenue dans la salle DBT, tu peux explorer la salle pour découvrir le cercle ou bien venir me voir si tu as des questions !', [{
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
            [{label:'Caroline',className:'primary',callback:()=> {WA.nav.openTab('https://eur.delve.office.com/?u=c08eb77d-07b7-4159-bc24-aa0a71dcef0c&v=work')}},
        {label:'Asmaa',className:'primary',callback:()=> {WA.nav.openTab('https://eur.delve.office.com/?u=d740301f-7561-4180-9e33-589d7543a8c1&v=work')}},
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
            ressources=WA.ui.openPopup('target',"Voici les ressources disponibles pour le cercle DBT: ",
            [{label:'Sharepoint DBT',className:'primary',callback:()=> {WA.nav.openTab('https://digiplace.sharepoint.com/sites/WICBUSINESSISTRANSFORMATION/Documents%20partages/Forms/AllItems.aspx')}},
            {label:'Vidéo de présentation',className:'primary',callback:()=> {WA.nav.openTab('https://digiplace.sharepoint.com/sites/WICBUSINESSISTRANSFORMATION/Documents partages/Forms/AllItems.aspx?id=%2Fsites%2FWICBUSINESSISTRANSFORMATION%2FDocuments%20partages%2F00%20%2D%20Introduction%20to%20DBT%20offer%2F1%20%2D%20Pr%C3%A9sentation%20DBT%20interne%2FPr%C3%A9sentation%20Cercle%20DBT%20%5BVersion%20Longue%5D%2Emp4&parent=%2Fsites%2FWICBUSINESSISTRANSFORMATION%2FDocuments%20partages%2F00%20%2D%20Introduction%20to%20DBT%20offer%2F1%20%2D%20Pr%C3%A9sentation%20DBT%20interne')}},
            {label:'Présentation du cercle',className:'primary',callback:()=>{WA.nav.openTab('https://digiplace.sharepoint.com/:p:/r/sites/WICBUSINESSISTRANSFORMATION/Documents partages/00 - Introduction to DBT offer/1 - Pr%C3%A9sentation DBT interne/TECHxRecrutement - 202107/202107 - DBT - pr%C3%A9sentation - TECHxRecrutement.pptx?d=wccf32a722fc54596a61f0afb89ba7b05&csf=1&web=1&e=l7d5WT');}},
            {label:'Close',className:'secondary',callback:(popup)=>{popup.close();}}])}
    })
});
WA.room.onLeaveZone('ressources',() =>{
    ressourcesA.remove();
    if(ressources!=null){
        ressources.close()
    }
    
    });