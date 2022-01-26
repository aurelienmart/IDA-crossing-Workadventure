
//popup zone de travaux escaliers
let travaux= null;

WA.room.onEnterZone('myZone', () => {
    travaux = WA.ui.openPopup("popup1", 'Cette zone est en travaux, revenez plus tard', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('myZone',() =>{
	travaux.close();
});

//popup intro
let popintro= null;

WA.room.onEnterZone('start', () => {
    popintro = WA.ui.openPopup("intro", 'Bienvenue au 16eme étage, pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveZone('start',() =>{
	popintro.close();
});

let waveplace=null;
WA.room.onEnterZone('waveplace', () => {
    waveplace=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour accéder à Waveplace",
        callback: () => {
            WA.nav.openTab("https://digiplace.sharepoint.com/sites/waveplace/fr-fr/Pages/default.aspx")
        }
    })
});

WA.room.onLeaveZone('waveplace',()=>{
    waveplace.remove();
})

let rick=null;
WA.room.onEnterZone('rick', () => {
    rick=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour accéder à Waveplace",
        callback: () => {
            WA.nav.openTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
    })
});

WA.room.onLeaveZone('rick',()=>{
    rick.remove();
})

let cafe=null;
WA.room.onEnterZone('cafe', () => {
    cafe=WA.ui.displayActionMessage({
        message: "Appuyez sur Espace pour rejoindre un café virtuel",
        callback: () => {
            WA.nav.openTab("https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2YwNTliNzItYmVjMy00NTU0LTk3ZTYtZGMwNjc2ZDg5MmZj%40thread.v2/0?context=%7b%22Tid%22%3a%225de96c96-c87c-4dce-aad9-f5c557b52ac1%22%2c%22Oid%22%3a%2294c18ea7-e1f3-443e-8359-291e5072f5dc%22%7d")
        }
    })
});

WA.room.onLeaveZone('cafe',()=>{
    cafe.remove();
})

let memeA=null;
let meme=null;
WA.room.onEnterZone('zonememe', () => {
    memeA=WA.ui.displayActionMessage({
        message: "Interagir",
        callback: () => {
            meme=WA.ui.openPopup('targetmeme','A.D: Hey!.. Psssssssst!... Tu veux voir ma collection de memes ?!',
            [{label:'Oui avec plaisir',className:'primary',callback:(popup)=>
            {popup.close();WA.nav.openTab("https://teams.microsoft.com/l/channel/19%3ac8e919ce875d4c12a0d8e4fc617ada51%40thread.tacv2/Feel%2520good%2520-%2520coffee?groupId=2bac874a-c4bd-407e-ab0a-e77b00e9f609&tenantId=5de96c96-c87c-4dce-aad9-f5c557b52ac1")}},
            {label:" Non j'ai du boulot" ,className:'primary',callback:(popup)=>{
                popup.close();}}])
        }
    })
});

WA.room.onLeaveZone('zonememe',() =>{
    memeA.remove();
    if (meme!=null){
        meme.close()
    }
    });

let form=null;
    WA.room.onEnterZone('form', () => {
        form=WA.ui.displayActionMessage({
            message: "Appuyez sur Espace pour remplir le questionnaire WorkAdventure",
            callback: () => {
                WA.nav.openTab("https://forms.office.com/Pages/ResponsePage.aspx?id=lmzpXXzIzk2q2fXFV7UqwY5R1YjwdBBJjpwFIWT31_1UMk41SjIzVDRHWkRCOTI3UUhLUTVPSE9UTy4u")
            }
        })
    });

    WA.room.onLeaveZone('form',() =>{
        form.remove();
    });

    let mounirA=null;
    let mounir=null;
    WA.room.onEnterZone('MounirJ', () => {
        mounirA=WA.ui.displayActionMessage({
            message: "Parler à Mounir",
            callback: () => {
                mounir=WA.ui.openPopup('MounirJ',"J'écris pour NextGen, je répands le DevOps, je coache en Blockchain, et je double commit.",
                [{label:'Close',className:'primary',callback:(popup)=>
                {popup.close();}}])}
        })
    });
    
    WA.room.onLeaveZone('MounirJ',() =>{
        mounirA.remove();
        if(mounir!=null){
        mounir.close()}
        });



let oliviaA=null;
let olivia=null;
WA.room.onEnterZone('OliviaD', () => {
    oliviaA=WA.ui.displayActionMessage({
        message: "Parler à Olivia",
        callback: () => {
            olivia=WA.ui.openPopup('OliviaD',"Jeune CDI, référente cooptation et ambassadrice des COWS, je suis toujours partante pour participer à des activités internes avec la famille IDA",
            [{label:'Close',className:'primary',callback:(popup)=>
            {popup.close();}}])}
    })
});

WA.room.onLeaveZone('OliviaD',() =>{
    oliviaA.remove();
    if(olivia!=null){
    olivia.close()}
    });

let maximeA=null;
let maxime=null;
WA.room.onEnterZone('MaximeB', () => {
    maximeA=WA.ui.displayActionMessage({
        message: "Parler à Maxime",
        callback: () => {
            maxime=WA.ui.openPopup('MaximeB',"Ci-gît le tout premier régisseur IDA Live, fuyez si vous le pouvez encore !",
            [{label:'Close',className:'primary',callback:(popup)=>
            {popup.close();}}])}
    })
});
WA.room.onLeaveZone('MaximeB',() =>{
    maximeA.remove();
    if(maxime!=null){
        maxime.close()
    }
    
    });



