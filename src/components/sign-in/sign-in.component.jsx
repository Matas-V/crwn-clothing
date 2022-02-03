import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

const SignIn = () => {
  const [info, setInfo] = useState({
    email: '', password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = info;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInfo({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput name='email' type='email' value={info.email} label="Email" required handleChange={(e) => handleChange(e)} />
        <FormInput name='password' type='password' value={info.password} label="Password" required handleChange={(e) => handleChange(e)} />

        <div className='buttons'>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;