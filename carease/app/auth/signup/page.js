'use client';
import React, { useState } from 'react';
import logo from '../../../public/images/logo.svg';
import google from '../../../public/images/google.svg';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex bg-signup-bg bg-cover h-[100%] text-white py-6 px-4 tracking-wide">
      <div className="mx-auto my-auto order-last">
        <h3 className="text-2xl text-center md:text-left mb-4 lg:mb-0">
          Sign Up
        </h3>
        <p>
          Unlock a Seamless Car Buying Experience: Create Your Account Today
        </p>
      </div>
      <div
        className=" bg-overlay_bg mx-auto w-auto 
      h-auto pb-1 pt-5 px-14 rounded-lg"
      >
        <Image
          src={logo}
          width={100}
          height={100}
          alt="supercar"
          className="mx-auto mb-4"
        />
        <div className="flex flex-col gap-6">
          <h4 className="text-[28px] font-semibold">Create Account</h4>

          <p className="text-[13.5px]">
            Sign up here for a personalized car shopping experience
          </p>
          <div className="flex flex-col gap-6">
            <button className="flex gap-2 border-2  w-full justify-center py-2 rounded-md text-lg">
              {' '}
              <Image src={google} width={30} height={30} alt="google" /> Sign in
              with Google
            </button>
            <div className="relative">
              <hr className="absolute  top-[50%] z-0 bg-white w-[26%] h-[0.10rem]" />
              <p className="text-center z-30">Or Sign in with Email</p>
              <hr className="absolute right-0 top-[50%] z-0 bg-white w-[26%] h-[0.10rem]" />
            </div>
          </div>

          <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
            <div>
              <label className="font-bold">NAME</label>
              <input
                value={name}
                type="name"
                placeholder="Enter Your Name"
                className="w-full h-[47.582px] flex-shrink-0 border-2 px-4 rounded-md mt-2 bg-transparent outline-none"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="font-bold">EMAIL</label>
              <input
                value={email}
                type="email"
                placeholder="Enter Your Email Id"
                className="w-full h-[47.582px] flex-shrink-0 border-2 px-4 rounded-md mt-2 bg-transparent outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <label className="font-bold"> PASSWORD</label>
              <input
                value={password}
                type={show ? 'text' : 'password'}
                placeholder="Enter Your Password"
                className="w-full h-[47.582px] flex-shrink-0 border-2 px-4 rounded-md mt-2 bg-transparent outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-[60%] right-3 text-[11.8px] font-bold"
                onClick={() => setShow(!show)}
                onMouseLeave={() => setShow(false)}
              >
                Show
              </button>
            </div>
            <div className="flex justify-between text-[11.8px]">
              <div>
                <input
                  type="checkbox"
                  className="bg-transparent border-2 mr-1"
                />{' '}
                Remember me
              </div>
              <Link href="/auth/forgetpassword"> Forgot Password ?</Link>
            </div>
            <button
              type="submit"
              className="bg-btn_blue font-semibold text-black h-[47.58px] rounded-md"
            >
              Create Account
            </button>
          </form>

          <p className="text-[11.8px] pb-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-bold ">
              Login
            </Link>{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
