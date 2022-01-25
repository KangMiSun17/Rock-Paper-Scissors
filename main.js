let reset = document.querySelector('.reset_btn');
let my_score = document.querySelector('.score_my');
let com_score = document.querySelector('.score_com');
console.log(my_score);
const fun_reset = () => {
   my_score.innerText = 0;
   com_score.innerText = 0; 
}

reset.addEventListener('click', fun_reset)