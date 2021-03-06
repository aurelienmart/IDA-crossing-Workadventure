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
let popFlorian=null
let msgFlorian=null
WA.room.onEnterZone("Florian", () => {
    popFlorian=WA.ui.displayActionMessage({
        message: "Parler à Florian DELECOLLE",
        callback: () => {
            msgFlorian=WA.ui.openPopup("targetHaut", "Je represente l'offre Automation & DevOps qui a pour but de moderniser les couches applicatives,\n par exemple en faisant de la micro segmentation, du DevOps …", [{
                label: "Close",
                className: "primary",
                callback: (popup) => {
                    popup.close()
                }
            }]);
            WA.room.onLeaveZone("Florian",()=>{
                msgFlorian.close();
            });
        ;}
    })
})
WA.room.onLeaveZone("Florian",()=>{
    popFlorian.remove();
});

// Zone de MathieuT
let popMathieu=null
let msgMathieu=null
WA.room.onEnterZone("Mathieu", () => {
    popMathieu=WA.ui.displayActionMessage({
        message: "Parler à Mathieu THOUARD",
        callback: () => {
            msgMathieu=WA.ui.openPopup("targetHaut", "Je represente l'offre Sourcing & Ecosystems qui vise a trouver le bon fournisseur pour le bon usage avec les bons contrats", [{
                label: "Close",
                className: "primary",
                callback: (popup) => {
                    popup.close()
                }
            }]);
            WA.room.onLeaveZone("Mathieu",()=>{
                msgMathieu.close();
            });
        ;}
    })
})
WA.room.onLeaveZone("Mathieu",()=>{
    popMathieu.remove();
});

// Zone de AurélienD
let popAurelien=null
let msgAurelien=null
WA.room.onEnterZone("Aurelien", () => {
    popAurelien=WA.ui.displayActionMessage({
        message: "Parler à Aurélien DEVEAUX",
        callback: () => {
            msgAurelien=WA.ui.openPopup("targetBas", "Je represente l'offre Agile@Scale & New Ops cherche à adapter les organisations pour profiter des avantages du cloud", [{
                label: "Close",
                className: "primary",
                callback: (popup) => {
                    popup.close()
                }
            }]);
            WA.room.onLeaveZone("Aurelien",()=>{
                msgAurelien.close();
            });
        ;}
    })
})
WA.room.onLeaveZone("Aurelien",()=>{
    popAurelien.remove();
});

// Zone de ClementA
let popClement=null
let msgClement=null
WA.room.onEnterZone("Clement", () => {
    popClement=WA.ui.displayActionMessage({
        message: "Parler à Clément ADELINE",
        callback: () => {
            msgClement=WA.ui.openPopup("targetBas", "Je represente l'offre Pay Per Use & FinOps permet d'optimiser sa consommation pour optimiser sa facture", [{
                label: "Close",
                className: "primary",
                callback: (popup) => {
                    popup.close()
                }
            }]);
            WA.room.onLeaveZone("Clement",()=>{
                msgClement.close();
            });
        ;}
    })
})
WA.room.onLeaveZone("Clement",()=>{
    popClement.remove();
});

// Zone de EtienneL
let popEtienne=null
let msgEtienne=null
WA.room.onEnterZone("Etienne", () => {
    popEtienne=WA.ui.displayActionMessage({
        message: "Parler à Etienne LAFORE",
        callback: () => {
            msgEtienne=WA.ui.openPopup("targetBas", "Je represente l'offre Cloud Sec & SecOps on se protège contre les attaques de pirates de l'espace !!", [{
                label: "Close",
                className: "primary",
                callback: (popup) => {
                    popup.close()
                }
            }]);
            WA.room.onLeaveZone("Etienne",()=>{
                msgEtienne.close();
            });
        ;}
    })
})
WA.room.onLeaveZone("Etienne",()=>{
    popEtienne.remove();
});

// Zone de RonanC
let popRonan=null
let msgRonan=null
WA.room.onEnterZone("Ronan", () => {
    popRonan=WA.ui.displayActionMessage({
        message: "Parler à Ronan CARON",
        callback: () => {
            msgRonan=WA.ui.openPopup("targetHaut", "Je represente l'offre Cloud & Container consiste a moderniser les socles d'hébergement,\n par exemple faire des move to cloud ou de la conteneurisation", [{
                label: "Close",
                className: "primary",
                callback: (popup) => {
                    popup.close()
                }
            }]);
            WA.room.onLeaveZone("Ronan",()=>{
                msgRonan.close();
            });
        ;}
    })
})
WA.room.onLeaveZone("Ronan",()=>{
    popRonan.remove();
});


// Zone de Robot
let popRobot=null
let msgRobot=null
WA.room.onEnterZone("Robot", () => {
    popRobot=WA.ui.displayActionMessage({
        message: "Parler à RobOps",
        callback: () => {
            msgRobot=WA.ui.openPopup("targetHaut", "Bon.Jour Je M'app.Elle ROBOPS ! \n Tu peux Con.Tac.ter mOn E.Qui.pE Sur ces MailS : \n - infrastructureandcloudcomputingcommunity@wavestone.com Pour des In.fOs sur le fOnd \n - wod_all-nextgenit@wavestone.com pOur Con.trI.bUer a la Com.Unau.Te Next.GEn \n - wop-ida-nextgenit@wavestone.com poUr dEs de.Man.dEs Bu.si.NESS", [{
                label: "Close",
                className: "primary",
                callback: (popup) => {
                    popup.close()
                }
            }]);
            WA.room.onLeaveZone("Robot",()=>{
                msgRobot.close();
            });
        ;}
    })
})
WA.room.onLeaveZone("Robot",()=>{
    popRobot.remove();
});


//Zone de Yves
let jokes ={1:{'joke':"Que se passe t’il quand deux poissons s’énervent ?",'sol':'Le thon monte'},
            2:{'joke':"Quel est le comble pour un plombier ?",'sol':'Que ses clients prennent la fuite !'},
            3:{'joke':"Pourquoi les mamies sont-elles très efficaces pour faire le ménage ?",'sol':'Car elles ont 80 balais.'},
            4:{'joke':"Comment appelle t’on un lion qui se rebelle ?",'sol':'Une rébellion'},
            5:{'joke':"Que dit Frodon devant sa maison ?",'sol':'C’est là que j’hobbit…'},
            6:{'joke':"Comment appelle-t-on une chauve-souris qui a des cheveux ?",'sol':'Une souris'},
            7:{'joke':"Pourquoi Harry Potter chuchotte ?",'sol':' Parce que Dumbledore…'},
            8:{'joke':"J’ai raconté une blague à un Parisien…, tu sais ce qu'il a fait ?",'sol':'Il a pas ri…'},
            9:{'joke':"Est-ce que faire des gâteaux d’instinct C ‘est avoir la pate à tarte innée ?"},
            10:{'joke':"C’est l’histoire d’un pingouin qui respire par les fesses Un jour il s’assoit et il meurt."},
            11:{'joke':"Quel fruit le poisson déteste-il le plus ?",'sol':'La pêche.'},
            12:{'joke':"Pourquoi les citrouilles sont heureuses ?",'sol':'Car où qu’elles aillent, leurs potes iront !'},
            13:{'joke':"Comment on appelle une bagarre entre une mouche et un escargot ?",'sol':'Une escarmouche'},
            14:{'joke':"Que crie un donut sur la plage ?",'sol':'Hey, je vais me beignet !!!'},
            15:{'joke':"Quelle est la couleur du virus de la grippe ?",'sol':'Gris pâle'},
            16:{'joke':"Qu’est-ce que la théière dit à l’ascenseur ?",'sol':'« Je veux monter »'},
            17:{'joke':"Qu’est-ce qu’on dit d’une chaussure curieuse ?",'sol':'Qu’elle se mêle de tout'},
            18:{'joke':"Pourquoi les marchands de savon font fortune ?",'sol':'Car leurs clients les savent honnêtes !'},
            19:{'joke':"C’est quoi une pomme dauphine ?",'sol':'C’est celle qui a fini 2eme à Miss patate'},
            20:{'joke':"Que font les dinosaures quand ils n’arrivent pas à se mettre d’accord ?",'sol':'Un tirajosor…'},
            }

let YvesA=null
WA.room.onEnterZone('Yves', () => {
    YvesA=WA.ui.displayActionMessage({
        message: "Parler à Yves",
        callback: () => {
        WA.controls.disablePlayerControls()
        x= Math.floor(Math.random()*Object.keys(jokes).length)+1
        let button=''
            if ('sol' in jokes[x]){
                button="Je ne sais pas"
            }
            else{
                button="close"
            }
        WA.ui.openPopup("targetBas", jokes[x]['joke'], [{
                    label: button,
                    className: "primary",
                    callback: (popup) => {
                        popup.close()
                        if(button=="Je ne sais pas"){
                        WA.ui.openPopup("targetBas", jokes[x]['sol'], [{
                            label: "Close",
                            className: "primary",
                            callback: (popup) => {
                                popup.close()
                                WA.controls.restorePlayerControls()
                            }
                        }])}
                        else{
                            WA.controls.restorePlayerControls()
                        };
                    }
                }]);
            ;}})})

WA.room.onLeaveZone("Yves",()=>{
            YvesA.remove()
})
