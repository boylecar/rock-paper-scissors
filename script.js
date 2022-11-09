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
//console.log(getComputerChoice());
let r = 0;
let p = 0;
let s = 0;

for (let i = 0; i<5; i++) {
    r++;
    if(i == 4) {
console.log(r);
    }
}
for (let i = 0; i<98; i++) {
    let b = getComputerChoice();
    if (b == "rock") {
        r++;
    } else if (b == "paper") {
        p++;
    } else if (b == "scissors") {
        s++;
    }
    if (i == 97) {
        console.log(r);
        if (r >= 33) {
            let Over = r - 33;
            console.log("Rock appeared " + Over + " more times than expected.");
        } else if (r < 33) {
            let Under = 33 - r;
            console.log("Rock appeared " + Under + " less times than expected.");
        }
        console.log(p);
        if (p >= 33) {
            let Over = p - 33;
            console.log("Paper appeared " + Over + " more times than expected.");
        } else if (p < 33) {
            let Under = 33 - p;
            console.log("Paper appeared " + Under + " less times than expected.");
        }
        console.log(s);
        if (s >= 33) {
            let Over = s - 33;
            console.log("Scissors appeared " + Over + " more times than expected.");
        } else if (s < 33) {
            let Under = 33 - s;
            console.log("Scissors appeared " + Under + " less times than expected.");
        }
    }
}