const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// générer des colors  hex de manière alèatoire, et la combinaision de couleur doit être celle du body et sa valeur doit s'afficher



btn.addEventListener("click", function() {
    let hexColor = "#";
    for(let i = 0 ; i < 6; i++) {
        hexColor += hex[randomColor()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

});

function randomColor(){
    return Math.floor((Math.random() * hex.length));
}