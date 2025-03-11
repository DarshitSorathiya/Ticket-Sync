import React from 'react';

function SignUp() {
    return (
        <div className="bg-gray-900 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Create an Account</h2>

                {/* Standard Sign Up */}
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                        <input type="text" required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                            placeholder="Enter your full name" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                            placeholder="Enter your email" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                        <input type="text" id="mobile" required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                            placeholder="Enter your mobile number" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Create a password" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                        <input type="password" required 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Confirm your password" />
                    </div>

                    <button type="submit" 
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Sign Up
                    </button>
                </form>

                {/* OR Divider */}
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Sign Up with Google */}
                <button className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
                    Sign Up with Google
                </button>

                {/* OR Divider */}
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Sign Up with Phone OTP */}
                <button id="phoneSignUpBtn"
                    className="w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    Sign Up with Phone OTP
                </button>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? 
                    <a href="http://127.0.0.1:3002/login.html" className="text-blue-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;