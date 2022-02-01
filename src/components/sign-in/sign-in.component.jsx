import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = () => {
  const [info, setInfo] = useState({
    email: '', password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({ email: '', password: '' });
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

        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;