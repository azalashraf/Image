const correctName = "Azal"; // unlock name

function checkName(){
    const user = document.getElementById("inputName").value.trim();
    if(user.toLowerCase() === correctName.toLowerCase()){
        document.getElementById("revealMessage").style.opacity = 1;
        showPopup();
        spawnHearts();
    }else{
        alert("Wrong name 😅 Try again!");
    }
}

function showPopup(){
    document.getElementById("popup").style.bottom = "30px";
}

function spawnHearts(){
    for(let i=0; i<15; i++){
        let h = document.createElement("div");
        h.innerHTML="💗";
        h.classList.add("heart");
        h.style.left = Math.random()*100 + "vw";
        h.style.animationDuration = (2 + Math.random()*1.5) + "s";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),3000);
    }
}
