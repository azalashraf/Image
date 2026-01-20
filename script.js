// Person settings
const person1 = {
    name: "Adiba",
    message: "🤍 Tmhey kia likhun?
Dost likhun, hamdum likhun, humsar likhun,
Ya piyar likhun?
Dil kehta duniya ke sarey khoobsurat alfaz ko yukja krke ek payri se baat likhun ,
    tmhey apna yrr likhun ,tmhey apni kul kaiyenat likhun

  🤍",
    popupId: "popup1"
}

const person2 = {
    name: "Azal",
    message: "Khud ke liye message kiu hi likhnegey ",
    popupId: "popup2"
}

// Check for person 1
function checkPerson1(){
    const input = document.getElementById("name1").value.trim().toLowerCase();
    if(input === person1.name.toLowerCase()){
        showPopup(person1);
        spawnHearts();
    } else {
        alert("Its not you😅");
    }
}

// Check for person 2
function checkPerson2(){
    const input = document.getElementById("name2").value.trim().toLowerCase();
    if(input === person2.name.toLowerCase()){
        showPopup(person2);
        spawnHearts();
    } else {
        alert("Its not you 😅");
    }
}

// Show popup animation
function showPopup(person){
    const popup = document.getElementById(person.popupId);
    popup.innerHTML = person.message;
    popup.style.bottom = "30px";
}

// Hearts animation
function spawnHearts(){
    for(let i=0; i<15; i++){
        let h=document.createElement("div");
        h.innerHTML="💗";
        h.classList.add("heart");
        h.style.left = Math.random()*100+"vw";
        h.style.animationDuration = (2 + Math.random()*1.5)+"s";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),3000);
    }
}
