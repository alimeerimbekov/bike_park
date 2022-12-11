let loginClick = document.querySelector('.header__iconContact')
let loginDisplay = document.querySelector('.login__displayNone')
let loginIconX = document.querySelector('.login__iconX')
let loginTitleClick = document.querySelector('.login__titles-title_click')
let registrationDisplay = document.querySelector('.registration__displayNone')
let registrationTitleClick = document.querySelector('.registration__titles-title_click')
let registrationIconX = document.querySelector('.registration__iconX')
let registrationVhod = document.querySelector('.registration__text-vhod')


loginClick.addEventListener('click', function() {
    loginDisplay.classList.remove('login__displayNone')
    })
loginIconX.addEventListener('click', function() {
    loginDisplay.classList.add('login__displayNone')
})
loginTitleClick.addEventListener('click', function() {
    loginDisplay.classList.add('login__displayNone')
    registrationDisplay.classList.remove('registration__displayNone')

})
registrationTitleClick.addEventListener('click', function() {
    loginDisplay.classList.remove('login__displayNone')
    registrationDisplay.classList.add('registration__displayNone')

})
registrationIconX.addEventListener('click', function() {
    registrationDisplay.classList.add('registration__displayNone')
})

registrationVhod.addEventListener('click', function() {
    loginDisplay.classList.remove('login__displayNone')
    registrationDisplay.classList.add('registration__displayNone')
})
