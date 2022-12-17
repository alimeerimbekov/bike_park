import {user} from "./user";

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

});


//
// let formLogin = document.querySelector('.login__form')
//
//
// formLogin.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let userData = {
//         email: e.target[0].value,
//         password: e.target[1].value,
//     };
//
//     fetch('http://localhost:3030/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//     }).then((res) => res.json())
//         .then((res) => {
//             user = {
//                 ...res.user,
//                 token: res.accessToken
//             }
//
//             localStorage.setItem('user', JSON.stringify(user))
//             location.href = 'http://localhost:63342/bike_park/index.html'
//         })
//         .catch((err) => alert(err))
// })

