import Link from "next/link";
import styles from "./welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.welcomeTitle}>Welcome to our quiz</h1>
      <button className={styles.startQuizButton}>
      <Link href="/quiz"> START </Link>
      </button>
    </div>
  );
}
