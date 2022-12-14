import {changeUser, getFromUserLocalStorage, user} from "./user.js";

getFromUserLocalStorage()


let formLogin = document.querySelector('.login__form')

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    let userData = {
        email: e.target[0].value,
        password: e.target[1].value
    }

    fetch('http://localhost:3030/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then((res) => res.json())
        .then((res) => {
            changeUser( {
                ...res.user,
                token: res.accessToken
            })
        })
        .catch((err) => alert(err))
});

