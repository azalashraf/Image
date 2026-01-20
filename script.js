const people = {
    "adiba": `Tmhey kia likhun?
Dost likhun, hamdum likhun, humsafar likhun,
Ya piyar likhun?
Dil kehta duniya ke sarey khoobsurat alfaz ko yukja krke ek payri se baat likhun,
tmhey apna yrr likhun, tmhey apni kul kaiyenat likhun`,

    "azal": `hm khud ke liye kiu likhunga`
};

// bind click event safely
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("revealBtn").addEventListener("click", checkName);
});

function checkName(){
    const input = document.getElementById("inputName").value.trim().toLowerCase();
    
    if(people[input]){
        showPopup(people[input]);
        spawnHearts();
    } else {
        alert("Its not you😅");
    }
}

function showPopup(message){
    const popup = document.getElementById("popup");
    popup.innerHTML = message.replace(/\n/g, "<br>");
    popup.style.bottom = "30px";
}

function spawnHearts(){
    for(let i=0;i<25;i++){
        let h=document.createElement("div");
        h.innerHTML="💗";
        h.classList.add("heart");
        h.style.left=Math.random()*100 + "vw";
        h.style.animationDuration=(8 + Math.random()*3) + "s"; 
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),12000);
    }
}
