import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import './Login.scss';
import { Navbar } from '../../components/index.js';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', username: '', password: '', age: '', gender: '', phone: '', fname: '', lname: '' });

  // Retrieve data from localStorage on component mount
  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('loggedInUsername') || '';
    setLoggedIn(storedLoggedInStatus);
    setLoggedInUsername(storedUsername);
  }, []);

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
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('loggedInUsername', '');
    setLoggedIn(false);
    setLoggedInUsername('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      if (loginData.username === "" || loginData.password === "") {
        window.alert("Fill all the areas first 👽. Then Only You'll get the entry !! 🚀🫰");
        return;
      }
    } else {
      if (registerData.username === "" || registerData.password === "" || registerData.email === "") {
        window.alert("Fill all the areas first 👽. Then Only You'll get the entry !! 🚀🫰");
        return;
      }
    };

    const url = isLogin
      ? 'http://localhost:5555/users/login'
      : 'http://localhost:5555/users/register';

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
        setLoggedIn(true);
        setLoggedInUsername(isLogin ? loginData.username : registerData.username);

        window.location.href = '/Dashboard';
        console.log('Success');

        isLogin
          ? setLoginData({ username: '', password: '' })
          : setRegisterData({ email: '', username: '', password: '', age: '', gender: '', phone: '', fname: '', lname: '' });
      } else {
        window.alert(`Operation failed: ${result.message}`);
        console.error('Failed');
        isLogin
          ? setLoginData({ username: '', password: '' })
          : setRegisterData({ email: '', username: '', password: '', age: '', gender: '', phone: '', fname: '', lname: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Update localStorage when the login status changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('loggedInUsername', loggedInUsername);
  }, [isLoggedIn, loggedInUsername]);

  return (
    <>
      <div className='login__register'>

      <Navbar />

        <div className='main__content'>

          <div className="content__div">

            <form action='/' onSubmit={handleSubmit}>

              <div className="login__div" style={{ display: isLogin ? 'block' : 'none' }}>

                <div className='heading__div'>Welcome Master 🤖</div>

                <div className="username__div">
                  <label htmlFor="Username" className='label__input'>Username</label>
                  <input type="text" name='username' onChange={handleInputChange} title='Must be a valid Username' className='username__input input__box' required={isLogin} />
                </div>

                <div className="password__div">
                  <label htmlFor="Password" className='label__input'>Password</label>
                  <input type="password" name='password' onChange={handleInputChange} title='Must be at least 6 characters' className='password__input input__box' required={isLogin} />
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

                <div className='heading__div'>Join Our Community !! 💻</div>

                <div className="main--contentDiv">
                  <div className="first--section">

                    <div className="email__div">
                      <label htmlFor="Email" className='label__input'>Email</label>
                      <input type="email" name="email" onChange={handleInputChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Must be a valid Email" className="email__input input__box" required={!isLogin} />
                    </div>

                    <div className="names--div">
                      <div className="username__div">
                        <label htmlFor="Name" className='label__input'>First Name</label>
                        <input type="text" name="fname" onChange={handleInputChange} className="username__input input__box" required={!isLogin} />
                      </div>

                      <div className="username__div">
                        <label htmlFor="Name" className='label__input'>Second Name</label>
                        <input type="text" name="lname" onChange={handleInputChange} className="username__input input__box" required={!isLogin} />
                      </div>
                    </div>

                    <div className="age--type">
                      <div className="age--div">
                        <label htmlFor="Name" className='label__input'>Age</label>
                        <input type="number" name="age" onChange={handleInputChange} pattern="[0-9]" className="age__input input__box" required={!isLogin} />
                      </div>

                      <div className="gender--div">
                        <label htmlFor="Name" className='label__input'>Gender</label>
                        <select type='text' name="gender" className='gender__input input__box' onChange={handleInputChange} required={!isLogin}>
                          <option value="Male">------</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {/* <input type="text" name="fname" onChange={handleInputChange} pattern="[0-9]" className="username__input input__box" required={!isLogin} /> */}
                      </div>
                    </div>

                    <div className="username__div">
                      <label htmlFor="Phone" className='label__input'>Phone Number</label>
                      <input type="number" name="phone" onChange={handleInputChange} pattern="[0-9]" title="Must be a valid Number" className="phone__input input__box" required={!isLogin} />
                    </div>
                  </div>

                  <div className="second--section">
                    <div className="username__div">
                      <label htmlFor="Username" className='label__input'>Username</label>
                      <input type="text" name="username" onChange={handleInputChange} title='Must be a valid Username' pattern='[a-zA-Z0-9_]{3,}' className='username__input input__box' required={!isLogin} />
                    </div>

                    <div className="password__div">
                      <label htmlFor="Passoword" className='label__input'>Password</label>
                      <input type="password" name="password" onChange={handleInputChange} title='Must be at least 6 characters' pattern='[a-zA-Z0-9]{6,}' className='password__input input__box' required={!isLogin} />
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
                </div>

              </div>

            </form>

          </div>
        </div>

        <div className="footer--login">
            <p>COPYRIGHT @2023 / TESTWIZARD</p>
        </div>

      </div>

    </>
  )
}

export default Login