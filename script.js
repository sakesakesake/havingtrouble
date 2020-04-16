/* Hands-on Project 7-4
Honami Sasahara
4/15/2020
*/

"use strict" 
var delivInfo = "";
var delivSummery = document.getElementById("deliverTo");

function processDeliveryInfo(){
    var prop;
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = docuent.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;


    for(prop in delivInfo){
        delivSummery.innerHTML += "<p>" + delivInfo[prop] + "</p>";
        
        }
}

function previewOrder(){
    processDeliveryInfo();
    document.getElementsByTagName("section").style.display = "block";
}

function createEventListeners(){
    var trigger = document.getElementById("previewBtn");
    if (trigger.addEventListener){
        trigger.addEventListener("click",previewOrder, false);
    } else if (trigger.attachEvent){
        trigger.attachEvent("onclick",previewOrder);
    }
}
if (window.addEventListener){
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent){
    window.attachEvent("onload", createEventListeners);
}