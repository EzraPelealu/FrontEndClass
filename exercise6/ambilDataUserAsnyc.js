export default async function ambilDataUserAsnyc() {
    try{
        const response = await fetch("https://reqres.in/api/users")
        const users = await response.json()
        return console.log(users.data)
    } catch (err){
        return console.log(err)
    }
}