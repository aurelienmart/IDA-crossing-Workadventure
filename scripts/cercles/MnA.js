/* PopUp Entrée */
let popintro=null
let popup=null
WA.room.onEnterZone('start', () => {
    popintro = WA.ui.openPopup("target", 'Bienvenue dans la salle M&A \n Que veux-tu savoir ?', [{
        label: "Types d'opération",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/SitePages/Home.aspx")
        }
    },
    {
        label: "Sujets",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/SitePages/Home.aspx")
        }
    },
    {
        label: "Phases",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://digiplace.sharepoint.com/:p:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/_layouts/15/Doc.aspx?sourcedoc=%7BE2E49407-4F3E-43F1-87BE-8DB44213F368%7D&file=IS%26T%20M%26A%20Offer_V2%20202004.pptx&action=edit&mobileredirect=true')
        }
    },
    {
        label: "Structure",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://digiplace.sharepoint.com/:p:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/_layouts/15/Doc.aspx?sourcedoc=%7BE2E49407-4F3E-43F1-87BE-8DB44213F368%7D&file=IS%26T%20M%26A%20Offer_V2%20202004.pptx&action=edit&mobileredirect=true')
        }
    },
]);
});

WA.room.onLeaveZone('start', ()=>{
    if(popintro!=null){
    popintro.close()}
})

/* PopUP BD */
let popBD=null
let popBD2=null
WA.room.onEnterZone('BD', () => {
    popBD = WA.ui.openPopup("target", 'Que veux-tu savoir ?', [{
        label: "Missions types et références clés",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/SitePages/References.aspx")
        }
    },
    {
        label: "Business et propositions",
        className: "primary",
        callback: (popup) => {
            popBD.close()
            popBD2 = WA.ui.openPopup("target", 'Et plus précisément ?', [{
                label: "Vision du business",
                className: "primary",
                callback: (popup) => {
                    
                    WA.nav.openTab("https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/06 - Market watch?csf=1&web=1&e=3FDJQo")
                }
            },
            {
                label: "Pitchs",
                className: "primary",
                callback: (popup) => {
                    
                    WA.nav.openTab("https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/05 - Prospection meetings?csf=1&web=1&e=qLUTDv")
                }
            },
            {
                label: "Propositions commerciales",
                className: "primary",
                callback: (popup) => {
                    
                    WA.nav.openTab('https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/04 - Commercial proposals?csf=1&web=1&e=rNrLbH')
                }
            },
            {
                label: "Accélérateurs business",
                className: "primary",
                callback: (popup) => {
                    
                    WA.nav.openTab('https://digiplace.sharepoint.com/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents%20partages/Forms/AllItems.aspx?RootFolder=%2Fsites%2FWIC%2DISTMERGERSANDACQUISITION%2DPUBLIC%2FDocuments%20partages%2F05%20%2D%20Prospection%20meetings%2F1%20%2D%20Prospection%20tools%20%26%20Methodology&FolderCTID=0x012000748BF72FFF0E0348B9CC3AA3C5656710')
                }
            },
            {label:"close",
        className: "secondary",
    callback: (popup) =>{ 
        popup.close()}}
        ]);
           
        }
    }
]);
});

WA.room.onLeaveZone('BD', ()=>{
    if(popBD!=null){
    popBD.close()}

else if(popBD2!=null){
    popBD2.close()}
}
)

/* popUp KM */
let popKM=null
WA.room.onEnterZone('KM', () => {
    popKM = WA.ui.openPopup("target", 'Que veux-tu savoir ?', [{
        label: "Missions clés",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab("https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/09 - Mission key deliverables?csf=1&web=1&e=5Ey6wK")
        }
    },
    {
        label: "Interships",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab("https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/10 - Internships?csf=1&web=1&e=9k0n5C")
        }
    },
    {
        label: "Formations Sequoia",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://sequoia.wavestone-app.com/course/ist-ma-for-dummies/')
        }
    },
    {
        label: "Trainings",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/07 - Trainings?csf=1&web=1&e=H2RJ36')
        }
    },
    {
        label: "Methodology et convictions",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/08 - Methodology %26 Convictions?csf=1&web=1&e=FpVdXN')
        }
    },
]);
});

WA.room.onLeaveZone('KM', ()=>{
    if(popKM!=null){
    popKM.close()}
})

/* popUp MC */
let popMC=null
WA.room.onEnterZone('MC', () => {
    popKM = WA.ui.openPopup("target", 'Que veux-tu savoir ?', [{
        label: "REX vidéo Lagardère",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab("https://digiplace.sharepoint.com/:v:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/01 - Offer presentation/Video/REX/REX Lagard%C3%A8re Active  + pr%C3%A9sentation M%26A 300920.mp4?csf=1&web=1&e=ADZZIX")
        }
    },
    {
        label: "Pitchs",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab("https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/05 - Prospection meetings?csf=1&web=1&e=qLUTDv")
        }
    },
    {
        label: "Bridge M&A",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://digiplace.sharepoint.com/:p:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/_layouts/15/Doc.aspx?sourcedoc=%7B69A7B1ED-9F97-4162-A4A0-3208BABE530D%7D&file=W25%20Bridges%20-%20Put%20Wavestone%20M%26A%20offer%20on%20the%20map%20-%20EN%20-%202021.pptx&action=edit&mobileredirect=true')
        }
    },
    {
        label: "Tech4Students",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://digiplace.sharepoint.com/:f:/r/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents partages/11- Tech for students?csf=1&web=1&e=1SuRSX')
        }
    },
    {
        label: "Accélérateurs business",
        className: "primary",
        callback: (popup) => {
            
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/WIC-ISTMERGERSANDACQUISITION-PUBLIC/Documents%20partages/Forms/AllItems.aspx?RootFolder=%2Fsites%2FWIC%2DISTMERGERSANDACQUISITION%2DPUBLIC%2FDocuments%20partages%2F05%20%2D%20Prospection%20meetings%2F1%20%2D%20Prospection%20tools%20%26%20Methodology&FolderCTID=0x012000748BF72FFF0E0348B9CC3AA3C5656710')
        }
    }
]);
});

WA.room.onLeaveZone('MC', ()=>{
    if(popKM!=null){
    popKM.close()}
})

