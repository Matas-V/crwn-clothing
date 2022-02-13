import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = () => {
  const [info, setInfo] = useState({
    email: '', password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = info;
    dispatch(emailSignInStart({ email, password }));
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
          <CustomButton type="button" onClick={() => dispatch(googleSignInStart)} isGoogleSignIn>Sign In with Google</CustomButton> 
        </div>
      </form>
    </div>
  );
};

export default SignIn;