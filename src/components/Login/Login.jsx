// import React from 'react'
import logo from "../../assets/google.svg";
import apple_logo from "../../assets/apple.svg";

function Login() {
  return (
    <div className="h-full w-full bg-[#000000db] backdrop-blur-lg p-5 flex items-center flex-col max-w-[400px]">
      <div className="logo_div w-full text-white font-bold text-2xl py-5 mb-4">
        MASKEDME
      </div>
      <div className="heading_div w-full text-white text-4xl font-bold mb-10">
        Login to a new world!
      </div>

      <div className="social_btns w-full h-[100px] mb-10">
        <div className="social_btn w-full p-[8px] rounded-[50px] text-white border-[2px] flex items-center justify-center h-[40px] overflow-hidden cursor-pointer">
          <span className="h-full mr-3">
            <img src={logo} className="h-full" alt="google_logo" />
          </span>
          Login with Google
        </div>

        <div className="social_btn w-full p-[8px] rounded-[50px] text-white border-[2px] flex items-center justify-center h-[40px] overflow-hidden mt-3 cursor-pointer">
          <span className="h-full mr-3">
            <img src={apple_logo} className="h-full" alt="_logo" />
          </span>
          Login with Apple ID
        </div>
      </div>

      <div className="form_div w-full h-full flex items-center  text-red-400 flex-col">
        <div className="input_field_container w-full flex flex-col">
          <label className=" text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value=""
            name="email"
            placeholder="Email"
            className="w-full h-full p-2 rounded-[5px] outline-none"
          />
        </div>

        <div className="input_field_container w-full flex flex-col mt-3">
          <label className=" text-white" htmlFor="pass">
            Password
          </label>
          <input
            type="password"
            value=""
            name="pass"
            placeholder="Password"
            className="w-full h-full p-2 rounded-[5px] outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
