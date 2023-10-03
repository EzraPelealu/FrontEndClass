export default function ambilDataUser() {
    return fetch("https://reqres.in/api/users").then((response) => {
        return response.json()
    }).then((users) => {
        console.log(users.data)
    })
}