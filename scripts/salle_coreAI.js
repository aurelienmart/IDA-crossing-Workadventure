//start
let popintro1=null;
WA.room.onEnterZone('start', () => {
    popintro1 = WA.ui.openPopup("targetup", 'Bienvenue dans la salle CoreAI/MLDL, tu peux explorer la salle pour découvrir le cercle ou bien venir me voir si tu as des questions !', [{
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
            PNJ=WA.ui.openPopup('targetup',"Des informations sur le cercle sont disponibles au fond de la pièce, si tu as des questions tu peux contacter : ",
            [{label:'Stéphan Mir',className:'primary',callback:()=> {WA.nav.openTab('https://eur.delve.office.com/?u=06b47577-2747-40fe-b482-a4f0ee9f95bf&v=work')}},
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
            ressources=WA.ui.openPopup('target',"Voici les ressources disponibles pour le cercle CoreAI/MLDL: ",
            [{label:'Le pitch MLDL',className:'primary',callback:()=> {WA.nav.openTab('https://digiplace.sharepoint.com/:p:/r/sites/WOA-MACHINELEARNINGDATALAB-KNOWLEDGEBASE/_layouts/15/Doc.aspx?sourcedoc=%7B20D79E04-B348-4896-9FF1-029096389F38%7D&file=fiche_id_MLDL_2022_FR.pptx&action=edit&mobileredirect=true')}},
            {label:'Notre sharepoint',className:'primary',callback:()=> {WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOA-MACHINELEARNINGDATALAB-KNOWLEDGEBASE/Documents%20partages/Forms/AllItems.aspx?viewpath=%2Fsites%2FWOA%2DMACHINELEARNINGDATALAB%2DKNOWLEDGEBASE%2FDocuments%20partages%2FForms%2FAllItems%2Easpx&viewid=25fa07f9%2Df222%2D4ce4%2Da2b3%2Ddc8405729ea7&OR=Teams%2DHL&CT=1655713500911&params=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjA1MDEwMTAwOSJ9')}},
            {label:'Close',className:'secondary',callback:(popup)=>{popup.close();}}])}
    })
});
WA.room.onLeaveZone('ressources',() =>{
    ressourcesA.remove();
    if(ressources!=null){
        ressources.close()
    }
    
    });