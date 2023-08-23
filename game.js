

let title = document.querySelector(".title");



let squares = [];

let turn = "x";



let winsX = parseInt(localStorage.getItem("winsX")) || 0;
let winsO = parseInt(localStorage.getItem("winsO")) || 0;


let resetButton = document.getElementById("resetButton");


let resetGameButton = document.getElementById("resetGameButton");


// 1
function game(id){

    let element =document.getElementById(id);

    if(turn==="x" && element.innerHTML==""){
        element.innerHTML="x";
        turn="o";
        title.innerHTML="الدور علي o"
    }
    else if(turn==="o" && element.innerHTML==""){
        element.innerHTML="o";
        turn="x";
        title.innerHTML="الدور علي x"
    }
    winner();
    checkDraw();
}


// 2
function winner()
{
    for(let i=1;i<10;i++)
    {
        squares[i]=document.getElementById("item"+i).innerHTML;
    }
    if(squares[1]==squares[2] && squares[2] == squares[3] && squares[1] !=""){
        end (1,2,3);
    }
    else if(squares[4]==squares[5] && squares[5] == squares[6] && squares[4] !=""){
        end (4,5,6);
    }
    else if(squares[7]==squares[8] && squares[8] == squares[9] && squares[1] !=""){
        end (7,8,9);
    }


    else if(squares[1]==squares[4] && squares[4] == squares[7] && squares[1] !=""){
        end (1,4,7);
    }
    else if(squares[2]==squares[5] && squares[5] == squares[8] && squares[2] !=""){
        end (2,5,8);
    }
    else if(squares[3]==squares[6] && squares[6] == squares[9] && squares[3] !=""){
        end (3,6,9);
    }


    else if(squares[1]==squares[5] && squares[5] == squares[9] && squares[1] !=""){
        end (1,5,9);
    }
    else if(squares[3]==squares[5] && squares[5] == squares[7] && squares[3] !=""){
        end (3,5,7);
    }
  
}

// 3
function checkDraw() {
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
        if (squares[i] === "") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        title.innerHTML = "تعادل!";
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
}



// 4
function updateWinsDisplay() {
    let winsXElement = document.querySelector(".wins-x");
    let winsOElement = document.querySelector(".wins-o");

   

    winsXElement.innerHTML = `player1: ${winsX}`;
    winsOElement.innerHTML = `player2: ${winsO}`;
}

updateWinsDisplay();


resetButton.addEventListener("click", function() {
    // إعادة ضبط النتائج إلى الصفر
    winsX = 0;
    winsO = 0;

    // تحديث عرض نتائج الفوز
    updateWinsDisplay();
});



// 5
function end (num1,num2,num3)
{   
    title.innerHTML=`${squares[num1]} is winner!`
    document.getElementById(`item`+num1).style.background='black';
    document.getElementById(`item`+num2).style.background='black';
    document.getElementById(`item`+num3).style.background='black';
    setInterval(function(){title.innerHTML += ".",1000},1000);
        setTimeout(function(){location.reload()},3000);


        if (squares[num1] === "x") {
            winsX++;
        } else {
            winsO++;
        }
    
        localStorage.setItem("winsX", winsX);
    localStorage.setItem("winsO", winsO);
       
        updateWinsDisplay();

       
}


resetGameButton.addEventListener("click", function() {
    // مسح المربعات وإعادة الإعدادات إلى حالتها الأولية
    resetGame();
});


function resetGame() {
    // مسح محتوى جميع المربعات وإعادة الإعدادات إلى الحالة الأولية
    for (let i = 1; i < 10; i++) {
        let element = document.getElementById("item" + i);
        element.innerHTML = "";
    }

    // إعادة الدور والعنوان إلى حالتهما الأولية
    turn = "x";
    title.innerHTML = "الدور على X";
}































