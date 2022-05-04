let exitA=null;
WA.room.onEnterZone('exit', () => {
    exitA=WA.ui.displayActionMessage({
        message: "Retourner sur Terre",
        callback: () => {WA.nav.goToRoom('../cercles.json')}
    })
});
WA.room.onLeaveZone('exit',() =>{
    exitA.remove();
    
    });