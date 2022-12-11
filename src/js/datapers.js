let dataBtn = document.querySelector('.data__button-btn')
let dataSaveBtn = document.querySelector('.data__button-btn-save')
let data = document.querySelector('.data')
let dataDisplayBlock = document.querySelector('.data__displayBlock')
let dataDisplay = document.querySelector('.data__displayNone')

dataBtn.addEventListener('click', function () {
    dataDisplay.classList.remove('data__displayNone')
    data.classList.add('data__displayNone')
})

dataSaveBtn.addEventListener('click', function () {
    dataDisplayBlock.classList.remove('data__displayNone')
    dataDisplay.classList.add('data__displayNone')

})

