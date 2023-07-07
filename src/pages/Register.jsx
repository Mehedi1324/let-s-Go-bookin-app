import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaCog, FaFacebookF } from 'react-icons/fa';
import { useAuth } from '../context/firebaseContext';
// import useFirebase from '../firebase/useFirebase';
const Register = () => {
  const {
    user,
    nameRef,
    emailRef,
    passwordRef,
    handleSignUp,
    handleGoogleSignIn,
    handleFacebookSignIn,
  } = useAuth();
  // console.log(nameRef.current.value);
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [passLengthError, setPassLengthError] = useState('');
  const [passMatched, setpassMatched] = useState(false);
  const navigate = useNavigate();

  const handllePasswordChange = (e) => {
    const pass = e.target.value;
    if (pass.length < 6) {
      setPassLengthError('password should be at least 6 charector long');
    } else {
      setPassword(pass);
      setPassLengthError(null);
    }
  };

  const handlleRepasswordChange = (e) => {
    const repassword = e.target.value;
    if (repassword === password) {
      setpassMatched(true);
      setErr(null);
    } else {
      setErr('Password does not match !');
    }
  };

  return (
    <div className="">
      <div>
        <Header />
        <div>
          <div className="flex flex-col items-center justify-center h-[70vh] gap-4 my-auto mt-4">
            <div>
              <h1 className="text-[25px] font-bold p-3">Register Now !</h1>
            </div>
            <form
              onSubmit={handleSignUp}
              className="flex flex-col gap-4"
              action=""
            >
              <input
                className="w-[350px] h-[40px] p-2 rounded-sm"
                ref={nameRef}
                required
                type="text"
                placeholder="User Name"
              />
              <input
                className="w-[350px] h-[40px] p-2 rounded-sm"
                ref={emailRef}
                required
                type="email"
                placeholder="Email"
              />
              <input
                className="w-[350px] h-[40px] p-2 rounded-sm"
                type="password"
                required
                placeholder="Password"
                onChange={handllePasswordChange}
              />
              <p className="text-red-700">{passLengthError}</p>
              <input
                required
                ref={passwordRef}
                onChange={handlleRepasswordChange}
                className="w-[350px] h-[40px] p-2 rounded-sm"
                type="password"
                placeholder="Confirm Password"
              />
              <p className="text-red-700">{err}</p>
              <input
                type="submit"
                onSubmit={handleSignUp}
                value="Register Now"
                className="w-[350px] text-white font-bold bg-blue-500  shadow-custom-dark hover:bg-gray-700 h-[40px] p-2 rounded-sm"
              />
            </form>
            {/* {error && <span className="mr-5 text-black">{error.message}</span>} */}
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
            <div>
              <p>
                Already have an account ?
                <span
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  {' '}
                  Login now !{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
