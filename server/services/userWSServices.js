const axios = require('axios')
USERS_URL = "https://jsonplaceholder.typicode.com/users"
//  get all users from jsonplaceholder WS 
const getAllusersFromWS = async() => {
    const {data: AllWSUsers} =await axios.get(USERS_URL)
    const finalUsers = AllWSUsers.map(({id, name, username, email}) =>({id, name, username, email}))
    return finalUsers
}

module.exports ={getAllusersFromWS}