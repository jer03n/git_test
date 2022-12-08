const menuButton = document.getElementById("navMain")
console.log("menuButton",menuButton)

const menuButtonShow = function() { menuButton.classList.toggle("show")};
console.log("menuButtonShow",menuButtonShow)

const textDiv = document.getElementById('text')
console.log("text", text)

const changeBlue = document.getElementById("blue-bg");
changeBlue.addEventListener('click', function onClick(e) {
    document.body.style.backgroundColor = 'lightblue';
    textDiv.innerHTML = "BLUE";
})

const changeRed = document.getElementById("red-bg");
changeRed.addEventListener('click', function onClick(e) {
    document.body.style.backgroundColor = '#d85d5d';
    textDiv.innerHTML = "RED";
})

const changeGreen = document.getElementById("green-bg");
changeGreen.addEventListener('click', function onClick(e) {
    document.body.style.backgroundColor = 'lightgreen';
    textDiv.innerHTML = "GREEN";
})

const changeYellow = document.getElementById("yellow-bg");
changeYellow.addEventListener('click', function onClick(e) {
    document.body.style.backgroundColor = '#d5d55a';
    textDiv.innerHTML = "YELLOW";
})

const changeHome = document.getElementById("home");
changeHome.addEventListener('click', function onClick(e) {
    document.body.style.backgroundColor = '#f1f1f1';
    textDiv.innerHTML = "";
})

