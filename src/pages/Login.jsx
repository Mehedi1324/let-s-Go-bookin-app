import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/firebaseContext';
const Login = () => {
  const navigate = useNavigate();
  const {
    handleSignIn,
    emailRef,
    passwordRef,
    handleResetPassword,
    user,
    error,
    handleFacebookSignIn,
    handleGoogleSignIn,
  } = useAuth();
  console.log(user);

  return (
    <div>
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center h-[70vh] gap-4 my-auto">
          <div>
            <h1 className="text-[25px] font-bold p-3">Log into your account</h1>
          </div>
          <form
            onSubmit={handleSignIn}
            className="flex flex-col gap-4"
            action=""
          >
            <input
              ref={emailRef}
              className="w-[350px] h-[40px] p-2 rounded-sm"
              type="email"
              placeholder="email"
            />
            <input
              ref={passwordRef}
              className="w-[350px] h-[40px] p-2 rounded-sm"
              type="password"
              placeholder="password"
            />
            <input
              type="submit"
              onSubmit={handleSignIn}
              value="Login"
              className="w-[350px] text-white font-bold bg-blue-500  shadow-custom-dark hover:bg-gray-700 h-[40px] p-2 rounded-sm"
            />
          </form>
          <div>__________________or__________________</div>

          {/* social media login___________________ */}
          <div className="flex gap-4">
            <div
              onClick={handleGoogleSignIn}
              className="flex cursor-pointer hover:shadow-custom-light p-2 px-3 rounded-[3px] text-sm text-white bg-gradient-to-r to-green-800 from-red-800"
            >
              <FcGoogle className=" text-[20px] mr-3" /> Login With Google
            </div>
            <div
              onClick={handleFacebookSignIn}
              className="flex p-2 hover:shadow-custom-light px-3 cursor-pointer text-sm text-white rounded-[3px] bg-gradient-to-r from-blue-800 to-blue-600"
            >
              <FaFacebookF className="text-[20px] mr-3" /> Login With Facebook
            </div>
          </div>
          {/* ___________________________________- */}

          {/* {error && <span className="mr-5 text-black">{error.message}</span>} */}
          <div>
            <p>
              Don't have any account ?
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => navigate('/register')}
              >
                {' '}
                register now !{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
