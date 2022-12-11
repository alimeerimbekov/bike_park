let activeTime = document.querySelector('.home__boxes-time-day')
let activeWatch = document.querySelector('.home__boxes-time-watch')
let searchBtn = document.querySelector('.bike__btn')
let printSearchBtn = document.querySelector('.displayNone')
let burger = document.querySelector('.burger')
let headerNav = document.querySelector('.header__nav')
let header = document.querySelector('.header')

burger.onclick = function() {
    burger.classList.toggle('burger_active')
    headerNav.classList.toggle('header__nav_active')
    if (burger.classList.contains('burger_active')){
        header.style.height = '120px'
    } else{
        header.style.height = ''
    }
};

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


let bikeList = document.querySelector('.bikeList__cards')
let filterSelectPrice = document.querySelector('.bike__list-select-price')
let filterSelectView = document.querySelector('.bikeList__box-select-view')
let filterSelectDiameter = document.querySelector('.bikeList__box-select-diameter')
let url = 'http://localhost:3030/bike?'

let filterPrice = ''
let filterView = ''
let filterDiameter = ''

const getBike = () => {
    bikeList.innerHTML = ''
    fetch(url + `${filterPrice.length ? '_sort=price&_order=' + filterPrice + '&' : ''}${filterView.length ? 'view=' + filterView + '&' : '' }${filterDiameter.length ? 'diameter=' + filterDiameter + '&' : ''} `)
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
                        <button class="bikeList__card-btn">
                            <span class="notHover">Выбрать</span>
                            <span class="hover">Отменить выбор</span>
                        </button>
                    </div>
                `
            })
        })
        .catch((err) => alert(err))

}

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



