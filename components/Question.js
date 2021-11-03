import Answer from "./Answer";
import styles from "./quiz.module.css";
import { Code } from "react-code-blocks";
import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default function Question({
  question,
  changeQuestion,
  correctAnswersCount,
}) {

  const [completed, setCompleted] = useState(0);
 const [seconds, setSeconds] = useState(0);
  const [intervalId,setIntervalId] = useState(0);

  useEffect(() => {
    let time = 20;
    let counter = 0;

    let progressBarInterval = setInterval(() => {
      counter++;
      setSeconds(counter);
      if(counter <= time){
        setCompleted(counter/ time * 100);
      }
      else{
        changeQuestion();
      }
    }, 1000);

    return () => clearInterval(progressBarInterval);
 }, [question]);

  const checkForCodeSnippet = () => {
    if (question.codeSnippet === "true") {
      return <Code text={question.code} language={"javascript"} />;
    }
  };

  return (
    <div>
      <ProgressBar bgcolor={"red"} completed={completed} seconds={seconds}  />
      <div className={styles.quizContainer} id="quizContainer">
      <div className={styles.question}>
        <h2>{question.title}</h2>
        {checkForCodeSnippet()}
        <Answer
          codeSnippet={question.codeSnippet}
          answers={question.answers}
          correct={question.correct}
          changeQuestion={changeQuestion}
          correctAnswersCount={correctAnswersCount}
        />
      </div>
      </div>
    </div>
  );
}
