import React, { useEffect, useRef, useState, useContext } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Store } from "../redux/Share_store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CloseSvg } from "./Svgs";
import Loader from "./Loader";





export type LoginScreenState = "HIDDEN" | "LOGIN" | "SIGNUP";

export const useLoginScreen = () => {
  const location = useLocation()
  const { state } = useContext(Store);
  const { userSlice } = state;
  const loggedIn = userSlice.loggedIn;
  const queryState: LoginScreenState = (() => {
    if (loggedIn) return "HIDDEN";
    if (location.search.includes("login")) return "LOGIN";
    if (location.search.includes("sign-up")) return "SIGNUP";
    return "HIDDEN";
  })();
  const [loginScreenState, setLoginScreenState] = useState(queryState);
  useEffect(() => setLoginScreenState(queryState), [queryState]);
  return { loginScreenState, setLoginScreenState };
};

export const LoginScreen = ({
  loginScreenState,
  setLoginScreenState,
}: {
  loginScreenState: LoginScreenState;
  setLoginScreenState: React.Dispatch<React.SetStateAction<LoginScreenState>>;
}) => {
  const { state, dispatch } = useContext(Store);
  const { userSlice, loaderSlice } = state;
  const loggedIn = userSlice.loggedIn;
  const nameInputRef = useRef<null | HTMLInputElement>(null);
  const navigate = useNavigate()
  useEffect(() => {
    if (loginScreenState && loggedIn && loginScreenState !== "HIDDEN") {
      setLoginScreenState("HIDDEN");
    }
  }, [loginScreenState, loggedIn, setLoginScreenState]);



  const [ loading, setLoading ] = useState(loaderSlice.isLoading)

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [signupInfo, setSignupInfo] = useState({
    username: '',
    email: '',
    photo: '',
    password: '',
  });
  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true)
      const { data } = await axios.post('http://localhost:5000/users/signin', loginInfo);
      dispatch({type: 'LOG_IN', payload: data})
      localStorage.setItem('userData', JSON.stringify(data))
      setLoading(false)
      toast.success('login success')
      navigate('/learn')
    } catch (error) {
      setLoading(false)
      toast.error('login not successful')
      console.error('Login Failed:', error);
    }
  };

  // Function to handle signup
  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:5000/users/signup', signupInfo);
      setLoading(false)
      localStorage.setItem('userData', JSON.stringify(data))
      dispatch({type: 'LOG_IN', payload: data})
      setLoading(false)
      toast.success('signup successful')
      navigate('/learn')
    } catch (error) {
      setLoading(false)
      toast.error('signup not successful')
      console.log('Signup Failed:', error);
    }
  };



  const uploadFileHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    setLoading(true)
    try {
      const response = await axios.post(
        "http://localhost:5000/users/picture",
        bodyFormData
      );

      setSignupInfo({ ...signupInfo, photo: response.data.secure_url });

      toast.success("Image uploaded successfully. Click Update to apply it");
    } catch (err) {
      toast.error('Image not uploaded successfully');
      console.log(err)
    } finally {
      setLoading(false)
    }
  };





  return (
    <article
      className={[
        "fixed inset-0 z-30 flex flex-col bg-white p-7 transition duration-300",
        loginScreenState === "HIDDEN"
          ? "pointer-events-none opacity-0"
          : "opacity-100",
      ].join(" ")}
      aria-hidden={!loginScreenState}
    >
      <header className="flex flex-row-reverse justify-between sm:flex-row">
        <button
          className="flex text-gray-400"
          onClick={() => setLoginScreenState("HIDDEN")}
        >
          <CloseSvg />
          <span className="sr-only">Close</span>
        </button>
        <button
          className="hidden rounded-2xl border-2 border-b-4 border-gray-200 px-4 py-3 text-sm font-bold uppercase text-blue-400 transition hover:bg-gray-50 hover:brightness-90 sm:block"
          onClick={() =>
            setLoginScreenState((x) => (x === "LOGIN" ? "SIGNUP" : "LOGIN"))
          }
        >
          {loginScreenState === "LOGIN" ? "Sign up" : "Login"}
        </button>
      </header>
      <div className="flex grow items-center justify-center">
        <div className="flex w-full flex-col gap-5 sm:w-96">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            {loginScreenState === "LOGIN" ? "Log in" : "Create your profile"}
          </h2>
          <div className="flex flex-col gap-2 text-black">
            <div className="flex flex-col gap-2 text-black">
              {loginScreenState === "SIGNUP" && (
                <>
                  <input
                    className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                    placeholder="Name"
                    ref={nameInputRef}
                    value={signupInfo.username}
                    required={true}
                    onChange={(e) =>
                      setSignupInfo({ ...signupInfo, username: e.target.value })
                    }
                  />
                </>
              )}
              <input
                className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                required={true}
                placeholder={
                  loginScreenState === "LOGIN"
                    ? "Email"
                    : "Email"
                }
                value={loginScreenState === "LOGIN" ? loginInfo.email : signupInfo.email}
                onChange={(e) =>
                  loginScreenState === "LOGIN"
                    ? setLoginInfo({ ...loginInfo, email: e.target.value })
                    : setSignupInfo({ ...signupInfo, email: e.target.value })
                }
              />
              <div className="relative flex grow">
                <input
                  className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                  placeholder="Password"
                  type="password"
                  required={true}
                  value={loginScreenState === "LOGIN" ? loginInfo.password : signupInfo.password}
                  onChange={(e) =>
                    loginScreenState === "LOGIN"
                      ? setLoginInfo({ ...loginInfo, password: e.target.value })
                      : setSignupInfo({ ...signupInfo, password: e.target.value })
                  }
                />
                {loginScreenState === "LOGIN" && (
                  <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center pr-5">
                    <Link
                      className="font-bold uppercase text-gray-400 hover:brightness-75"
                      to="/forgot-password"
                    >
                      Forgot?
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative flex grow">
                {loginScreenState === "SIGNUP" && (
                  <input
                    required={true}
                    className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                    type="file"
                    placeholder="Profile"
                    onChange={(e) => uploadFileHandler(e)}
                  />
                )
                }
              </div>
            </div>
            {loading ? <Loader /> : (<button
              className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
              onClick={loginScreenState === "LOGIN" ? handleLogin : handleSignup}
            >
              {loginScreenState === "LOGIN" ? "Log in" : "Create account"}
            </button>)}
            <div className="flex items-center gap-2">
              <div className="h-[2px] grow bg-gray-300"></div>
              <span className="font-bold uppercase text-gray-400">or</span>
              <div className="h-[2px] grow bg-gray-300"></div>
            </div>

            <p className="text-center text-xs leading-5 text-gray-400">
              By signing in to Social, you agree to our{" "}
              <Link
                className="font-bold"
                to="https://www.duolingo.com/terms?wantsPlainInfo=1"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                className="font-bold"
                to="https://www.duolingo.com/privacy?wantsPlainInfo=1"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="block text-center sm:hidden">
              <span className="text-sm font-bold text-gray-700">
                {loginScreenState === "LOGIN"
                  ? "Don't have an account?"
                  : "Have an account?"}
              </span>{" "}
              <button
                className="text-sm font-bold uppercase text-blue-400"
                onClick={() =>
                  setLoginScreenState((x) => (x === "LOGIN" ? "SIGNUP" : "LOGIN"))
                }
              >
                {loginScreenState === "LOGIN" ? "sign up" : "log in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
