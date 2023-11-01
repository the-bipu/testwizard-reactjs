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

            <input type="text" name='email' placeholder='Email' className='email__input input__box' />
            <input type="password" name='password' placeholder='Password' className='password__input input__box' />
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