import Footer from "@components/footer";
import Header from "@components/header";
import React, { useState } from "react";
import UserService from "../../services/UserService";
import { StatusMessage } from "@types";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsContext } from "next";


const Login: React.FC = () => {


  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
  const router = useRouter();

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

  const clearErrors = () => {
    setNameError(null);
    setPasswordError(null);
    setStatusMessages([]);
  };

  const validate = (): boolean => {
    let result = true;

    if (!userEmail && userEmail.trim() === "") {
      setNameError('email error');
      result = false;
    }

    if (!userPassword && userPassword.trim() === "") {
      setPasswordError('password error');
      result = false;
    }

    return result;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    clearErrors();

    if (!validate()) {
      return;
    }

    const user = { email: userEmail, password: userPassword };
    const response = await UserService.loginUser(user);

    if (response.status === 200) {
      setStatusMessages([{ message: 'login.success', type: "success" }]);

      const user = await response.json();
      sessionStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          token: user.token,
          fullname: user.fullname,
          username: user.username,
          role: user.role,
        })
      )
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else if (response.status === 401) {
      const { errorMessage } = await response.json();
      setStatusMessages([{ message: errorMessage, type: "error" }]);
    } else {
      setStatusMessages([
        {
          message: 'An error occurred. Please try again.',
          type: "error",
        }
      ])
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
              className="w-full bg-blue-500 text-black py-2 rounded hover:bg-blue-600"
            />
          </div>
          {error && <p className="text-center">{error}</p>}
        </form>
      </div>
      <Footer></Footer>
    </>
  );

};

export default Login;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  }
}
