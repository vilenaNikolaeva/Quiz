import styles from "./quiz.module.css";
import { Code } from "react-code-blocks";
import React , { useState } from 'react';

export default function Answer({codeSnippet,answers,correct,changeQuestion,correctAnswersCount,}) {
  const [answer,setAnswer]= useState("");

  const changeCurrentQuestion = (answer) => {
    if (answer.letter === correct) {
      correctAnswersCount();
    }
    changeQuestion();
  };

  const checkTheAnswer =()=>{
      if (answer.toString()==correct) {
        correctAnswersCount();
      }
      changeQuestion();
  }

  const codingAnswer = () => {
    return (
      <div className={styles.questionContainer}>
        <textarea
          type="text"
          rows="3"
          name="answer"
          className={styles.answerInput}
          placeholder={"Place your answer..."}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className={styles.answerInputButton} onClick={checkTheAnswer}>Submit</button>
      </div>
    );
  };
 

  const nonCoding = () => {
    if(codeSnippet=== "true") {
      return answers.map((answer, i) => {
        return (
          <div key={i} className={styles.questionContainer}>
            <p className={styles.index}>{answer.letter}</p>
            <label className={styles.answer}>
              <input
                type="radio"
                name="answer"
                checked={false}
                hidden={true}
                className={styles.answer}
                onChange={() => {
                  changeCurrentQuestion(answer);
                }}
              />
              <Code text={answer.value} language={"javascript"} />
            </label>
          </div>
        );
      });
    }
    return (answers.map((answer, i) => {
      return (
        <div key={i} className={styles.questionContainer}>
          <p className={styles.index}>{answer.letter}</p>
          <label className={styles.answer}>
            <input
              type="radio"
              name="answer"
              checked={false}
              hidden={true}
              className={styles.answer}
              onChange={() => {
                changeCurrentQuestion(answer);
              }}
            />
            {answer.value}
          </label>
        </div>
      );
    })
    )
  };
  return (
    <div className={styles.grid}>{answers ? nonCoding() : codingAnswer()}</div>
  );
}
