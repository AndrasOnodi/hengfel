/*
* File: app.js
* Author: Ónodi András
* Copyright: 2024, Ónodi András
* Group: Szoft I-2-N
* Date: 2024-04-17
* Github: https://github.com/AndrasOnodi/
* Licenc: GNU GPL
*/

const inputnum = document.getElementById("inputnum");
const mathButton = document.getElementById("mathButton");
const result = document.getElementById("result");

mathButton.addEventListener('click', () => {
    let num = inputnum.value;
    let numStr;
    if(num == '1') {
        numStr = 'egy';
    }else if(num == '2') {
        numStr = 'kettő';
    }else if(num == '3') {
        numStr = 'három';
    }else if(num == '4') {
        numStr = 'négy';
    }else if(num == '5') {
        numStr = 'öt';
    }else if(num == '6') {
            numStr = 'hat';
    }else if(num == '7') {
        numStr = 'hét';
    }else if(num == '8') {
        numStr = 'nyolc';
    }else if(num == '9') {
        numStr = 'kilenc';
    }else {
        numStr = 'ismeretlen'
    }

    console.log(num)
});