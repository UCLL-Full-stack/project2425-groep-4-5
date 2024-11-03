import { User } from "../model/user"
import { UserInput } from "../types"

const users = [
    new User({
        email: "john_doe@jmail.com",
        password: "skemmer123"
    }),
    new User({
        email: "johndoe@gmail.com",
        password: "johndoe123"
    })
]

const getUserByEmail = (email: String) => {
    if (users.find((user) => user.getEmail() == email)) {
        return true
    }
    return false
}

const convertToUser = (userInput: UserInput) => {
    return new User({ email: userInput.email, password: userInput.password, });
}

const saveUser = (userInput: UserInput) => {
    users.push(convertToUser(userInput));
    return "User successfully created";
}

export default { getUserByEmail, saveUser }