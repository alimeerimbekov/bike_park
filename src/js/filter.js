
let activeTime = document.querySelector('.home__boxes-time-day')
let activeWatch = document.querySelector('.home__boxes-time-watch')

let searchBtn = document.querySelector('.bike__btn')
let printSearchBtn = document.querySelector('.displayNone')


activeTime.onclick = function () {
    activeTime.classList.add('active')
    activeWatch.classList.remove('active')
}
activeWatch.onclick = function () {
    activeWatch.classList.add('active')
    activeTime.classList.remove('active')
}

searchBtn.addEventListener('click', function () {
    printSearchBtn.classList.remove('displayNone')
})


