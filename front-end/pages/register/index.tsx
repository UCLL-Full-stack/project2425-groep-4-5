import Header from "@components/header";
import React, { useState } from "react";
import UserService from "../../services/UserService"; // Adjust the import path as necessary

const RegisterPage: React.FC = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");

    const createAccount = async (event: React.FormEvent) => {
        event.preventDefault();
        if (userEmail && userPassword) {
            try {
                await UserService.createAccount(userEmail, userPassword);
                console.log("Account created for:", userEmail);
                setError(""); // Clear any previous errors
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message || 'an unknown error occurred');
                } else {
                    setError('an unknown error occurred');
                }
            }
        } else {
            setError("E-mail or password left blank");
        }
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form className="bg-white p-6 rounded shadow-md w-full max-w-xs border border-gray-300" onSubmit={createAccount}>
                    <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">E-mail</label>
                        <div className="flex justify-center">
                            <input
                                type="text"
                                placeholder="e-mail"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <div className="flex justify-center">
                            <input
                                type="password"
                                placeholder="password"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex justify-center">
                        <input
                            type="submit"
                            value="Register"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        />
                    </div>
                    {error && <p className="text-center">{error}</p>}
                </form>
            </div>
        </>
    );
};

export default RegisterPage;