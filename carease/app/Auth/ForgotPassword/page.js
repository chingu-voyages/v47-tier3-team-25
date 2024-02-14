import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
//file imports
import PasswordLockImg from '../../../public/password-lock-icon.svg';
import CloseIcon from '../../../public/close-icon.svg';

const ForgotPassword = () => {
  return (
    <section className="forgot-password-container">
      {/* left side div */}
      <div className="relative ml-2">
        <h2 className="text-2xl font-bold">Forgot Password?</h2>
        <p className="text-lg">Recover Here or Regain Access Here</p>
      </div>

      {/* right side div with form */}
      <div className="hover-card">
        <button className="close-btn">
          <Image
            src={CloseIcon}
            width={'10px'}
            height={'10px'}
            alt="close-button"
          />
        </button>
        <Image
          src={PasswordLockImg}
          width={'100px'}
          height={'100px'}
          alt="Password-Lock"
          className="opacity-100"
        />
        <h3 className="font-bold">Forgot Password</h3>
        <p className="text-center">
          Enter the email you used to create your account so we can send you a
          link for resetting your password.
        </p>

        <form className="forgot-password-form">
          <label htmlFor="email" className="text-xs font-semibold uppercase">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Id"
          />
          <button type="submit" className="forgot-password-send-btn">
            Send
          </button>
        </form>
        <button className="forgot-password-login-btn">Back to Login</button>
      </div>
    </section>
  );
};

export default ForgotPassword;
