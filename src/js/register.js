import {changeUser, getFromUserLocalStorage, user} from "./user.js";

getFromUserLocalStorage()

let formRegister = document.querySelector('.registration__form')

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    let userData = {
        username: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value
    }
    // console.log(userData)


    fetch('http://localhost:3030/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then((res) => res.json())
        .then((res) => {
            changeUser({
                ...res.user,
                token: res.accessToken
            })

        })
        .catch(() => alert('Аккаунт не создан'))
});
