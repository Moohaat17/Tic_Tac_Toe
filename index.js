
let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let body = document.querySelector("body");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let count = 0;

let turn_O = true;

let winningTurns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "O";
            box.style.color="red"
            turn_O = false;
        } else {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        winnerCheck();
    })
})

const resetbtn = () => {
    turn_O = true;
    enableBoxes();
}
const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msg.classList.add("hide");
        reset.classList.add("hide");
        newbtn.classList.remove("hide");
    }
}

const winnerCheck = () => {
    for (let Turns of winningTurns) {
        let pos1 = boxes[Turns[0]].innerText;
        let pos2 = boxes[Turns[1]].innerText;
        let pos3 = boxes[Turns[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                msg.classList.remove("hide");
                reset.classList.remove("hide")
                newbtn.classList.add("hide");
                msg.textContent = `CONGO! Winner is ${pos1}`
                disableBoxes();
            }
        }
    }
}