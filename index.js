var timesClicked = 0;

function doubleClick(element){
    timesClicked++;
    console.log(timesClicked)
    if (timesClicked % 2 === 0){
        
        //About me Layers
        document.getElementById("aboutMe1").style.marginTop ="45rem";
        document.getElementById("aboutMe2").style.marginTop ="45rem";
        document.getElementById("personalContainer").style.marginTop ="39rem";
        document.getElementById("myTools").style.marginTop ="60rem";





    } else {
    
        //About me Layers
        document.getElementById("aboutMe1").style.marginTop ="60rem";
        document.getElementById("aboutMe2").style.marginTop ="60rem";
        document.getElementById("personalContainer").style.marginTop ="50rem";
        document.getElementById("myTools").style.marginTop ="70rem";



        



        




    }


}

