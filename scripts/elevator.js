mySound = WA.sound.loadSound("../medias/elevator.mp3");
var config={
    volume : 0.5,
    loop: true,
    rate : 1,
    detune: 1,
    delay : 0,
    seek: 0,
    mute : false
}

WA.room.onEnterZone('start', () => {
    mySound.play(config)
    WA.controls.disablePlayerControls();
    popintro2 = WA.ui.openPopup("target", 'A quel étage veux-tu aller ?', [{
        label: "16eme",
        className: "primary",
        callback: (popup) => {
            mySound.stop();
            WA.nav.goToRoom('../maps/17.json')
        }
    },
    {
        label: "Au bureau RH",
        className: "primary",
        callback: (popup) => {
            mySound.stop();
            WA.nav.goToRoom('../maps/RH2.json')
        }
    },
    {
        label: "Parcours NA",
        className: "primary",
        callback: (popup) => {
            mySound.stop();
            WA.nav.goToRoom('../maps/formation.json')
        }
    },
    {
        label: "Cercles",
        className: "primary",
        callback: (popup) => {
            mySound.stop();
            WA.nav.goToRoom('../maps/cercles.json')
        }
    },
    {
        label: "Dehors",
        className: "secondary",
        callback: (popup) => {
            mySound.stop();
            WA.nav.goToRoom('../maps/entree.json')
        }
    }







]);
});