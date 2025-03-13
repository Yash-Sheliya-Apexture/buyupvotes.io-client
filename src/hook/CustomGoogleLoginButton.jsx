// components/CustomGoogleLoginButton.jsx
import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import googleLogo from '../assets/Images/google_logo.png'; // Adjust path if needed

function CustomGoogleLoginButton({ onSuccess, onError ,clientId}) {
  const googleLogin = useGoogleLogin({
    onSuccess: onSuccess, // Pass the onSuccess callback from parent
    onError: onError,     // Pass the onError callback from parent
    flow: 'auth-code',    // You can keep 'auth-code' if you intend to use authorization code flow
    clientId: clientId, //  <----  clientId prop is used here
  });

  return (
    <button
      onClick={googleLogin} // Call googleLogin function on button click
      className="flex items-center justify-center w-full gap-4 px-8 py-2.5 text-lg font-semibold transition-colors duration-300 bg-white border border-gray-300 rounded-xl text-balck hover:bg-gray-100 hover:border-gray-400 mb-4"
    >
      <img src={googleLogo} alt="Google Logo" className="w-6 h-6" />
      <div className="flex justify-center">
        <span className="text-xs">Sign in with Google</span>
      </div>
    </button>
  );
}

export default CustomGoogleLoginButton;