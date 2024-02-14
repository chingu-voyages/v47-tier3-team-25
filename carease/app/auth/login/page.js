'use client';
import React, { useState } from 'react';
import logo from '../../../public/images/logo.svg';
import google from '../../../public/images/google.svg';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Router, useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', user);
      console.log(response);
      console.log('Login successfull', response.data);

      router.push('/carlist');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className=" bg-supercar bg-cover h-[100%] text-white py-6 px-4 tracking-wide">
      <h3 className="text-2xl text-center md:text-left mb-4 lg:mb-0">
        Welcome Back,
      </h3>
      <div className=" bg-overlay_bg mx-auto w-[428px] h-[670.304px] pb-1 pt-5 px-14 rounded-lg">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="supercar"
          className="mx-auto"
        />
        <div className="flex flex-col gap-6">
          <h4 className="text-[28px] font-semibold">Login</h4>

          <p className="text-[13.5px]">
            Elevate your car buying adventure. Enjoy the thrill of a better
            experience
          </p>
          <div className="flex flex-col gap-6">
            <button className="flex gap-2 border-2  w-full justify-center py-2 rounded-md text-lg">
              {' '}
              <Image src={google} width={30} height={30} alt="google" /> Sign in
              with Google
            </button>
            <div className="relative">
              <hr className="absolute  top-[50%] z-0 bg-white w-[23%] h-[0.10rem]" />
              <p className="text-center z-30">Or Sign in with Email</p>
              <hr className="absolute right-0 top-[50%] z-0 bg-white w-[23%] h-[0.10rem]" />
            </div>
          </div>

          <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
            <div>
              <label className="font-bold">EMAIL</label>
              <input
                value={user.email}
                type="email"
                placeholder="Enter Your Email Id"
                className="w-full h-[47.582px] flex-shrink-0 border-2 px-4 rounded-md mt-2 bg-transparent outline-none"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <label className="font-bold"> PASSWORD</label>
              <input
                value={user.password}
                type={show ? 'text' : 'password'}
                placeholder="Enter Your Password"
                className="w-full h-[47.582px] flex-shrink-0 border-2 px-4 rounded-md mt-2 bg-transparent outline-none"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              Login
            </button>
          </form>

          <p className="text-[11.8px] ">
            Not register yet?{' '}
            <Link href="/auth/signup" className="font-bold ">
              Create an Account
            </Link>{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
