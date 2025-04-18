let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let message = document.querySelector("#message");

let turnO = true;
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && gameActive) {
            box.innerText = turnO ? "O" : "X";
            box.disabled = true;
            checkWinner();
            turnO = !turnO;
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1);
            return;
        }
    }

    let draw = [...boxes].every(box => box.innerText !== "");
    if (draw) {
        message.innerText = "It's a Draw!";
        gameActive = false;
    }
};

const showWinner = (winner) => {
    message.innerText = `${winner} wins!`;
    gameActive = false;
};

resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    message.innerText = "";
    turnO = true;
    gameActive = true;
});
