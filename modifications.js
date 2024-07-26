class Player {
    constructor(name) {
        this.name = name;
        this.pawns = [];
    }
}
// l'objet du joueur
class Pawn {
    constructor(x, y, player) {
        this.x = x;
        this.y = y;
        this.player = player;
    }
}
// l'objet du pion
class Game {
    constructor(player1, player2) {
        this.players = [new Player(player1), new Player(player2)];
        this.board = Array(36).fill(0);
        this.phase = 'apparition';
    }
// l'objet de jeu
    addPawn(x, y, player) {
        let pawn = new Pawn(x, y, player);
        this.board[x * 6 + y] = pawn;
        this.players[player].pawns.push(pawn);
    }
// fonction de l'ajout de pion sur le tableau
    movePawn(oldX, oldY, newX, newY) {
        let pawn = this.board[oldX * 6 + oldY];
        this.board[oldX * 6 + oldY] = 0;
        this.board[newX * 6 + newY] = pawn;
        pawn.x = newX;
        pawn.y = newY;
    }
  // fonction du mouvement
const board = Array(36).fill(0); // remplissage automatique du tableau
const symbols = ["O", "X"];
let currentPlayer;
let gameEnded = false;

function makeMove(player, index) {
  if (board[index] === 0 && !gameEnded) {
    board[index] = player;
    currentPlayer = 3 - player;
    checkVictory();
  }
}
// fonction de jeu d'un des joueurs
function drawBoard() {
  console.log("------------------");
  for (let i = 0; i < 6; i++) {
    let row = "| ";
    for (let j = 0; j < 6; j++) {
      row += (board[i * 6 + j] === 0 ? " " : symbols[board[i * 6 + j] - 1]) + " | ";
    }
    console.log(row);
  }
  console.log("------------------");
}
// fonction de dessin du tableau
function checkVictory() {
  // Vérifier les lignes
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (checkFour(i * 6 + j, 1)) return;
    }
  }

  // Vérifier les colonnes
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      if (checkFour(i * 6 + j, 6)) return;
    }
  }

  // Vérifier les diagonales
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (checkFour(i * 6 + j, 7)) return;
      if (checkFour(i * 6 + j + 2, 5)) return;
    }
  }

  // Vérifier l'égalité
  if (isBoardFull()) {
    console.log("Match nul !");
    gameEnded = true;
  }
}

function checkFour(start, step) {
  const player = board[start];
  if (player !== 0 && board[start + step] === player && board[start + 2 * step] === player && board[start + 3 * step] === player) {
    declareWinner(player);
    return true;
  }
  return false;
}

function declareWinner(winner) {
  console.log(`Le joueur ${winner} a gagné !`);
  gameEnded = true;
}
// fonction de vérification de gain
function isBoardFull() {
  return board.every(cell => cell !== 0);
}

// Choix du joueur qui commence
currentPlayer = getPlayerFromUser();

console.log(`Le joueur ${currentPlayer} commence avec le symbole ${symbols[currentPlayer - 1]}.`);

function getPlayerFromUser() {
    let player;
    do {
      player = parseInt(prompt('Choisissez le joueur qui commence (1 ou 2) : '));
      if (isNaN(player) || player < 1 || player > 2) {
        console.error("Choix invalide. Veuillez entrer 1 ou 2.");
      }
    } while (isNaN(player) || player < 1 || player > 2);
    return player;
  }

function getRandomValidIndex() { // pour tester en mode automatique index = getRandomValidIndex();
    let index;
    do {
      index = Math.floor(Math.random() * 36);
    } while (board[index] !== 0);
    return index;
  }

function getIndexFromUser() {
    let index;
    do {
      index = parseInt(prompt('Entrez l\'index de la case où vous voulez jouer (entre 0 et 35) : '));
    } while (isNaN(index) || index < 0 || index > 35 || board[index] !== 0);
    return index;
  }

while (!gameEnded) {
  console.log(`Joueur ${currentPlayer}, c'est votre tour !`);
  drawBoard();

  const index = getIndexFromUser();
  makeMove(currentPlayer, index);
}

// ce sont juste quelques ajouts éventuels pour l'instant
