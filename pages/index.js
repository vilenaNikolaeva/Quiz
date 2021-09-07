import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Quiz from "./../components/Quiz.js";
import Welcome from "./../components/Welcome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        style={{ marginTop: 50 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ duration: 1.5 }}
      >
        <Welcome />
      </motion.div>
    </div>
  );
}
