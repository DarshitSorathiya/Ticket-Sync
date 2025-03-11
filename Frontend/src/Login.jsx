import React from "react";
import SignUp from "./SignUp";

function Login() {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Login to <a href="http://127.0.0.1:3002/swaphome.html" className="text-blue-600 hover:underline">Sync</a>
        </h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-gray-700 font-semibold mb-2">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email or phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
          Login with Google
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button
          id="phoneSignUpBtn"
          className="w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Login with Phone OTP
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? 
          <a href="http://127.0.0.1:3002/signup.html" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;