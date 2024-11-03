import { UserInput } from "../types";
import userDB from "../repository/user.db";

const registerUser = (userInput: UserInput) => {
    if (userDB.getUserByEmail(userInput.email)) {
        throw new Error("Email is already in use.")
    }
    return userDB.saveUser(userInput);
}

export default { registerUser }