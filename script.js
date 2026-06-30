const screens = document.querySelectorAll(".screen");

const bootBtn = document.getElementById("bootBtn");
const progress = document.getElementById("progress");
const bgSound = document.getElementById("bgSound");

function showScreen(id){
    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


function typeWriter(element, text, speed = 35){

    element.innerHTML = "";

    let i = 0;

    let timer = setInterval(()=>{

        element.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(timer);
        }

    }, speed);
}



/* BOOT */

bootBtn.addEventListener("click", ()=>{


    if(bgSound){
        bgSound.volume = 0.3;
        bgSound.play().catch(()=>{});
    }


    bootBtn.style.display="none";


    let value = 0;


    let loading = setInterval(()=>{

        value++;

        progress.style.width = value + "%";


        if(value >= 100){

            clearInterval(loading);


            showScreen("scan");


            typeWriter(
            document.getElementById("scanText"),
            `Signal unstable...

Interference detected...

Recalibrating system...`
            );

        }


    },40);


});




/* SCAN */

document
.querySelector("#scan .next")
.addEventListener("click",()=>{


showScreen("archive");


typeWriter(
document.getElementById("archiveText"),
`Scanning...

Unknown archive detected...

Recovering data...`
);


});




/* ARCHIVE */

document
.querySelector("#archive .next")
.addEventListener("click",()=>{


showScreen("files");


});





/* FILES */

const folders = document.querySelectorAll(".folder");


folders[0].onclick = ()=>{
alert("Memory_01\n\nSome memories never disappear.");
};


folders[1].onclick = ()=>{
alert("Memory_02\n\nSomeone prepared something for today.");
};


folders[2].onclick = ()=>{
alert("Memory_03\n\nLaughter detected.");
};


folders[3].onclick = ()=>{
alert("Memory_04\n\nEmotional data cannot be analyzed.");
};


folders[4].onclick = ()=>{

showScreen("decrypt");

};





/* PASSWORD */

document
.getElementById("unlock")
.addEventListener("click",()=>{


let code =
document.getElementById("code")
.value
.trim()
.toUpperCase();



if(code === "LUNA"){


showScreen("ai");


typeWriter(
document.getElementById("aiText"),
`Analyzing memory fragments...

Searching identity traces...

Pattern detected.

L U N A`
);


}else{


alert("ACCESS DENIED");


}


});






/* AI */

document
.getElementById("continueAI")
.addEventListener("click",()=>{


showScreen("final");


typeWriter(
document.getElementById("finalText"),
`Mission Complete.

Purpose:
Make Luna smile.

Happy Birthday.`
);


});






/* GIFT */

document
.getElementById("gift")
.addEventListener("click",()=>{


window.location.href =
"https://t.me/+cR5XiyZZUlQ1ZWFk";


});





/* LORE */

function openLore(){

window.open("LORE.txt","_blank");

}
