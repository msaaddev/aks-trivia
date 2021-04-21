import { useState, useEffect } from 'react';
import questions from '../data/questions';
import Switch from '@material-ui/core/Switch';
import styles from '../styles/Trivia.module.css';
import { Howl, Howler } from 'howler';
import music from '../assets/sound/music.mp3';

const Trivia = () => {
    const [triviaQuestions] = useState(questions);
    const [question, setQuestion] = useState(
        "Welcome y'all. Let's see which question you get. You will have 30 secs at most to answer it. Good luck!"
    );
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        backgroundMusic(false);
    }, []);

    /**
     *
     *  get random question
     */
    const getQuestion = () => {
        const randomIndex = Math.floor(Math.random() * triviaQuestions.length);

        const participantQuestion = triviaQuestions[randomIndex];

        setQuestion(participantQuestion);
    };

    /**
     *
     * @param {stopped} – stops the background sound
     * background music of the app
     */
    const backgroundMusic = stopped => {
        const bgMusic = new Howl({
            src: music,
            autoplay: true,
            loop: true,
            html5: true,
            volume: 0.03,
        });

        if (stopped) {
            Howler.stop();
        } else {
            bgMusic.play();
        }
    };

    /**
     *
     * toggle music
     */
    const toggleMusic = () => {
        if (checked === true) {
            setChecked(false);
            backgroundMusic(true);
        } else {
            setChecked(true);
            backgroundMusic(false);
        }
    };

    return (
        <div className={styles.subcontainer}>
            <div className={styles.subcontainer_left}>
                <div className={styles.question}>
                    <p>{question}</p>
                </div>
            </div>
            <div className={styles.subcontainer_right}>
                <div className={styles.music}>
                    <label>Music</label>
                    <div className={styles.switch}>
                        <Switch
                            checked={checked}
                            size='small'
                            color={'primary'}
                            onChange={toggleMusic}
                        />
                    </div>
                </div>
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
