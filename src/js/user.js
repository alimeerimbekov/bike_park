
export let user = {
    login: "",
    email: ""
}


export const   getFromUserLocalStorage = () => {
    if (localStorage.getItem('user') !== null){
        user = JSON.parse(localStorage.getItem('user'));
    }
}

export const changeUser = (data) => {
    user = {...data}
    localStorage.setItem('user', JSON.stringify(user))
    location.href = 'http://localhost:63342/bike_park/index.html'
}