import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Countdown from "react-countdown-clock";
import {
  QuizBody,
  QuizApp,
  ScoreSection,
  QuestionSection,
  QuestionCount,
  QuestionCountSpan,
  QuestionText,
  TimerText,
  AnswerSection,
  QuizButton,
  Correct,
  Incorrect,
  InputContainer,
  InputfieldContainer,
  Inputfield,
} from "./Quiz.elements";
import questions from "../../utils/QuizQ.json";

const Quiz = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const timeIsUp = () => {
    setShowScore(true);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setNameEntered(true);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    setEmailEntered(true);
  };

  return (
    <QuizBody>
      <QuizApp>
        {!nameEntered ? (
          <InputContainer>
            <h2>What is your name?</h2>
            <InputfieldContainer>
              <form onSubmit={handleNameSubmit}>
                <Inputfield
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "rgb(127, 132, 139)",
                    border: "none",
                    padding: "5px",
                    cursor: "default",
                    borderRadius: "8px",
                    marginLeft: "4px",
                  }}
                >
                  <FaArrowRight />
                </button>
              </form>
            </InputfieldContainer>
          </InputContainer>
        ) : !emailEntered && showScore ? (
          <InputContainer>
            <h2>Please enter your email:</h2>
            <InputfieldContainer>
              <form onSubmit={handleEmailSubmit}>
                <Inputfield
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "rgb(127, 132, 139)",
                    border: "none",
                    padding: "5px",
                    cursor: "default",
                    borderRadius: "8px",
                    marginLeft: "4px",
                  }}
                >
                  <FaArrowRight />
                </button>
              </form>
            </InputfieldContainer>
          </InputContainer>
        ) : showScore ? (
          <ScoreSection>
            You scored {score} out of {questions.length}
          </ScoreSection>
        ) : (
          <>
            <Countdown
              seconds={120}
              color="#000"
              alpha={0.9}
              size={50}
              onComplete={timeIsUp}
            />
            <QuestionSection>
              <QuestionCount>
                <QuestionCountSpan>
                  Question {currentQuestion + 1}
                </QuestionCountSpan>
                /{questions.length}
              </QuestionCount>
              <QuestionText>
                {questions[currentQuestion].questionText}
              </QuestionText>
            </QuestionSection>
            <AnswerSection>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <QuizButton
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </QuizButton>
              ))}
            </AnswerSection>
          </>
        )}
      </QuizApp>
    </QuizBody>
  );
};

export default Quiz;
