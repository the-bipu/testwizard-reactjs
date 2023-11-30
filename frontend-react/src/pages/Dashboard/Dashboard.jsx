import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { AlertDialog, Flex, Button } from '@radix-ui/themes';

import { Navbar } from '../../components';
import { Link } from 'react-router-dom';
import './Dashboard.scss'

const Dashboard = () => {
    const { isLoggedIn, handleLogout, loggedInUsername } = useContext(UserContext);
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUrl = `http://localhost:5555/quiz/get/${loggedInUsername}`;
    console.log(getUrl);

    useEffect(() => {
        if (isLoggedIn) {
            // Fetch quiz data for the logged-in user
            fetch(getUrl)
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

    const deleteQuiz = async (quizId) => {
        try {
          const response = await axios.delete(`http://localhost:5555/quiz/delete/${quizId}`);
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
                <section className="dashboard">
                    <h1 className="heading"> Your Details </h1>
                
                    <div className="icons-container">

                        <div className="icons">
                            <i className="fas fa-user"></i>
                            <h3>{loggedInUsername}</h3>
                            <p>Welcome to TestWizard! Explore our services and resources by signing in. Once you're logged in, you can access a wide range of features and personalized content. Dive into subjects, practice Quiz problems, and discover more about our platform's offerings. Get ready to elevate your learning experience!</p>
                            <AlertDialog.Root>
                                <AlertDialog.Trigger>
                                    <button className='logout-btn'>Logout</button>
                                </AlertDialog.Trigger>
                                <AlertDialog.Content style={{ maxWidth: 450 }}>
                                    <AlertDialog.Title>Revoke access</AlertDialog.Title>
                                    <AlertDialog.Description size="2">
                                    Are you sure? This application will no longer be accessible and any
                                    existing sessions will be expired.
                                    </AlertDialog.Description>

                                    <Flex gap="3" mt="4" justify="end">
                                    <AlertDialog.Cancel>
                                        <Button variant="soft" color="gray">
                                        Cancel
                                        </Button>
                                    </AlertDialog.Cancel>
                                    <AlertDialog.Action>
                                        <Button variant="solid" color="red" onClick={handleLogout}>
                                        Revoke access
                                        </Button>
                                    </AlertDialog.Action>
                                    </Flex>
                                </AlertDialog.Content>
                            </AlertDialog.Root>
                            {loading ? (
                            <p>Loading...</p>
                            ) : (
                                <div className="quizData-cards">
                                    {quizData.map((quiz, index) => (
                                        <div key={index} className="quizData-card">
                                            <h3>Quiz {index + 1}</h3>
                                            <p>Subject: {quiz.subject}</p>
                                            <p>Marks: {quiz.marks}</p>
                                            <p>Time: {formatTimeToAMPM(quiz.time)}</p>
                                            <p>Date: {formatDate(quiz.date)}</p>
                                            <button onClick={() => deleteQuiz(quiz._id)} className='delete-btn'>Delete</button>
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