const bootBtn = document.getElementById("bootBtn");
const progress = document.getElementById("progress");
const bgSound = document.getElementById("bgSound");

const screens = document.querySelectorAll(".screen");

function show(id){
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function type(el,text,i=0){
    el.innerHTML="";
    let t=setInterval(()=>{
        el.innerHTML += text.charAt(i);
        i++;
        if(i>=text.length) clearInterval(t);
    },30);
}


/* SOUND */
function startSound(){
    if(bgSound){
        bgSound.volume = 0.3;
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

            setTimeout(()=>{
                show("scan");
                type(
                document.getElementById("scanText"),
                `Signal unstable...

Interference detected...

Recalibrating system...`
                );
            },800);

        }

    },30);

};


/* SCAN */
document.querySelectorAll(".next")[0].onclick=()=>{

    show("archive");

    type(
    document.getElementById("archiveText"),
    `Scanning...

Unknown archive detected...

Recovering data...`
    );


    setTimeout(()=>{

        document.getElementById("archiveText").innerHTML +=
        `<br><br>Archive Age: 25 Years<br>Owner: UNKNOWN`;

    },3000);

};



/* ARCHIVE */

document.querySelectorAll(".next")[1].onclick=()=>{

    show("files");

    const folders=document.querySelectorAll(".folder");


    folders[0].onclick=()=>{
        alert("Memory_01\n\nSome memories never disappear.");
    };


    folders[1].onclick=()=>{
        alert("Memory_02\n\nSomeone prepared something for today.");
    };


    folders[2].onclick=()=>{
        alert("Memory_03\n\nLaughter detected.");
    };


    folders[3].onclick=()=>{
        alert("Memory_04\n\nEmotional data cannot be analyzed.");
    };


    folders[4].onclick=()=>{
        show("decrypt");
    };

};



/* PASSWORD */

document.getElementById("unlock").onclick=()=>{

let code=document.getElementById("code").value
.toUpperCase()
.trim();


if(code==="LUNA"){

    nameEchoStage();

}else{

    alert("ACCESS DENIED");

}

};



/* AI */

function nameEchoStage(){

show("ai");


type(
document.getElementById("aiText"),
`Analyzing memory fragments...

Searching identity traces...

Pattern detected.`
);


setTimeout(()=>{

document.getElementById("aiText").innerHTML +=
`<br><br>L U N A`;

},4500);



}



/* FINAL */

document.getElementById("continueAI").onclick=()=>{

show("final");


type(
document.getElementById("finalText"),
`Mission Complete.

Purpose: Make Luna smile.

Happy Birthday.`
);

};




/* GIFT */

document.getElementById("gift").onclick=()=>{

window.location.href="https://t.me/+cR5XiyZZUlQ1ZWFk";

};




/* LORE */

function openLore(){

window.open("LORE.txt","_blank");

}
