import {getFromUserLocalStorage, user} from "./user.js";


getFromUserLocalStorage()

console.log(user)

let burger = document.querySelector('.burger')
let headerNav = document.querySelector('.header__nav')
let header = document.querySelector('.header')

burger.onclick = function () {
    burger.classList.toggle('burger_active')
    headerNav.classList.toggle('header__nav_active')
    if (burger.classList.contains('burger_active')) {
        header.style.height = '120px'
    } else {
        header.style.height = ''
    }
};





let bikeList = document.querySelector('.bikeList__cards')
let filterSelectPrice = document.querySelector('.bike__list-select-price')
let filterSelectView = document.querySelector('.bikeList__box-select-view')
let filterSelectDiameter = document.querySelector('.bikeList__box-select-diameter')
let url = 'http://localhost:3030/bike?'


let filterPrice = ''
let filterView = ''
let filterDiameter = ''

let bikeListData = []

bikeListData = JSON.parse(localStorage.getItem('bike'));

localStorage.setItem("bike", JSON.stringify(bikeListData))



const getBike = () => {
    bikeList.innerHTML = ''
    fetch(url + `${filterPrice.length ? '_sort=price&_order=' + filterPrice + '&' : ''}${filterView.length ? 'view=' + filterView + '&' : ''}${filterDiameter.length ? 'diameter=' + filterDiameter + '&' : ''} `)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                bikeList.innerHTML += `
                 <div class="bikeList__card">
                        <p class="bikeList__card-desc">
                            <span class="bikeList__card-desc-a">${item.diameter}"</span>
                            <span class="bikeList__card-desc-b">${item.year} года</span>
                        </p>
                        <img class="bikeList__card-img" src="${item.images}" alt="Bike">
                        <h4 class="bikeList__card-title">${item.view} велосипед<br>${item.title}</h4>
                        <p class="bikeList__card-price">${item.price}с/день</p>
                        <button type="submit" class="bikeList__card-btn">
<!--                            &{bikeListData.filter((el) => el.id === item.id).length ? <span class="notHover">Выбрано</span> : }-->
                                <span  data-id="${item.id}" class="bikeList__card-btn-btns">Выбрать</span>
                            <span data-id="${item.id}" class="hover">Отменить выбор</span>
                        </button>
                    </div>
                `
            })
        })
        .catch((err) => alert(err))

};

let bikeGet = () => {
    filterSelectPrice.addEventListener('change', (e) => {
        filterPrice = e.target.value
        getBike()
    })

    filterSelectView.addEventListener('change', (e) => {
        filterView = e.target.value;
        getBike()
    })

    filterSelectDiameter.addEventListener('change', (e) => {
        filterDiameter = e.target.value;
        getBike()
    })

    getBike()
}







