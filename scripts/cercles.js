
WA.room.onEnterZone('start', () => {
    WA.controls.disablePlayerControls();
    res1 = WA.ui.openPopup("popup", "Bienvenue dans le Carré des Cercles, quel cercle souhaites-tu consulter ?", [{
        label: "NEXT GEN IT",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOPIDA-BUSINESS/SitePages/Next-Gen-IT.aspx')
        }
    },
    {
        label: "M&A",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOPIDA-BUSINESS/SitePages/M%26A-and-Large-Infrastructure-Project.aspx')
        }
    },
    {
        label: "APM",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/WOPIDA-BUSINESS/SitePages/Amazing-Platform-Makers--.aspx?from=SendByEmail&e=QrhIcr8h50G6x8cZql-qhw&at=9")
        }
    },
    {
        label: "DBT",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOPIDA-BUSINESS/SitePages/Digital-Business-Transformation.aspx')
        }
    },
    {
        label: "CORE AI",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab('https://digiplace.sharepoint.com/sites/WOPIDA-BUSINESS/SitePages/Core-AI.aspx')
        }
    },
    {
        label: "repartir",
        className: "secondary",
        callback: (popup) => {
            WA.nav.goToRoom('../maps/elevator.json')
            
        }
    }
]);
});