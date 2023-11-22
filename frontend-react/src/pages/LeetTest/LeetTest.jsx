import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/userContext';

import './LeetTest.scss';

export default function LeetTest(props) {
    const { isLoggedIn, loggedInUsername } = useContext(UserContext);

    const [questions, setQuestions] = useState([
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "London"],
            correctAnswer: "Paris",
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "London"],
            correctAnswer: "Paris",
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "London"],
            correctAnswer: "Paris",
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "London"],
            correctAnswer: "Paris",
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "London"],
            correctAnswer: "Paris",
        },
        // Add more questions here
    ]);

    // For checking if the quiz ends and to start timer
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [timerStarted, setTimerStarted] = useState(false); // starts the timer

    // For tracking questions and scores
    const [currentQuestion, setCurrentQuestion] = useState(0); // track current questions
    const [selectedOption, setSelectedOption] = useState(null); // tracks the selected options
    const [score, setScore] = useState(0);  // tracks the score of the user
    const [quizCompleted, setQuizCompleted] = useState(false); // checks if quiz finished or not

    // For tracking the box visibility
    const [startBtnVisible, setStartBtnVisible] = useState(true); // start button visibility
    const [infoBoxVisible, setInfoBoxVisible] = useState(false);  // infor box visibility tracker
    const [quizBoxVisible, setQuizBoxVisible] = useState(false);  // quiz box visibility tracker

    // For tracking timer
    useEffect(() => {
        let timer;
    
        if (timerStarted) {
          timer = setInterval(() => {
            if (timeLeft > 0) {
              setTimeLeft(timeLeft - 1);
            } else {
              clearInterval(timer);
              setQuizCompleted(true);
            }
          }, 1000);
        }
    
        return () => clearInterval(timer);
    }, [timeLeft, timerStarted]);

    const sendQuizResultsToDatabase = () => {
        const userData = {
            username: loggedInUsername,
            subject: `Year ${leetYear} Test Papers`,
            marks: score+1
        };
    
        // API call to send data to the backend
        axios.post('http://localhost:5555/quiz/add', userData)
            .then(response => {
                console.log('Data sent to the database:', response.data);
            })
            .catch(error => {
                console.error('Error storing data in the database:', error);
            });
    };

    // handle the click of Start Button
    const handleStartBtnClick = () => {
        setStartBtnVisible(false);
        setInfoBoxVisible(true);
    };
    
    // handle the click of Continue Button
    const handleContinueBtnclick = () => {
        setQuizBoxVisible(true);
        setInfoBoxVisible(false);
        setTimerStarted(true); // Start the timer
    }

    const handleExitBtnclick = () => {
        setInfoBoxVisible(false);
        setStartBtnVisible(true);
    }

    // handle the click of Options
    const handleOptionClick = (option) => {
        if (!quizCompleted) {
            // Handle user's option selection
            setSelectedOption(option);
        }
    };

    // handles the click of Next Button
    const handleNextBtnClick = () => {
        // Check if selected option is correct and update score
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }

        // Check if the questions remain then show next else end the quiz
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setQuizCompleted(true);
            setQuizBoxVisible(false);
            {isLoggedIn && sendQuizResultsToDatabase();}
        }
    };

    const isNextButtonVisible = selectedOption !== null;

    const { leetYear } = useParams();

    return (
        <div className="leettest--main">

            <div className="navbar--test">
                <nav className="container--test">
                    <a href="/" className="logo"> <i className="fas fa-lightbulb"></i> TestWizard </a>
                </nav>
            </div>

            <div className="box--subdes--main">
                <div className="box--subdes">
                    <h2>Leet Year: { leetYear } </h2>
                </div>
            </div>

            <div className='quiz--div'>
                {startBtnVisible && 
                    <div className="start_btn">
                        <button onClick={handleStartBtnClick}>Start Exam</button>
                    </div>
                }

                {infoBoxVisible && 
                    <div className="info_box">
                        <div className="info_title">
                            <span>Some Rules of this Exam</span>
                        </div>
                        <div className="info_list">
                            <div className="info">1. You will have only <span>50 Seconds</span> per each Questions.</div>
                            <div className="info">2. Once you select your answer, you can't reselect it.</div>
                            <div className="info">3. You can't select any option once time goes off.</div>
                            <div className="info">4. You can't exit while you're giving the Exam.</div>
                            <div className="info">5. You'll get points on the basis of your correct answer.</div>
                            <div className="info">6. No negative marking available.</div>
                        </div>
                        <div className="buttons">
                            <button className="quit" onClick={handleExitBtnclick}>Exit Exam</button>
                            <button className="restart" onClick={handleContinueBtnclick}>Continue</button>
                        </div>
                    </div>
                }

                {quizBoxVisible && 
                    <div className="leetquiz_box">
                        {timerStarted && 
                            <div className='leettest--header'>
                                <div className="leettest--title">Online Examination</div>
                                <div className="timer">
                                    <div className="time_text">Time Left</div>
                                    <div className="timer_sec">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
                                </div>
                            </div>
                         }

                        <section id='questionDiv'>
                            <div className="que_text">
                                {questions[currentQuestion].question}
                            </div>
                            <div className="option_list">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`option ${selectedOption === option ? 'selected' : ''}`}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <footer id='quizBox-Footer'>
                            <div className="total_que">
                                {currentQuestion + 1} / {questions.length}
                            </div>
                            {isNextButtonVisible && (
                                <button className="next_btn" onClick={handleNextBtnClick}>
                                    Next Que
                                </button>
                            )}
                        </footer>
                    </div>
                }


                {quizCompleted && 
                    <div className="leetresult_box">
                        <div className="crwnicon">
                            <i className="fas fa-crown"></i>
                        </div>
                        <div className="end_message">You've completed the Exams !</div>

                        <div className="totalscore">
                            {score} / {questions.length}
                        </div>

                        <div className="buttonRestart">
                            <button className="rBtn" onClick={handleExitBtnclick}>
                                <Link to="/">Retake Exams</Link>
                            </button>
                            <button className="qBtn">
                                <Link to="/">Quit Exams</Link>
                            </button>
                        </div>
                    </div>
                }
            </div>

            <div className="footer--test">
                <p>COPYRIGHT @2023 / TESTWIZARD</p>
            </div>

        </div>
  )
}