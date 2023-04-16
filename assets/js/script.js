let playerSymbol = "x";
let gameEnded = false;
let winPos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
        "click",
        function() {
            if(this.innerHTML === "" && !gameEnded) {
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());
                checkWin();
                if (playerSymbol === "x") 
                    playerSymbol = "o";
                else 
                    playerSymbol = "x";                
            }
        }
    );
}

function checkWin() {
    for (let i = 0; i<winPos.length; i++) {
        if (
            document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][2]).innerHTML === playerSymbol
        ) {
            document.getElementById(winPos[i][0]).classList.add("win");
            document.getElementById(winPos[i][1]).classList.add("win");
            document.getElementById(winPos[i][2]).classList.add("win");
            gameEnded = true;
            if(playerSymbol === "x") {
                setTimeout(function() {
                    alert("1st player won!");
                }, 50);
            } else if(playerSymbol === "o") {
                setTimeout(function() {
                    alert("2nd player won!");
                }, 50);
            } else if(!playerSymbol) {
                setTimeout(function() {
                    alert("Math drawn!");
                }, 50);
            }
            // document.getElementById(win).innerHTML = alert(playerSymbol + " win");
            // setTimeout(function() {
            //     alert(playerSymbol + " wins!");
            // }, 50);
        }
    }
}

document.getElementById("restart").addEventListener(
    "click",
    function() {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i.toString()).innerHTML = "";
            document.getElementById(i.toString()).classList.remove("x");
            document.getElementById(i.toString()).classList.remove("o");
            document.getElementById(i.toString()).classList.remove("win");
            gameEnded = false;
        }
    }
);