import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';

import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import './Dashboard.scss'

const Dashboard = () => {
    const { isLoggedIn, handleLogout, loggedInUsername } = useContext(UserContext);

  return (
      <div>
        <Navbar />

        <section className="heading-link">
            <h3>User Dashboard</h3>
            <p> <a href="/">home</a> / dashboard </p>
        </section>

        {isLoggedIn ?
            <div>
                <section className="dashboard">
                    <h1 className="heading"> Your Details </h1>
                
                    <div className="icons-container">

                        <div className="icons">
                            <i className="fas fa-user"></i>
                            <h3>{loggedInUsername}</h3>
                            <p>Welcome to TestWizard! Explore our services and resources by signing in. Once you're logged in, you can access a wide range of features and personalized content. Dive into subjects, practice LeetCode problems, and discover more about our platform's offerings. Get ready to elevate your learning experience!</p>
                            <button className='logout-btn' onClick={handleLogout}>Logout</button>
                        </div>

                    </div>
                </section>

                <div className="footer--sub">
                    <p>COPYRIGHT @2023 / TESTWIZARD</p>
                </div>
            </div>
            : 
            <div>
                <section className='logged-out'>
                    <h1 className="heading">You must login first for using our services.</h1>
                    <Link to={'/Login'} className='login-btn'>Login</Link>
                </section>

                <div className="footer--sub">
                    <p>COPYRIGHT @2023 / TESTWIZARD</p>
                </div>
            </div>
        }
    </div>
  )
}

export default Dashboard