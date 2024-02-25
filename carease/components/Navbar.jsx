import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10  py-3 text-black">
      <Link href="/">
        <Image src="./images/logo.svg" width={100} height={100} alt="carease" />
      </Link>
      <div>
        <div className="flex gap-1">
          <Image
            src="./images/profile-logo.svg"
            width={20}
            height={10}
            alt="profile-logo"
          />
          <a href="/auth/login">Login</a>
          <p>/</p>
          <a
            href="/auth/signup
          "
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
