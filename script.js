const hands_page = document.querySelector(".hands");
const result_page = document.querySelector(".result-container");
const handList = ["images/Paper.png", "images/Scissors.png", "images/Rock.png"];
const result = document.querySelector(".result-text");
const score = document.querySelector(".score");

let curr_score = 0;
const handleClick = (id)=>{
    hands_page.style.display = "none";
    result_page.style.display = "flex";

    document.getElementById("your-hand").src = handList[id];
    const cp_pick_no = Math.floor(Math.random()*3);
    document.getElementById("comp-hand").src = handList[cp_pick_no];    

    if(id == 0 && cp_pick_no == 2){
        result.textContent = "YOU WIN";
        score.textContent = ++curr_score;
    }else if(id == 2 && cp_pick_no == 0){
        result.textContent = "YOU LOSE";
    }else if(id > cp_pick_no){
        result.textContent = "YOU WIN";
        score.textContent = ++curr_score;
    }
    else if(id == cp_pick_no){
        result.textContent = "DRAW";
    }
    else{
        result.textContent = "YOU LOSE";
    }
}

const play_again_btn = document.querySelector(".btn");
play_again_btn.addEventListener("click", ()=>{
    hands_page.style.display = "flex";
    result_page.style.display = "none";
})


const rules_btn = document.querySelector(".rules-btn");
const rules_container = document.querySelector(".rules-container");
const close = document.querySelector(".close-btn");
rules_btn.addEventListener("click", ()=>{
    rules_btn.style.display = "none";
    rules_container.style.display = "block";
})
close.addEventListener("click",()=>{
    rules_container.style.display = "none";
    rules_btn.style.display = "block";
})
