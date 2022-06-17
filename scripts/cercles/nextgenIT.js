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

// Zone de FlorianD
let popFlorian=null;

WA.room.onEnterZone('Florian', () => {
    popFlorian = WA.ui.openPopup("targetHaut", "Florian DELECOLLE : 'L'offre Automation & DevOps a pour but de moderniser les couches applicatives,\n par exemple en faisant de la micro segmentation, du DevOps …'", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('Florian',() =>{
    popFlorian.close();
});

// Zone de MathieuT
let popMathieu=null;

WA.room.onEnterZone('Mathieu', () => {
    popMathieu = WA.ui.openPopup("targetHaut", "Mathieu THOUARD : 'L'offre Sourcing & Ecosystems vise a trouver le bon fournisseur pour le bon usage avec les bons contrats'", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('Mathieu',() =>{
    popMathieu.close();
});

// Zone de AurélienD
let popAurelien=null;

WA.room.onEnterZone('Aurelien', () => {
    popAurelien = WA.ui.openPopup("targetBas", "Aurélien DEVEAUX : 'L'offre Agile@Scale & New Ops cherche à adapter les organisations pour profiter des avantages du cloud'", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('Aurelien',() =>{
    popAurelien.close();
});

// Zone de ClementA
let popClement=null;

WA.room.onEnterZone('Clement', () => {
    popClement = WA.ui.openPopup("targetBas", "Clément ADELINE : 'L'offre Pay Per Use & FinOps permet d'optimiser sa consommation pour optimiser sa facture'", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('Clement',() =>{
    popClement.close();
});

// Zone de EtienneL
let popEtienne=null;

WA.room.onEnterZone('Etienne', () => {
    popEtienne = WA.ui.openPopup("targetBas", "Etienne LAFORE : 'Avec l'offre Cloud Sec & SecOps on se protège contre les attaques de pirates de l'espace !!'", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('Etienne',() =>{
    popEtienne.close();
});

// Zone de RonanC
let popRonan=null;

WA.room.onEnterZone('Ronan', () => {
    popRonan = WA.ui.openPopup("targetHaut", "Ronan CARON : 'L'offre Cloud & Container consiste a moderniser les socles d'hébergement,\n par exemple faire des move to cloud ou de la conteneurisation'", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('Ronan',() =>{
    popRonan.close();
});

// Zone de Robot
let popRobot=null;

WA.room.onEnterZone('Robot', () => {
    popRobot = WA.ui.openPopup("targetBas", "Bon.Jour Je M'app.Elle ROBOPS ! \n Tu peux Con.Tac.ter mOn E.Qui.pE Sur ces MailS : \n - infrastructureandcloudcomputingcommunity@wavestone.com Pour des In.fOs sur le fOnd \n - wod_all-nextgenit@wavestone.com pOur Con.trI.bUer a la Com.Unau.Te Next.GEn \n - wop-ida-nextgenit@wavestone.com poUr dEs de.Man.dEs Bu.si.NESS'", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});
WA.room.onLeaveZone('Robot',() =>{
    popRobot.close();
});