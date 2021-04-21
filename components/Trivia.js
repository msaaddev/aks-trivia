import { useState } from 'react';
import questions from '../data/questions';
import styles from '../styles/Trivia.module.css';

const Trivia = () => {
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
                        night 2021!!{' '}
                    </h2>
                    <button onClick={getQuestion}>Get Question</button>
                </div>
            </div>
        </div>
    );
};

export default Trivia;
