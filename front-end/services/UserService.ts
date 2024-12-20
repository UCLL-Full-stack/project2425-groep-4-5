import { User } from "@types";
import { get } from "http";

const createAccount = async (email: string, password: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred');

        }

        return response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message || 'An error occurred while creating the account');
        }
        throw new Error('An error occurred while creating the account')
    }
};

const loginUser = (user: User) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
};

const UserService = {
    createAccount,
    loginUser
};

export default UserService;