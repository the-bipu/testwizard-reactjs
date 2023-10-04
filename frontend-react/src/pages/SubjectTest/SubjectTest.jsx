import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SubjectText.scss';

function SubjectTest(props) {

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


    const [currentQuestion, setCurrentQuestion] = useState(0); // track current questions
    const [selectedOption, setSelectedOption] = useState(null); // tracks the selected options
    const [score, setScore] = useState(0);  // tracks the score of the user
    const [quizCompleted, setQuizCompleted] = useState(false); // checks if quiz finished or not

    const [startBtnVisible, setStartBtnVisible] = useState(true);
    const [infoBoxVisible, setInfoBoxVisible] = useState(false);
    const [quizBoxVisible, setQuizBoxVisible] = useState(false);

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
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setQuizCompleted(true);
            setQuizBoxVisible(false);
        }
    };
    
    const { subjectName, subCode } = useParams();
    const isNextButtonVisible = selectedOption !== null; // Check if an option is selected

    return (
        <div className="app--subtest">

            <header className="header">
                <nav className="navbar">
                    <a href="../" className="logo"> <i className="fas fa-lightbulb"></i> TestWizard </a>
                </nav>
            </header>

            <div className="box--subdes">
                <h2>Subject: { subjectName }</h2>
                <h2>Set Code: { subCode }</h2>
            </div>

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
                        <button className="quit">Exit Exam</button>
                        <button className="restart" onClick={handleContinueBtnclick}>Continue</button>
                    </div>
                </div>
            }

            {quizBoxVisible && 
                <div className="quiz_box">
                    {timerStarted && 
                        <header>
                            <div className="title--quizBox">Online Examination</div>
                            <div className="timer">
                                <div className="time_text">Time Left</div>
                                <div className="timer_sec">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
                            </div>
                        </header>
                    }

                    <section>
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

                    <footer>
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
                <div className="result_box">
                    <div className="icon">
                        <i className="fas fa-crown"></i>
                    </div>
                    <div className="complete_text">You've completed the Exams !</div>

                    <div className="score_text">
                        {score} / {questions.length}
                    </div>
                    <div className="buttons">
                        <button className="restart">Retake Exams</button>
                        <button className="quit">Quit Exams</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default SubjectTest;
