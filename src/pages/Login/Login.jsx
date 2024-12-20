import { useStore } from "@/zustand";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  document.title = "login";
  const onLogin = useStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData);

    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        onLogin(res.data.accessToken);
        navigate("/main/dashboard");
      })
      .catch((err) => {
        console.error("Login failed:", err);
        alert("Login failed. Please check your username and password.");
      })
      .finally(() => {
        form.reset();
      });
  };

  return (
    <div className="mt-60">
      <h2 className="font-[500] text-[20px] leading-[24px] text-white text-center mb-[20px]">
        Welcome to the dashboard
      </h2>
      <form
        className="text-center flex flex-col gap-[20px] justify-center items-center"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          name="username"
          className="w-[320px] p-[15px] rounded-xl bg-transparent outline-none border-[1px] border-blue-700 text-black"
          autoComplete="off"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          className="w-[320px] p-[15px] rounded-xl bg-transparent outline-none border-[1px] border-blue-700 text-black"
          autoComplete="off"
          placeholder="Password"
        />
        <button className="w-[320px] py-[15px] text-white rounded-xl bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
