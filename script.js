const bootBtn = document.getElementById("bootBtn");
const progress = document.getElementById("progress");
const bgSound = document.getElementById("bgSound");

const screens = document.querySelectorAll(".screen");

function show(id){
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function type(el,text){
    el.innerHTML="";
    let i=0;

    let timer=setInterval(()=>{
        el.innerHTML += text.charAt(i);
        i++;

        if(i >= text.length){
            clearInterval(timer);
        }

    },30);
}


/* BOOT */

bootBtn.onclick = ()=>{

    if(bgSound){
        bgSound.volume = 0.3;
        bgSound.play().catch(()=>{});
    }

    bootBtn.style.display="none";

    let p=0;

    let load=setInterval(()=>{

        p++;
        progress.style.width=p+"%";

        if(p>=100){

            clearInterval(load);

            show("scan");

            type(
            document.getElementById("scanText"),
            "Signal unstable...\n\nInterference detected...\n\nRecalibrating system..."
            );

        }

    },30);

};



/* SCAN → ARCHIVE */

document.querySelector("#scan .next").onclick = ()=>{

    show("archive");

    type(
    document.getElementById("archiveText"),
    "Scanning...\n\nUnknown archive detected...\n\nRecovering data..."
    );

};



/* ARCHIVE → FILES */

document.querySelector("#archive .next").onclick = ()=>{

    show("files");

};



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
show("decrypt");
};




/* PASSWORD */

document.getElementById("unlock").onclick = ()=>{

let code = document.getElementById("code").value
.toUpperCase()
.trim();


if(code === "LUNA"){

show("ai");

type(
document.getElementById("aiText"),
"Analyzing memory fragments...\n\nSearching identity traces...\n\nPattern detected.\n\nL U N A"
);

}

else{

alert("ACCESS DENIED");

}

};




/* AI → FINAL */

document.getElementById("continueAI").onclick = ()=>{

show("final");

type(
document.getElementById("finalText"),
"Mission Complete.\n\nPurpose: Make Luna smile.\n\nHappy Birthday."
);

};




/* GIFT */

document.getElementById("gift").onclick = ()=>{

window.location.href="https://t.me/+cR5XiyZZUlQ1ZWFk";

};



/* LORE */

function openLore(){

window.open("LORE.txt","_blank");

}
