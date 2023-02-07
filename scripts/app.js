function init() {
    const grid = document.querySelector('.grid')
    const gameWidth = 3
    const cellAmmt = gameWidth ** 2

    let currentPlayer = 'x'

    const cells = []
    const gameArray = new Array(cellAmmt).fill(' ')

    console.log(gameArray)
    

    const createBoard = () => {
        for (let i = 0; i < cellAmmt; i++) {
            const cell = document.createElement('div')
            cell.id = i
            cell.textContent = i
            cell.classList.add('cell')

            cells.push(cell)
            grid.appendChild(cell)
        }
    }

    const handleClick = (e) => {
        e.target.classList.add(currentPlayer)
        gameArray[e.target.id] = currentPlayer
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
    }
    const checkWin = (arr) => {
        
    }

    createBoard()
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick)
    })
}

window.addEventListener('DOMContentLoaded', init)