const bootBtn=document.getElementById("bootBtn");
const progress=document.getElementById("progress");
const bgSound=document.getElementById("bgSound");

const screens=document.querySelectorAll(".screen");

function show(id){
screens.forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

function type(el,text,i=0){
el.innerHTML="";
let t=setInterval(()=>{
el.innerHTML+=text[i];
i++;
if(i>=text.length) clearInterval(t);
},30);
}

/* SOUND */
function startSound(){
if(bgSound){
bgSound.volume=0.3;
bgSound.play().catch(()=>{});
}
}

/* BOOT */
bootBtn.onclick=()=>{
startSound();
bootBtn.style.display="none";

let p=0;

let load=setInterval(()=>{

p++;

progress.style.width=p+"%";

if(p>=100){

clearInterval(load);

setTimeout(()=>show("scan"),800);

}

},30);

};


/* GLITCH */

function glitchEffect(){

document.body.classList.add("glitch");

setTimeout(()=>{

document.body.classList.remove("glitch");

},400);

}


/* INTERFERENCE */

function interferenceStage(){

show("scan");

type(
document.getElementById("scanText"),
`Signal unstable...

Interference detected...

Recalibrating system...`
);


setTimeout(()=>{

document.getElementById("scanText").innerHTML+=
`<br><br>Unknown signal pattern found.`;

},3500);


setTimeout(()=>{

document.querySelectorAll(".next")[0].onclick();

},7000);

}


/* SCAN */

document.querySelectorAll(".next")[0].onclick=()=>{

interferenceStage();

};




/* ARCHIVE */

document.querySelectorAll(".next")[1].onclick=()=>{

show("archive");

type(
document.getElementById("archiveText"),
`Scanning...

Unknown archive detected...

Recovering data...`
);


setTimeout(()=>{

document.getElementById("archiveText").innerHTML+=
`<br>Archive Age: 25 Years<br>Owner: UNKNOWN`;

},3000);

};




/* FILES */

setTimeout(()=>{


document.querySelectorAll(".next")[1].onclick=()=>{


show("files");


document.querySelectorAll(".folder")[0].onclick=()=>{

alert("Memory_01\n\nSome memories never disappear.");

};


document.querySelectorAll(".folder")[1].onclick=()=>{

alert("Memory_02\n\nSomeone prepared something for today.");

};


document.querySelectorAll(".folder")[2].onclick=()=>{

alert("Memory_03\n\nLaughter detected.");

};


document.querySelectorAll(".folder")[3].onclick=()=>{

alert("Memory_04\n\nEmotional data cannot be analyzed.");

};


document.querySelectorAll(".folder")[4].onclick=()=>{

show("decrypt");

};


};


},500);




/* PASSWORD */

document.getElementById("unlock").onclick=()=>{


let code=document.getElementById("code").value.toUpperCase();


if(code==="LUNA"){

nameEchoStage();

}else{

alert("ACCESS DENIED");

}

};




/* NAME ECHO */

function nameEchoStage(){

show("ai");


type(
document.getElementById("aiText"),
`Analyzing memory fragments...

Searching identity traces...

Pattern detected.`
);



setTimeout(()=>{

glitchEffect();


document.getElementById("aiText").innerHTML+=
`<br><br>L U N A`;


},4500);



setTimeout(()=>{

show("final");


type(
document.getElementById("finalText"),
`Mission Complete.

Purpose: Make Luna smile.

Happy Birthday.`
);


},11000);


}




/* FINAL */

document.getElementById("continueAI").onclick=()=>{

show("final");

};




/* GIFT */

document.getElementById("gift").onclick=()=>{

window.location.href="https://t.me/+cR5XiyZZUlQ1ZWFk";

};




/* LORE */

function openLore(){

window.open("LORE.txt","_blank");

}
