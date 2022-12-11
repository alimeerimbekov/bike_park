let acc = document.getElementsByClassName("current__accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("current__accordion-panel-displayNone");

        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


let arrowBtn = document.querySelector('.current__accordion')
let arrowBtnRight = document.querySelector('.icon-right-open')
let arrowBtnDown = document.querySelector('.icon-down-open')
arrowBtnDown.style.display = 'none'


arrowBtn.addEventListener('click', function(){

        if(arrowBtnDown.style.display === 'none') {
            arrowBtnDown.style.display = 'block';
            arrowBtnRight.style.display = 'none';
        }else if(arrowBtnDown.style.display === 'block'){
            arrowBtnDown.style.display = 'none';
            arrowBtnRight.style.display = 'block';
        }
})




let currentDisplay = document.querySelector('.current__displayNone')
let currentClick = document.querySelector('.currentClick')
let completedClick = document.querySelector('.current__row-title_completed')
let personaClick = document.querySelector('.current__row-title_persona')
let currentDisplayBlock = document.querySelector('.current__displayBlock')
let blue = document.querySelector('.blue')

completedClick.addEventListener('click', function(){
    currentDisplay.classList.remove('current__displayNone');
    currentDisplayBlock.classList.add('current__displayNone');
})

currentClick.addEventListener('click', function(){
    currentDisplayBlock.classList.remove('current__displayNone');
    currentDisplay.classList.add('current__displayNone');
})

