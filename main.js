let Data = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1],
    [1, 2, 0, 2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [7, 6, 0, 0, 0, 0, 2, 1, 1, 1, 0, 5, 0, 1, 1, 1, 2, 0, 0, 0, 0, 8, 9],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 0, 2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

const WALL = 1;
const COIN = 2;
const GROUND = 0;
const PACMAN = 5; 
const CLYDE = 6;
const INKY = 7;
const DINKY = 8;
const PINKY = 9;



let count;
let map; 


let score = {
    point: 0,
}

/*let clyde = {
    x: 1,
    y: 10,
};

let inky = {
    x: 0,
    y: 10,
};
let dinky = {
    x: 21,
    y: 10,
};
let pinky = {
    x: 22,
    y: 10,
};*/

let pacman = {
    x: 11,
    y: 10,
    direction: 'right',
};

function countCreate() {
    count = document.createElement('div');
    count.classList.add('counter');
    document.body.appendChild(count); 
    count.innerText = "score : " +  score.point ;
    
}

function countUpdate() {
   count.innerText = "score : " +  score.point ;
}

function countRight() {
    if (Data[pacman.y][pacman.x+1] === COIN) {
        score.point = score.point + 1;
        countUpdate(); 
    }
    
}

function countLeft() {
    if (Data[pacman.y][pacman.x-1] === COIN) {
         score.point = score.point + 1;
        console.log(score.point);
        countUpdate(); 
    }
}

function countUp() {
    if (Data[pacman.y-1][pacman.x] === COIN) {
         score.point = score.point + 1;
        console.log(score.point);
        countUpdate(); 
    }
}

function countDown() {
    if (Data[pacman.y+1][pacman.x] === COIN) {
         score.point = score.point + 1;
        console.log(score.point);
        countUpdate(); 
    }
}

function createTiles(Data) {
    let tilesArray = [];

    for (let row of Data) {
        for (let col of row) {
            let tile = document.createElement('div');
            tile.classList.add('tile');

            if (col === WALL) {
                tile.classList.add('wall');
            } else if (col === COIN) {
                tile.classList.add('coin');
            } else if (col === GROUND) {
                tile.classList.add('ground');
            } else if (col === PACMAN) {
                tile.classList.add('pacman');
                tile.classList.add(pacman.direction);
            } /*else if (col === GHOST1) {
                tile.classList.add('ghost1');
            } else if (col === GHOST2) {
                tile.classList.add('ghost2');
            }else if (col === GHOST3) {
                tile.classList.add('ghost3');
            }else if (col === GHOST4) {
                tile.classList.add('ghost4');
            }*/

            tilesArray.push(tile);
        }

        let brTile = document.createElement('br');
        tilesArray.push(brTile); 
    }
    return tilesArray;
}


function mapCreate() {
    map = document.createElement('div');

    let tiles = createTiles(Data);
    for (let tile of tiles) {
        map.appendChild(tile);
    }

    document.body.appendChild(map);
}

function eraseMap() {
    document.body.removeChild(map);
}


function moveRight() {
    pacman.direction = 'right'; 
    if (Data[pacman.y][pacman.x + 1] != WALL) {
        Data[pacman.y][pacman.x] = GROUND;
        pacman.x = pacman.x + 1;
        Data[pacman.y][pacman.x] = PACMAN;
    } 
}

function moveUp() {
    pacman.direction = 'up';
    if (Data[pacman.y - 1][pacman.x] != WALL) {
        Data[pacman.y][pacman.x] = GROUND;
        pacman.y = pacman.y - 1;
        Data[pacman.y][pacman.x] = PACMAN;
    }
}


function moveDown() {
    pacman.direction = 'down'; 
    if (Data[pacman.y+1][pacman.x] != WALL) {
        Data[pacman.y][pacman.x] = GROUND;
        pacman.y = pacman.y +1;
        Data[pacman.y][pacman.x] = PACMAN;
    }
}

function moveLeft() {
    pacman.direction = 'left';
    if (Data[pacman.y][pacman.x - 1] != WALL) {
        Data[pacman.y][pacman.x] = GROUND;
        pacman.x = pacman.x - 1;
        Data[pacman.y][pacman.x] = PACMAN;
    }
}


function setupKeyboardControls() {
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 37) {
            moveLeft();
            countLeft();
        } else if (e.keyCode === 39) {
            moveRight();
            countRight();
        } else if (e.keyCode === 38) {
            moveUp();
            countUp();
        } else if (e.keyCode === 40) {
            moveDown();
            countDown();
        }

        eraseMap();
        mapCreate();
    });
}

function main() {
    mapCreate();
    setupKeyboardControls();
    countCreate();
}

main();
