document.addEventListener('DOMContentLoaded', () =>{

const grid = document.querySelector('.grid')
let widht = 10
let squares =[]

//create Board
function createBoard() {
    for(let i = 0; i < widht*widht; i++) {
        const square = document.createElement('div')
        square.setAttribute('id', i)
        grid.appendChild(square)
        squares.push(square)
    }
}

createBoard()



})