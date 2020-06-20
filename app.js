document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        {
            name: '1',
            value: null
        },
        {
            name: '2',
            value: null
        },
        {
            name: '3',
            value: null
        },
        {
            name: '4',
            value: null
        },
        {
            name: '5',
            value: null
        },
        {
            name: '6',
            value: null
        },
        {
            name: '7',
            value: null
        },
        {
            name: '8',
            value: null
        },
        {
            name: '9',
            value: null
        },

    ]

    const grid = document.querySelector('.wrapper')
    const resultDisplay = document.querySelector("#result")
    var onPlayerOne = true


    // Create the board
    function createBoard() {
        resultDisplay.textContent = "Player One Turn (X)"
        for (let i = 1; i < 10; i++) {
            var card = document.createElement('div')
            card.setAttribute('class', 'box ' + i)
            card.addEventListener('click', selectCard)
            grid.appendChild(card)
        }
        console.log("Board Created")

    }

    // Check for any wins in the rows
    function checkForRow() {
        if (cardArray[0].value === cardArray[1].value && cardArray[0].value === cardArray[2].value && cardArray[0].value !== null) {
            return true
        }
        else if (cardArray[3].value === cardArray[4].value && cardArray[3].value === cardArray[5].value && cardArray[3].value !== null) {
            return true

        }
        else if (cardArray[6].value === cardArray[7].value && cardArray[6].value === cardArray[8].value && cardArray[6].value !== null) {
            return true
        }

    }

    // Check for any wins in the columns
    function checkForColumn() {
        if (cardArray[0].value === cardArray[3].value && cardArray[0].value === cardArray[6].value && cardArray[0].value !== null) {
            return true
        }
        else if (cardArray[1].value === cardArray[4].value && cardArray[1].value === cardArray[7].value && cardArray[1].value !== null) {
            return true

        }
        else if (cardArray[2].value === cardArray[5].value && cardArray[2].value === cardArray[8].value && cardArray[2].value !== null) {
            return true
        }
    }

    // Check for any wins in the diagonals
    function checkForDiagonal() {
        if (cardArray[0].value === cardArray[4].value && cardArray[0].value === cardArray[8].value && cardArray[0].value !== null) {
            return true
        }
        else if (cardArray[2].value === cardArray[4].value && cardArray[2].value === cardArray[6].value && cardArray[2].value !== null) {
            return true

        }
    }

    // Check if there is a tie by looking if all board values are filled
    function checkForTie() {
        for (let i in cardArray) {
            if (cardArray[i].value === null) {
                return false // board is not completely filled yet
            }
        }
        return true
    }

    function whoWon() {
        if (onPlayerOne === true) {
            alert("Player Two Won")
        }
        else {
            alert("Player One Won")
        }
    }

    function checkForMatch() {
        if (checkForRow() === true || checkForColumn() === true || checkForDiagonal() === true) {
            whoWon()
            location.reload()
        }
        else if (checkForTie() === true) {
            alert("It's a tie!")
            location.reload()
        }

    }

    // Function to handle user input if they click a box
    function selectCard() {
        var cardNumber = this.className[4]
        var cardValue = this.innerHTML
        console.log(cardNumber)
        console.log(cardValue)
        // Valid turn for player one (X)
        if (cardValue === "" && onPlayerOne === true) {
            cardArray[cardNumber-1].value = "X"
            this.innerHTML = "X"
            onPlayerOne = !onPlayerOne
            resultDisplay.textContent = "Player Two Turn (O)"
        }
        // Valid turn for player two (O)
        else if (cardValue === "" && onPlayerOne === false) {
            cardArray[cardNumber-1].value = "O"
            this.innerHTML = "O"
            onPlayerOne = !onPlayerOne
            resultDisplay.textContent = "Player One Turn (X)"
        }
        // Invalid turn
        else {
            alert("Choose another space for your turn!")
        }
        setTimeout(checkForMatch, 100)
    }
    createBoard()
})
