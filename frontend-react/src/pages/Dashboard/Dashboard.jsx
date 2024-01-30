import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import axios from 'axios';

import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import './Dashboard.scss'

const Dashboard = () => {
    const { isLoggedIn, handleLogout, loggedInUsername } = useContext(UserContext);
    const [quizData, setQuizData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [logOutTriggered, setLogOutTriggered] = useState(false);

    const getUrl = `https://testwizard-backend.vercel.app/quiz/get/${loggedInUsername}`;
    const userUrl = `https://testwizard-backend.vercel.app/users/${loggedInUsername}`;

    const showPopUp = () => {
        setLogOutTriggered(!logOutTriggered);
    };

    useEffect(() => {
        if (isLoggedIn) {
            // Fetch user data for the logged-in user
            fetch(userUrl)
                .then(response => response.json())
                .then(data => {
                    setUserData(data || []);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [isLoggedIn, loggedInUsername]);

    useEffect(() => {
        if (isLoggedIn) {
            // Fetch quiz data for the logged-in user
            fetch(getUrl)
                .then(response => response.json())
                .then(data => {
                    setQuizData(data?.quizzes);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching quiz data:', error);
                    setLoading(false);
                });
        }
    }, [isLoggedIn, loggedInUsername]);

    const deleteQuiz = async (quizId) => {
        try {
            const response = await axios.delete(`https://testwizard-backend.vercel.app/quiz/delete/${quizId}`);
            console.log(response.data.message);
            setQuizData(quizData.filter(quiz => quiz._id !== quizId));
        } catch (error) {
            console.error('Error deleting quiz:', error);
        }
    };

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
                    <section className={`dashboard`}>
                        <h1 className="heading"> Your Details </h1>

                        <div className="icons-container">

                            <div className="icons">
                                <div>
                                    {Object.keys(userData).length > 0 ? (
                                        <div className="userData-cards">
                                            <div className="userData-card">
                                                <i className="fas fa-user"></i>
                                                <h3>Hello, {loggedInUsername}</h3>

                                                <h3>{userData?.fname} {userData?.lname}</h3>
                                                <p>Email: {userData?.email}</p>
                                                <p>Phone: {userData?.phone}</p>
                                                <p>{userData?.gender}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>No user data available</p>
                                    )}
                                </div>
                                <p>Welcome to TestWizard! Explore our services and resources by signing in. Once you're logged in, you can access a wide range of features and personalized content. Dive into subjects, practice Quiz problems, and discover more about our platform's offerings. Get ready to elevate your learning experience!</p>

                                <button className='logout-btn' onClick={showPopUp}>Logout</button>

                                <div className={`${logOutTriggered ? 'popupShow' : 'popupHide'}`}>
                                    <div className='centerPopup'>
                                        <h1>Revoke access</h1>
                                        <p>Are you sure? This application will no longer be accessible and any
                                            existing sessions will be expired.</p>
                                        <div className="buttonSelect">
                                            <button className='cancelBtn' onClick={showPopUp}>Cancel</button>
                                            <button className='proceedBtn' onClick={handleLogout}>Proceed</button>
                                        </div>
                                    </div>
                                </div>

                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div className="quizData-cards">
                                        {quizData?.map((quiz, index) => (
                                            <div key={index} className="quizData-card">
                                                <h3>Quiz {index + 1}</h3>
                                                <p>Subject: {quiz?.subject}</p>
                                                <p>Marks: {quiz?.marks}</p>
                                                <p>Time: {formatTimeToAMPM(quiz?.time)}</p>
                                                <p>Date: {formatDate(quiz?.date)}</p>
                                                <button onClick={() => deleteQuiz(quiz?._id)} className='delete-btn'>Delete</button>
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
                <div className='LoggedOutDiv'>
                    <section className='logged-out'>
                        <h1 className="heading">You must login first for using our services.</h1>

                        <div className='login--here'>
                            <Link to={'/Login'} className='login-btn'>Login</Link>
                        </div>
                    </section>

                    {/* <div className="footer--sub">
                    <p>COPYRIGHT @2023 / TESTWIZARD</p>
                </div> */}
                </div>
            }
        </div>
    )
}

export default Dashboard