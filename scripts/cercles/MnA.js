let popintro=null
let popup=null
WA.room.onEnterZone('start', () => {
    popintro = WA.ui.openPopup("target", 'Bienvenue dans la salle M&A \n Que veux-tu savoir ?', [{
        label: "Types d'opération",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/17.json')
        }
    },
    {
        label: "Sujets",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/RH2.json')
        }
    },
    {
        label: "Phases",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/formation.json')
        }
    },
    {
        label: "Structure",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.goToRoom('../maps/cercles.json')
        }
    },
]);
});

WA.room.onLeaveZone('start',() =>{
    popintro.close();
    });WA.room.onEnterZone('BD',()=>{WA.controls.disablePlayerControls();WA.ui.openPopup('target','Que veux-tu savoir ?',[{label:'Missions types et r�f�rences cl�s',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Lien vers les r�f�rences',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},{label:' Business et propositions',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Et plus pr�cis�ment ?',[{label:'Vision du business',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Lien vision du biz',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},{label:' Future �volution',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','lien future �volution',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},{label:' Propositions commerciales',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','lien propales',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},{label:' Pitchs',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','lien pitchs',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},{label:' Acc�l�rateurs Business',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','lien acc�l�rateur',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.ui.openPopup('target','Close',[{label:'Close',className:'primary',callback:(popup)=>{popup.close();WA.controls.restorePlayerControls()}}])}},])}},]);})