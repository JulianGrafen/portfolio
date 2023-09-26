var timesClicked = 0;

function doubleClick(){

    var element = document.getElementById("socialview");

    timesClicked++;
    if (timesClicked % 2 === 0){
        element.style.width = "100px";
        element.style.height = "auto";
    } else {
        element.style.width = "60rem";
        element.style.height = "10rem";
        document.getElementById("aboutMe1").style.marginTop ="60rem";
        document.getElementById("aboutMe2").style.marginTop ="60rem";
        element.toggleClass("transform-active")

    }

}

