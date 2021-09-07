import styles from "./quiz.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Question from "./Question";
import Router from "next/router";

export function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(1);

  const countCorrectAnswers = () => {
    setCount(count + 1);
  };

  const changeCurrentQuestion = () => {
    let newIndex = currentQuestion + 1;
    if (newIndex < questions.length) {
      setCurrentQuestion(newIndex);
    } else {
      Router.push({
        pathname: "/end",
        query: { correctAnswers: count > 1 ? count : 0 },
      });
    }
  };

  return (
    <div className={styles.container} id="container">
      <div className={styles.quiz} id="quiz">
        <motion.div
          key={currentQuestion}
          style={{ marginTop: 50 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 1.5 }}
        >
          <Question
            changeQuestion={changeCurrentQuestion}
            question={questions[currentQuestion]}
            correctAnswersCount={countCorrectAnswers}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Quiz;
