const character = document.getElementById("character")
const game = document.getElementById("game")
let interval
let both = 0
let counter = 0

function moveLeft() {
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) {
        character.style.left = left - 2 + "px";
    }
}

function moveRight() {
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    if (left < 380) {
        character.style.left = left + 2 + "px";
    }
}

document.addEventListener("keydown", event => {
    if (both === 0) {

        both++;

        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1)
        }
    
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1)
        }
    }

})

document.addEventListener("keyup", event => {
    clearInterval(interval)
    both = 0
})

setInterval(function() {
    let blockLast = document.createElementById("block" + (counter - 1))
    let holeLast = document.createElementById("hole" + (counter - 1))

    if (counter > 0) {
        let blockLastTop = 
        parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        let holeLastTop = 
        parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    let block = document.createElement("div")
    let hole = document.createElement("div")
    block.setAttribute("class", "block")
    hole.setAttribute("class", "hole")
    block.setAttribute("id", "block" + counter)
    hole.setAttribute("id", "hole" + counter)
    block.style.top = blockLastTop + 100 + "px"
    hole.style.top = holeLastTop + 100 + "px"
    let random = Math.floor(Math.random() * 360)
    hole.style.left = random + "px"
    game.appendChild(block)
    game.appendChild(hole)
    counter++
},1)
