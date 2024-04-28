'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGripLines } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toogleNavbar = () => {
    return setShow(!show);
  };

  return (
    <nav className="nav text-lg">
      <Link href="/">
        <Image
          src="./images/carease-logo.svg"
          width={150}
          height={150}
          alt="carease"
          className="w-[100px] xl:w-[150px] "
        />
      </Link>
      <div className="flex items-center gap-10">
        <Image
          src="./images/compare-arrow-nav.svg"
          width={30}
          height={10}
          alt="compare-amount"
          className="xl:hidden block"
        />
        <button
          type="button"

          className="ml-auto xl:hidden text-white text-2xl"

          onClick={toogleNavbar}
        >
          {' '}
          {!show ? <FaGripLines /> : <IoClose />}
        </button>
      </div>
      {/* desktop navbar */}
      <div className="nav-desktop ">

        <div className="flex items-center  text-lg   gap-6 ">
          <Link href="/" className="bg-white px-8 py-1 rounded-full">
            Carlist
          </Link>
            <Link
            href="/"
            className=" text-white bg-[#E11D48] px-8 py-1  rounded-full"
          >
            Compare
          </Link>
         <Link href="/" className=" bg-white px-8 py-1 rounded-full">
            More
          </Link>
        </div>
        <div className="xl:ml-auto">
          <div className="flex gap-6 items-center  ">
            <Image
              src="./images/compare-arrow-nav.svg"
              width={40}
              height={10}
              alt="compare-amount"
            />
            <Link
              href="/auth/signup"
              className=" bg-white px-8 py-1 rounded-full"
            >
              Register
            </Link>

            <Link
              href="/auth/login"
              className=" bg-white px-8  py-1 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}

      {show && (
        <div className="nav-mobile">
          <div className="flex items-center  flex-col xl:flex-row text-xl text-bold  gap-6 xl:ml-28">
            <Link href="/" className="bg-white navlink">
              Carlist
            </Link>
            <Link href="/" className=" text-white bg-[#E11D48] navlink">
              Compare
            </Link>
            <Link href="/" className=" bg-white navlink">
              More
            </Link>
          </div>
          <div className="xl:ml-auto">
            <div className="flex flex-col xl:flex-row gap-6 items-center  ">
              <Link href="/auth/signup" className=" bg-white navlink">
                Register
              </Link>

              <Link
                href="/auth/login
          "
                className=" bg-white navlink"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
