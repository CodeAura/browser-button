var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Lamp aanzetten';
document.body.appendChild(btn);
document.body.style.backgroundColor = 'black'

// schijf hier tussen je code
btn.onclick = function() {Lampaanzetten()}

function Lampaanzetten() {
    if (btn.innerHTML == "Lamp uitzetten") {
        btn.innerHTML = "Lamp aanzetten"
        document.body.style.backgroundColor = "black";
        console.log("Lamp uitgezet")
    } else {
        btn.innerHTML = "Lamp uitzetten";
        document.body.style.backgroundColor = "yellow"
        console.log("Lamp aangezet")
    }
}