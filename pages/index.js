import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import questions from '../data/questions';

export default function Home() {
    const [triviaQuestions] = useState(questions);
    const [question, setQuestion] = useState(
        "Welcome y'all. Let's see which question you get. You will have 30 secs at most to answer it. Good luck!"
    );

    /**
     *
     *  get random question
     */
    const getQuestion = () => {
        const randomIndex = Math.floor(Math.random() * triviaQuestions.length);

        const participantQuestion = triviaQuestions[randomIndex];

        setQuestion(participantQuestion);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>AKS – Trivia</title>
                <link rel='icon' href='/favicon.ico' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <div className={styles.subcontainer}>
                <div className={styles.subcontainer_left}>
                    <div className={styles.question}>
                        <p>{question}</p>
                    </div>
                </div>
                <div className={styles.subcontainer_right}>
                    <div className={styles.subcontainer_right_info}>
                        <h1>Welcome to</h1>
                        <h2 className={styles.typing}>
                            Aks trivia
                            <br />
                            night 2021!!
                        </h2>
                        <button onClick={getQuestion}>Get Question</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
