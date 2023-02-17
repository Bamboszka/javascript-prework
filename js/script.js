{
    const getMoveName = function (argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'Nieznany ruch';
        }
    }
    /*
    if (randomNumber == 1) {
        computerMove = 'kamień';
    }
    else if (randomNumber == 2) {
        computerMove = 'papier';
    }
    else if (randomNumber == 3) {
        computerMove = 'nożyce';
    }
        let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    if (playerInput == '1') {
        playerMove = 'kamień';
    }
    else if (playerInput == '2') {
        playerMove = 'papier';
    }
    else if (playerInput == '3') {
        playerMove = 'nożyce';
    }
    */
    const playGame = function (playerInput) {

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const computerMove = getMoveName(randomNumber);

        const playerMove = getMoveName(playerInput);

        displayResult(computerMove, playerMove);
    }

    const displayResult = function (argComputerMove, argPlayerMove) {
        clearMessages();
        printMessage('Komputer wybrał ' + argComputerMove + ', Ty wybierasz ' + argPlayerMove + '.');

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Nieprawidłowe dane');
        }
    }

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}