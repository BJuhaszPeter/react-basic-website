import React from 'react';
import classes from './SigninElmenets.module.css';
import { Link as LinkR } from 'react-router-dom';

const SinginElmenets = () => {
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.FormWrapper}>
          <LinkR to='/' className={classes.Icon}>dolla</LinkR>
          <div className={classes.FormContent}>
            <form action='#' className={classes.Form}>
              <h1 className={classes.FormH1}>Sign in your account</h1>
              <label className={classes.FormLabel} htmlFor='for'>Email</label>
              <input className={classes.FormInput} type='email' required />
              <label className={classes.FormLabel} htmlFor='for'>Passworld</label>
              <input className={classes.FormInput} type='passsword' required />
              <button className={classes.Button} type='submit' required>Continue</button>
              <span className={classes.Text}>Forgot password</span>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default SinginElmenets;
