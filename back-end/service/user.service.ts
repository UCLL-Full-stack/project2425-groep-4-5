import userDB from "../repository/user.db";
import { AuthenticationResponse, UserInput } from "../types";
import generateJWTtoken from "../util/jwt";
import bcrypt from 'bcrypt';

const getAllUsers = () => {

}

const addUser = async ({ name, email, password }: UserInput) => {
    const user = await userDB.save({ name, email, password });
}


const loginUser = async ({ email, password }: UserInput): Promise<AuthenticationResponse> => {
    const user = await userDB.getUserByEmail({ email });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new Error("Invalid password");
    }
    return {
        token: generateJWTtoken({ email: user.email, role: user.role }),
        email: email,
        role: user.role
    }
}


const userService = {
    addUser,
    getAllUsers,
    loginUser
}

export default userService;