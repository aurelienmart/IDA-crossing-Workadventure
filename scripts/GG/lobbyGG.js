let PascA=null;
let Pasc=null;
WA.room.onEnterZone('Pasc', () => {
    PascA=WA.ui.displayActionMessage({
        message: "Parler à Pascal",
        callback: () => {
            Pasc=WA.ui.openPopup('target',"Insérer le message",
            [{label:'Close',className:'primary',callback:(popup)=>
            {popup.close();}}])}
    })
});
WA.room.onLeaveZone('Pasc',() =>{
    PascA.remove();
    if(pasc!=null){
        pasc.close()
    }
    
    });