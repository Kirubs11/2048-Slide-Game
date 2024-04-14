var gameBoard = [  [0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0]
];

// Add two initial tiles to game board
addTile();
addTile();

// Function to add a new tile to the game board
function addTile() {
var emptySpaces = [];

// Find all empty spaces on game board
for (var i = 0; i < gameBoard.length; i++) {
  for (var j = 0; j < gameBoard[i].length; j++) {
    if (gameBoard[i][j] === 0) {
      emptySpaces.push({ row: i, col: j });
    }
  }
}

// If there are no empty spaces on game board, game is over
if (emptySpaces.length === 0) {
  console.log("Game over!");
  return;
}

// Choose a random empty space and add a tile with a value of 2 or 4
var newTileLocation = emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
gameBoard[newTileLocation.row][newTileLocation.col] = Math.random() < 0.9 ? 2 : 4;
}

// Function to move tiles to the left
function moveLeft() {
for (var i = 0; i < gameBoard.length; i++) {
  for (var j = 1; j < gameBoard[i].length; j++) {
    if (gameBoard[i][j] !== 0) {
      for (var k = j - 1; k >= 0; k--) {
        if (gameBoard[i][k] === 0) {
          gameBoard[i][k] = gameBoard[i][j];
          gameBoard[i][j] = 0;
          j = k;
        } else if (gameBoard[i][k] === gameBoard[i][j]) {
          gameBoard[i][k] *= 2;
          gameBoard[i][j] = 0;
          break;
        } else {
          break;
        }
      }
    }
  }
}
addTile();
}

// Function to move tiles to the right
function moveRight() {
for (var i = 0; i < gameBoard.length; i++) {
  for (var j = gameBoard[i].length - 2; j >= 0; j--) {
    if (gameBoard[i][j] !== 0) {
      for (var k = j + 1; k < gameBoard[i].length; k++) {
        if (gameBoard[i][k] === 0) {
          gameBoard[i][k] = gameBoard[i][j];
          gameBoard[i][j] = 0;
          j = k;
        } else if (gameBoard[i][k] === gameBoard[i][j]) {
          gameBoard[i][k] *= 2;
          gameBoard[i][j] = 0;
          break;
        } else {
          break;
        }
      }
    }
  }
}
addTile();
}

// Function to move tiles up
function moveUp() {
for (var j = 0; j < gameBoard[0].length; j++) {
for (var i = 1; i < gameBoard.length; i++) {
if (gameBoard[i][j] !== 0) {
for (var k = i - 1; k >= 0; k--) {
if (gameBoard[k][j] === 0) {
gameBoard[k][j] = gameBoard[i][j];
gameBoard[i][j] = 0;
i = k;
} else if (gameBoard[k][j] === gameBoard[i][j]) {
gameBoard[k][j] *= 2;
gameBoard[i][j] = 0;
break;
} else {
break;
}
}
}
}
}
addTile();
}

// Function to move tiles down
function moveDown() {
for (var j = 0; j < gameBoard[0].length; j++) {
for (var i = gameBoard.length - 2; i >= 0; i--) {
if (gameBoard[i][j] !== 0) {
for (var k = i + 1; k < gameBoard.length; k++) {
if (gameBoard[k][j] === 0) {
gameBoard[k][j] = gameBoard[i][j];
gameBoard[i][j] = 0;
i = k;
} else if (gameBoard[k][j] === gameBoard[i][j]) {
gameBoard[k][j] *= 2;
gameBoard[i][j] = 0;
break;
} else {
break;
}
}
}
}
}
addTile();
}

// Function to update the game board
function update_BFS() {
var tiles = document.querySelectorAll(".tile");

// Remove all tiles from game board
for (var i = 0; i < tiles.length; i++) {
tiles[i].parentNode.removeChild(tiles[i]);
}

// Add tiles to game board
for (var i = 0; i < gameBoard.length; i++) {
for (var j = 0; j < gameBoard[i].length; j++) {
if (gameBoard[i][j] !== 0) {
var tile = document.createElement("div");
tile.classList.add("tile");
tile.classList.add("tile-" + gameBoard[i][j]);
tile.textContent = gameBoard[i][j];
document.getElementById("game-board").appendChild(tile);
tile.style.top = i * 80 + "px";
tile.style.left = j * 80 + "px";
}
}
}
}

// Add event listeners for arrow keys
document.addEventListener("keydown", function(event) {
if (event.keyCode === 37) {
moveLeft();
update_BFS();
} else if (event.keyCode === 38) {
moveUp();
update_BFS();
} else if (event.keyCode === 39) {
moveRight();
update_BFS();
} else if (event.keyCode === 40) {
moveDown();
update_BFS();
}
});

// Update game board on page load
document.addEventListener("DOMContentLoaded", function() {
    // Call update_BFS function here
    update_BFS();
  });
 function refreshPage() {
    location.reload();
}