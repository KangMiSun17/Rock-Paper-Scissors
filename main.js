//btn
let rock = document.querySelector('.r_btn');
let scissors = document.querySelector('.s_btn');
let paper = document.querySelector('.p_btn');
let reset = document.querySelector('.reset_btn');

//board
let view_me = document.querySelector('.game_me');
let view_com = document.querySelector('.game_com');

//score
let my_score = document.querySelector('.score_my');
let com_score = document.querySelector('.score_com')

//img
let img = document.querySelectorAll('.rps>img');
let img_list = [rock, scissors, paper];

//리셋버튼 구현

const fun_reset = () => {
   my_score.innerText = 0;
   com_score.innerText = 0;
   view_me.removeChild(view_me.children[1]);
   view_com.removeChild(view_com.children[1]);
}

reset.addEventListener('click', fun_reset)

//컴퓨터 화면

const random_img = () => {
    const com_img = document.createElement("img");
    let ranNum = Math.floor(Math.random()*3);
    if(document.querySelector('.curCom')){
        view_com.removeChild(view_com.children[1])
    }
    com_img.setAttribute("src", img[ranNum].getAttribute("src"));
    com_img.className = "curCom";
    view_com.appendChild(com_img);
}

//내 화면

const my_select = (e) => {
        let my_img = document.createElement("img");
        if(document.querySelector('.curMe')){
            view_me.removeChild(view_me.children[1])
        }
        my_img.setAttribute("src", e.target.getAttribute("src"));
        my_img.className = "curMe";
        view_me.appendChild(my_img);
        setTimeout(() => {
            random_img();
        }, 500);
}

rock.addEventListener('click', my_select);
scissors.addEventListener('click', my_select);
paper.addEventListener('click', my_select);