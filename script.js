const bootBtn = document.getElementById("bootBtn");
const bootText = document.getElementById("bootText");
const progress = document.getElementById("progress");

const screens = document.querySelectorAll(".screen");


function showScreen(id){

screens.forEach(screen=>{
screen.classList.remove("active");
});

document.getElementById(id).classList.add("active");

}


function typeWriter(element,text,speed=35){

element.innerHTML="";

let i=0;

let timer=setInterval(()=>{

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){
clearInterval(timer);
}

},speed);

}


bootBtn.addEventListener("click",()=>{

bootBtn.style.display="none";

bootSystem();

});


function bootSystem(){

let value=0;

typeWriter(
bootText,
`Initializing A.S.T.R.A...

Loading neural core...

Please wait...`
);


let timer=setInterval(()=>{

value++;

progress.style.width=value+"%";

if(value>=100){

clearInterval(timer);

setTimeout(scanStage,1000);

}

},45);

}



function scanStage(){

showScreen("scan");

const scanText=document.getElementById("scanText");


typeWriter(
scanText,
`Scanning system...

Checking network...

Checking local memory...

Checking device clock...

Checking encrypted storage...

No threat detected.

Searching archive...`
);


setTimeout(()=>{

scanText.innerHTML+=

`<br><br>UNKNOWN ARCHIVE DETECTED`;

},8500);


setTimeout(()=>{

scanText.innerHTML+=

`<br>Archive age : 25 Years`;

},10500);


setTimeout(()=>{

scanText.innerHTML+=

`<br>Owner : UNKNOWN`;

},12200);

}



const nextButtons=document.querySelectorAll(".next");


nextButtons.forEach(btn=>{

btn.addEventListener("click",()=>{


const current=document.querySelector(".screen.active");


if(current.id==="scan"){

archiveStage();

}

else if(current.id==="archive"){

filesStage();

}


});

});



function archiveStage(){

showScreen("archive");

const archiveText=document.getElementById("archiveText");


typeWriter(
archiveText,
`Permission Granted...

Recovering encrypted archive...

Please wait...`
);


setTimeout(()=>{

archiveText.innerHTML+=

`<br><br>Decrypting memories...`;

},4000);


setTimeout(()=>{

archiveText.innerHTML+=

`<br>12%`;

},5200);


setTimeout(()=>{

archiveText.innerHTML+=

`<br>38%`;

},6500);


setTimeout(()=>{

archiveText.innerHTML+=

`<br>61%`;

},7700);


setTimeout(()=>{

archiveText.innerHTML+=

`<br>89%`;

},9000);


setTimeout(()=>{

archiveText.innerHTML+=

`<br>100%<br>Recovery Complete`;

},10500);

}



function filesStage(){

showScreen("files");


const folders=document.querySelectorAll(".folder");


folders[0].onclick=function(){

alert("Memory_01\n\nSome memories never disappear.");

}


folders[1].onclick=function(){

alert("Memory_02\n\nSomeone prepared something for today.");

}


folders[2].onclick=function(){

alert("Memory_03\n\nLaughter detected.");

}


folders[3].onclick=function(){

alert("Memory_04\n\nEmotional data cannot be analyzed.");

}


folders[4].onclick=function(){

showScreen("decrypt");

}

}



const unlock=document.getElementById("unlock");


unlock.addEventListener("click",()=>{


const code=document
.getElementById("code")
.value
.trim()
.toUpperCase();


if(code==="LUNA"){

aiStage();

}

else{

alert("ACCESS DENIED");

}


});



function aiStage(){

showScreen("ai");

const aiText=document.getElementById("aiText");


typeWriter(
aiText,
`Identity Restored...

Name : Luna

Analyzing archive...

Possible answer found.

Friendship.

Mission Objective Located.

Make Luna Smile.`
);

}



document
.getElementById("continueAI")
.addEventListener("click",finalStage);



function finalStage(){

showScreen("final");


const finalText=document.getElementById("finalText");


typeWriter(
finalText,
`Mission Completed.

Three people requested today's mission.

Their only request...

was that you smile today.

Happy Birthday, Luna.`
);


}



document
.getElementById("gift")
.addEventListener("click",()=>{

window.location.href="https://t.me/+cR5XiyZZUlQ1ZWFk";

});
function openLore() {
    window.open("LORE.txt", "_blank");
}
