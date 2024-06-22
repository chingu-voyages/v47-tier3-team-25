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
          src="/images/carease-logo.svg"
          width={150}
          height={150}
          alt="carease"
          className="w-[100px] xl:w-[150px] "
        />
      </Link>
      <div className="flex items-center gap-10">
        <Image
          src="/images/compare-arrow-nav.svg"
          width={30}
          height={10}
          alt="compare-amount"
          className="md:hidden block"
        />
        <button
          type="button"
          className="ml-auto md:hidden text-white text-2xl"
          onClick={toogleNavbar}
        >
          {' '}
          {!show ? <FaGripLines /> : <IoClose />}
        </button>
      </div>
      {/* desktop navbar */}

      <div className="nav-desktop font-navItems font-normal">
        <div className="flex items-center  text-lg gap-6 relative">
          <Link
            href="/carlist"
            className="bg-white px-8 py-1 rounded-full md:text-sm md:px-3 lg:text-lg lg:px-4 xl:px-8"
          >
            Carlist
          </Link>
          <Link
            href="/comparison"
            className=" text-white bg-[#E11D48] px-8 py-1  rounded-full md:text-sm md:px-3 lg:text-lg lg:px-4 xl:px-8"
          >
            Compare
          </Link>
          <button
            className=" bg-white px-8 py-1 rounded-full md:text-sm md:px-3 lg:text-lg lg:px-8 xl:px-8"
            onClick={() => setShow(!show)}
          >
            More
          </button>
          {show && (
            <div
              className="absolute bg-gradient-to-t to-[#343131]/80 from-black/50  text-white flex flex-col right-0 top-10 z-80 px-8 rounded-md py-8 shadow-xl gap-4"
              onMouseLeave={() => setShow(false)}
            >
              <Link href="">Super Cars</Link>
              <Link href="">Popular Cars</Link>
              <Link href="">Upcoming Cars</Link>
              <Link href="">Other Cars</Link>
            </div>
          )}
        </div>
        <div className="xl:ml-auto">
          <div className="flex gap-6 items-center  ">
            <Image
              src="/images/compare-arrow-nav.svg"
              width={30}
              height={10}
              alt="compare-amount"
              className="mx-4 lg:mx-8"
            />
            <Link
              href="/auth/signup"
              className=" bg-white px-8 py-1 rounded-full md:text-sm md:px-3 lg:text-lg lg:px-4 xl:px-8"
            >
              Register
            </Link>

            <Link
              href="/auth/login"
              className=" bg-white px-8  py-1 rounded-full md:text-sm md:px-3 lg:text-lg lg:px-4 xl:px-8"
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
            <Link href="/carlist" className="bg-white navlink">
              Carlist
            </Link>
            <Link
              href="/comparison"
              className=" text-white bg-[#E11D48] navlink"
            >
              Compare
            </Link>
            <Link href="/carlist" className=" bg-white navlink">
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
