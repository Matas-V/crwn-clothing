import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
  const [info, setInfo] = useState({
    displayName: '', email: '', password: '', confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = info;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setInfo({ displayName: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => { return {...prevState, [name]: value} });
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="text"
          name="displayName"
          value={info.displayName}
          onChange={(e) => handleChange(e)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={info.email}
          onChange={(e) => handleChange(e)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={info.password}
          onChange={(e) => handleChange(e)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={info.confirmPassword}
          onChange={(e) => handleChange(e)}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;