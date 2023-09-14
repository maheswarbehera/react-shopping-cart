
import React from 'react';
import { auth } from '../../Config/Firebase';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      // Redirect the user to the desired page upon successful Google login
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Log In with Google</button>
    </div>
  );
};

export default GoogleLogin;
