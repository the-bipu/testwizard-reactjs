import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import axios from 'axios';

import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import './Dashboard.scss'

const Dashboard = () => {
    const { isLoggedIn, handleLogout, loggedInUsername } = useContext(UserContext);
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios
    //       .get(`http://localhost:5555/quiz/get/${loggedInUsername}`)
    //       .then((response) => {
    //         setQuizData(response.data.quizzes);
    //         console.log(quizData);
    //         console.log(loggedInUsername);
    //         console.log('quizdata');
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);

    const url = `http://localhost:5555/quiz/get/${loggedInUsername}`;
    console.log(url);

    useEffect(() => {
        if (isLoggedIn) {
            // Fetch quiz data for the logged-in user
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setQuizData(data.quizzes);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching quiz data:', error);
                    setLoading(false);
                });
        }
    }, [isLoggedIn, loggedInUsername]);

    console.log(quizData);
    console.log(loggedInUsername);
    console.log('another');

    // Define functions to format time and date
    const formatTimeToAMPM = (seconds) => {
        const date = new Date(seconds * 1000); // Convert seconds to milliseconds
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        return formattedTime;
    };
    
    const formatDate = (dateString) => {
        const formattedDate = new Date(dateString);
        return formattedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };


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
                            {loading ? (
                            <p>Loading...</p>
                            ) : (
                                <div className="quizData-cards">
                                    {quizData.map((quiz, index) => (
                                        <div key={index} className="quizData-card">
                                            <h3>Quiz {index + 1}</h3>
                                            <p>Marks: {quiz.marks}</p>
                                            <p>Time: {formatTimeToAMPM(quiz.time)}</p>
                                            <p>Date: {formatDate(quiz.date)}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
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