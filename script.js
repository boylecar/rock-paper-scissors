function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    if (a == 0) {
        return "rock";
    } else if (a == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());
let r = 0;
let p = 0;
let s = 0;
for (let i = 0; i<100; i++) {
    getComputerChoice();
    if (getComputerChoice == "rock") {
        r++;
    } else if (getComputerChoice == "paper") {
        p++;
    } else if (getComputerChoice == "scissors") {
        s++;
    }
    if (i == 98) {
        console.log(r);
        console.log(p);
        console.log(s);
    }
}