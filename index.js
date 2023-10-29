var timesClicked = 0;

function doubleClick(element,textElement){
    timesClicked++;
    if (timesClicked % 2 === 0){
        element.style.width = "10rem";
        element.style.height = "100px";
        document.getElementById("aboutMe1").style.marginTop ="45rem";
        document.getElementById("aboutMe2").style.marginTop ="45rem";
        document.getElementById("personalContainer").style.marginTop ="39rem";
    } else {
        element.style.width = "10rem";
        element.style.height = "10rem";
        document.getElementById("aboutMe1").style.marginTop ="60rem";
        document.getElementById("aboutMe2").style.marginTop ="60rem";
        document.getElementById("personalContainer").style.marginTop ="50rem";
    }  
    displayTextOnClick(textElement);
}

function displayTextOnClick(textElement){
    console.log(textElement)
    if (timesClicked % 2 === 0){
        textElement.style.display= "none";


    }else{
        textElement.style.display= "flex";

    } 
}

/*
if(element.style.height === 10rem){
    document.getElementById("aboutMe1").style.marginTop ="60rem";
    document.getElementById("aboutMe2").style.marginTop ="60rem";
}
else{
    document.getElementById("aboutMe1").style.marginTop ="45rem";
    document.getElementById("aboutMe2").style.marginTop ="45rem";
}
*/