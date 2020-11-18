game=document.getElementById('game');
playerOneSpan=document.getElementById('player-one');
playerTwoSpan=document.getElementById('player-two');

game.addEventListener('click',handleClick);
var firstPlayerNext=true;
var inputMatrix=[[0,0,0],[0,0,0],[0,0,0]];
var num=0;
var playerOne=0;
var playerTwo=0;


function handleClick(e){
    let index=whichChild(e.target);
    console.log(e.target);
    if(e.target.classList.contains("box") && inputMatrix[index.i][index.j]===0){
        
        if(firstPlayerNext){
            e.target.innerHTML='X';
            firstPlayerNext=!firstPlayerNext;
            inputMatrix[index.i][index.j]=1;
        }else{
            e.target.innerHTML='O';
            firstPlayerNext=!firstPlayerNext;
            inputMatrix[index.i][index.j]=-1;
        }

        if(checkWinner(inputMatrix)===1){
            playerOne++;
            playerOneSpan.innerHTML=(playerOne);
            setTimeout(function () {window.alert("Player 1 wins!");
            resetGame();
        }, 100);
            
        }else if(checkWinner(inputMatrix)===-1){
            playerTwo++;
            playerTwoSpan.innerHTML=(playerTwo);
            setTimeout(function () {window.alert("Player 2 wins!");
            resetGame();
        }, 100);
            
        }
        num++;
        if(num===9){
            setTimeout(function () {window.alert("It's a draw!");
            resetGame();
        }, 100);
        }
    }
    console.log(inputMatrix);
}


function whichChild(child){
    var parent = child.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, child);
    if(index<3){
        return {i:0,j:index}
    }else if(index>2 && index<6){
        return {i:1,j:index-3}
    }else{
        return{i:2,j:index-6}
    }
}
function checkWinner(matrix){
    //vertical
    for(i=0;i<3;i++){
        if(sum(matrix[i])==3){
            return 1;
        }else if(sum(matrix[i])==-3){
            return -1;
        }
    }

    //diagonals
    diagonal1=matrix.map((arr,i) => matrix[i][i]);

    if(sum(diagonal1)==3){
        return 1;
    }else if(sum(diagonal1)==-3){
        return -1;
    }

    diagonal2=matrix.map((arr,i) => matrix[i][2-i]);

    if(sum(diagonal2)==3){
        return 1;
    }else if(sum(diagonal2)==-3){
        return -1;
    }

    //horizontal
    matrix=transpose(matrix);

    for(i=0;i<3;i++){
        if(sum(matrix[i])==3){
            return 1;
        }else if(sum(matrix[i])==-3){
            return -1;
        }
    }
    return 0;
}

function resetGame(){
    inputMatrix=[[0,0,0],[0,0,0],[0,0,0]];
    num=0;
    Array.from(game.children).map((box)=>{
        box.innerHTML='';
    })
    firstPlayerNext=true;
}

function sum(array){  
   return array.reduce((a,b)=>{return a+b;});
}

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}