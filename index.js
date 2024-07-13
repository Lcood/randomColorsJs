const colors = ["#ff6e6c", "#1f1135", "#e2daeb", "#004643", "#f9bc60","#f582ae", "#f582ae", "#f582ae","#f582ae","#bae8e8" ];

const btn = document.getElementById('btn');

const color = document.querySelector(".color");

// changer le body de couleurs de manière aléatoire à chaque fois que je clique sur le bouton et la valeur de la colour doit être afficher

btn.addEventListener("click", function () {
    randomNumber = randomColor();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function randomColor(){
    return Math.floor(Math.random() * colors.length);
}

