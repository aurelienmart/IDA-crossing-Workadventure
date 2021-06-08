WA.sendChatMessage('Bienvenue au 17eme étage, pensez à autoriser les pop-ups depuis ce site et à activer le son afin de profiter de toutes les fonctionnalités.','La team IDA Crossing');

openPopup(targetObject: "Popup", message: "test", buttons:  [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);