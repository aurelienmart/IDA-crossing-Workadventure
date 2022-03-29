let PascA=null;
let Pasc=null;
WA.room.onEnterZone('Pasc', () => {
    PascA=WA.ui.displayActionMessage({
        message: "Parler à Pascal",
        callback: () => {
            Pasc=WA.ui.openPopup('target',"KingPasc : 'Bienvenue aux Golden Globes IDA, la cérémonie qui célèbre les initiatives IDA. Partez à la rencontre des acteurs qui ont travaillé sur ces projets pour découvrir les coulisses et poser toutes vos questions !'",
            [{label:'Close',className:'primary',callback:(popup)=>
            {popup.close();}}])}
    })
});
WA.room.onLeaveZone('Pasc',() =>{
    PascA.remove();
    if(Pasc!=null){
        Pasc.close()
    }
    
    });