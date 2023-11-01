import React from 'react'

import { images } from '../../constants';
import './Login.scss';

const Login = () => {
  return (
    <div className='login__register'>
      <div className="header__login">
        <div className="container">
          <a href="/" className="logo"> <i className="fas fa-lightbulb"></i> TestWizard </a>
        </div>
      </div>

      <div className="main__content">
        <div className="main__illust">
          <img src={images.login} alt="" />
        </div>

        <div className="content__div">

          <div className="login__div">
            
            <div className='heading__div'>Login</div>

            <div className="email__div">
              <label htmlFor="Email" className='label__input'>Email</label>
              <input type="text" name='email' className='email__input input__box' />
            </div>

            <div className="password__div">
              <label htmlFor="Passoword" className='label__input'>Password</label>
              <input type="password" name='password' className='password__input input__box' />
            </div>

            <div className="password__route route">
              <a href="">Forget Password</a>
            </div>

            <div className="submit__button">
              <button type='submit' className='subMit'>Submit</button>
            </div>

            <div className="register__route route">
              Don't have an account?
              &nbsp;
              <a href="">Sign Up</a>
            </div>

          </div>

          <div className="register__div">
            <div className='heading__div'>Register</div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Login