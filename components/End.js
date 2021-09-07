import { withRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "./end.module.css";
import Link from "next/link";
import boomImage from "./../images/Boom_PNG_Background.png";
import Image from "next/image";

function End() {
  const displayCountAnswers = () => {
    if (typeof window !== "undefined") {
      var correctAnswers = window.location.toString().split("=")[1];

      if (correctAnswers < 3) {
        return (
          <p>
            You got {correctAnswers} correct answers from 5.
            <br />
            So far you need some more knowledge in JS to get all the points
          </p>
        );
      } else if (correctAnswers >= 3 && correctAnswers <= 4) {
        return (
          <span>
            You got {correctAnswers} correct from 5.
            <br /> You are almoste there.Keep digging for some knowlige into
            Java Script.
          </span>
        );
      } else if (correctAnswers == 5) {
        return (
          <span>
            You got {correctAnswers} correct from 5.
            <br/> Awsome! You got the right
            feeling.Don't stop lerning new things in JS !
          </span>
        );
      }
    }
  };
  return (
    <div className={styles.endContainer}>
      <motion.div
        animate={{ scale: [0, 0.5, 0.4] }}
        transition={{ duration: 0.8 }}
      >
        <Image src={boomImage} alt="boom" />
      </motion.div>
      <motion.div
        className={styles.pointsResultContainer}
        initial={{ marginTop: 40 }}
        animate={{ opacity: 1, y: -110 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0 }}
      >
        <div className={styles.pointsResultContainer}>{displayCountAnswers()}</div>
        <button className={styles.linkToHomeButton}>
          <Link href="/">Try Again</Link>
        </button>
      </motion.div>
     
    </div>
  );
}
export default withRouter(End);
