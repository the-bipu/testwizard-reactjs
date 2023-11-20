import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import axios from 'axios';

import { Navbar } from '../../components';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { isLoggedIn, handleLogout, loggedInUsername } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const isAdmin = (loggedInUsername === '__astrophile_xd');

    useEffect(() => {
        if (isLoggedIn && isAdmin) {
            axios.get('http://localhost:5555/api/users/all-users')
                .then(response => {
                    setUsers(response.data.users);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    setLoading(false);
                });
        }
    }, [isLoggedIn]);

    // const deleteQuiz = async (quizId) => {
    //     try {
    //       const response = await axios.delete(`http://localhost:5555/user/delete/${quizId}`);
    //       console.log(response.data.message);
    //       setUsers(users.filter(user => user._id !== user));
    //     } catch (error) {
    //       console.error('Error deleting quiz:', error);
    //     }
    // };

    // console.log(loggedInUsername);

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

        {isLoggedIn && isAdmin ? (
                <div className="dashboard">
                    <h1 className="heading"> All Users </h1>
                    <div className="icons-container">
                        <div className="icons">
                            <h3>Admin: {loggedInUsername}</h3>
                            <button className='logout-btn' onClick={handleLogout}>Logout</button>
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                <div className="userData-cards">
                                    {users.map((user, index) => (
                                        <div key={index} className="userData-card">
                                            <h3>User {index + 1}</h3>
                                            <p>Username: {user.username}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    Display login prompt or unauthorized access message
                </div>
            )}

            <div className="footer--sub">
                <p>COPYRIGHT @2023 / TESTWIZARD</p>
            </div>
    </div>
  )
}

export default Dashboard