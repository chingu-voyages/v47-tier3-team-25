import React from 'react';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { RxDiscordLogo } from 'react-icons/rx';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.svg';
const Footer = () => {
  return (
    <section className=" relative  w-full bg-black  text-white">
      <div className="flex flex-col gap-6 md:flex-row md:h-[500px] md:text-left text-center">
        <div className="md:w-[60%] py-24 md:px-28 md:text-left text-center">
          <h4 className="uppercase mb-10 text-2xl">CarEase Corperate</h4>
          <div className="flex flex-col gap-6 md:flex-row justify-between md:mr-10">
            <div>
              <ul className="flex flex-col gap-8">
                {['Partner', 'Careers', 'Media'].map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-6">
                {[
                  'CarEase Group',
                  'CarEase Racing',
                  'CarEase Applied',
                  'Investor',
                ].map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#2B3237] md:w-[40%] px-24 py-24 h-full ">
          <h4 className="uppercase text-2xl mb-10">Contact</h4>
          <div>
            <ul className="flex flex-col gap-8 mb-8">
              {[
                'Contact Us',
                'Enquire',
                'Find a Retailer',
                'Roadside Assistance',
              ].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <div className="">
              FOLLOW US
              <ul className="flex gap-4 mt-4 justify-center md:justify-start">
                {[
                  <PiFacebookLogoBold />,
                  <FaInstagram />,
                  <RxDiscordLogo />,
                  <CiTwitter />,
                ].map((item) => (
                  <li className="item" key={item}>
                    <a href="#" className="text-2xl">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="absolute bottom-6 md:bottom-10 md:left-10 left-[38%]"
      >
        <Image
          src={logo}
          width={100}
          height={100}
          alt="carease"
          className="mx-auto cursot-pointer"
        />
      </Link>
    </section>
  );
};

export default Footer;
