import React, { useState } from 'react';

import { images } from '../../constants';
import './Login.scss';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    password: ''
  });

  // New state to track user login status
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    console.log(isLogin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (isLogin) {
      setLoginData({
        ...loginData,
        [name]: value,
      });
    } else {
      setRegisterData({
        ...registerData,
        [name]: value,
      });
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInUsername('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(isLogin){
      if(loginData.username === "" || loginData.password === ""){
        window.alert("Fill all the areas first 👽. Then Only You'll get the entry !! 🚀🫰");
        return;
      }
    } else {
      if(registerData.username === "" || registerData.password === "" || registerData.email === ""){
        window.alert("Fill all the areas first 👽. Then Only You'll get the entry !! 🚀🫰");
        return;
      }
    };

    const url = isLogin
    ? 'http://localhost:5555/api/users/login'
    : 'http://localhost:5555/api/users/register';

    try {
      const formData = isLogin ? loginData : registerData;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        window.alert(isLogin ? 'Login Successful!' : 'Registration Successful!');
        if(isLogin) {
          setLoggedIn(true);
          setLoggedInUsername(loginData.username);
        }
        console.log('Success');
        isLogin
        ? setLoginData({ username: '', password: '' })
        : setRegisterData({ email: '', username: '', password: '' });
      } else {
        window.alert(`Operation failed: ${result.message}`);
        console.error('Failed');
        isLogin
        ? setLoginData({ username: '', password: '' })
        : setRegisterData({ email: '', username: '', password: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
}

  return (
    <div className='login__register'>

      <div className="header__login">
        <div className="container">
          <a href="/" className="logo"> <i className="fas fa-lightbulb"></i> TestWizard </a>
        </div>
      </div>

      <div>

        {isLoggedIn ? (
          <div>
            <p>Welcome, {loggedInUsername}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className='main__content'>
            <div className="main__illust">
              <img src={images.login} alt="" />
            </div>

            <div className="content__div">

              <form action='' onSubmit={handleSubmit}>

                <div className="login__div" style={{ display: isLogin ? 'block' : 'none' }}>

                <div className='heading__div'>Login</div>

                <div className="username__div">
                  <label htmlFor="Username" className='label__input'>Username</label>
                  <input type="text" name='username' onChange={handleInputChange} title='Must be a valid Username' className='username__input input__box' required />
                </div>

                <div className="password__div">
                  <label htmlFor="Password" className='label__input'>Password</label>
                  <input type="password" name='password' onChange={handleInputChange} title='Must be at least 6 characters' pattern='[a-zA-Z0-9]{6,}' className='password__input input__box' required />
                </div>

                <div className="password__route route">
                  <button type='button' href="">Forget Password !?</button>
                </div>

                <div className="submit__button">
                  <button type='submit' className='subMit'>Submit</button>
                </div>

                <div className="register__route route">
                  Don't have an account?
                  &nbsp;
                  <button type='button' onClick={toggleLogin}>Sign Up</button>
                </div>

                </div>

                <div className="register__div" style={{ display: isLogin ? 'none' : 'block' }}>

                <div className='heading__div'>Register</div>

                <div className="email__div">
                  <label htmlFor="Email" className='label__input'>Email</label>
                  <input type="text" name='email' onChange={handleInputChange} title='Must be a valid Email' pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}' className='email__input input__box' required />
                </div>

                <div className="username__div">
                  <label htmlFor="Username" className='label__input'>Username</label>
                  <input type="text" name='username' onChange={handleInputChange} title='Must be a valid Username' pattern='[a-zA-Z0-9_]' className='username__input input__box' required />
                </div>

                <div className="password__div">
                  <label htmlFor="Passoword" className='label__input'>Password</label>
                  <input type="password" name='password' onChange={handleInputChange} title='Must be at least 6 characters' pattern='[a-zA-Z0-9]{6,}' className='password__input input__box' required />
                </div>

                <div className="submit__button">
                  <button type='submit' className='subMit'>Submit</button>
                </div>

                <div className="register__route route">
                  Already have an account?
                  &nbsp;
                  <button type='button' onClick={toggleLogin}>Login</button>
                </div>

                </div>

              </form>

            </div>
          </div>
        )}

      </div>
      
    </div>
  )
}

export default Login