var timesClicked = 0;

function doubleClick(element){
    timesClicked++;
    if (timesClicked % 2 === 0){
        element.style.width = "100px";
        element.style.height = "auto";
        document.getElementById("aboutMe1").style.marginTop ="45rem";
        document.getElementById("aboutMe2").style.marginTop ="45rem";
        document.getElementById("personalContainer").style.marginTop ="35rem";

    } else {
        element.style.width = "80rem";
        element.style.height = "90rem";
        document.getElementById("aboutMe1").style.marginTop ="60rem";
        document.getElementById("aboutMe2").style.marginTop ="60rem";
        document.getElementById("project").style.marginTop ="00rem";
        document.getElementById("project").style.paddingTop ="0rem";


    }

}

