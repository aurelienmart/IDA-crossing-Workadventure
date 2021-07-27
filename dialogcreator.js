
export function tuto(){
////tutoriel devant pascal
return (WA.onEnterZone('tuto', () => {
    WA.disablePlayerControls();
    pasc1 = WA.openPopup("Pasc", "Alors ?! C'est ta premère fois sur WorkAdventure ?", [{
        label: "Oui",
        className: "primary",
        callback: (popup) => {
            popup.close();
            WA.openPopup("Pasc","Bienvenue à toi nouvel aventurier, tu dois avoir plein de questions",[{
                label:"close",
                className:"primary",
                callback: (popup) => {
                    popup.close();
                    WA.restorePlayerControls()}
            }])
        }
    },{label:"Non",
        className:"primary",
        callback: (popup)=>{
            popup.close();
            WA.openPopup("Pasc","Tu connais le chemin alors, je te laisse repartir",[{
                label:"close",
                className:"primary",
                callback: (popup) => {
                    popup.close();
                    WA.restorePlayerControls()}
            }])
            
        }

    }]);
});)
}