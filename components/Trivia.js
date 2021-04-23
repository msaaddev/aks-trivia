import { useState } from "react";
import { useTimer } from "use-timer";
import { GitHub } from "@material-ui/icons";
import Link from "next/link";
import Switch from "@material-ui/core/Switch";
import { Howl, Howler } from "howler";
import questions from "../data/questions";
import music from "../assets/sounds/music.mp3";
import beep from "../assets/sounds/beep.mp3";
import styles from "../styles/Trivia.module.css";

const Trivia = () => {
	// states
	const [triviaQuestions] = useState(questions);
	const [question, setQuestion] = useState(
		"Welcome y'all. Let's see which question you get. You will have 30 secs at most to answer it. Good luck!"
	);
	const [checked, setChecked] = useState(false);

	/**
	 *
	 *
	 * @param {src} – audio file
	 * @param {loop} – whether to loop through the audio file
	 * @param {volume} – volume of the audio file
	 * @param {stopped} – stops the background sound
	 * background music of the app
	 */
	const backgroundMusic = (src, loop, volume, stopped) => {
		const bgMusic = new Howl({
			src,
			loop,
			volume,
			autoplay: true,
			html5: true,
		});

		if (stopped) {
			Howler.stop();
		} else {
			bgMusic.play();
		}

		console.log("function fire");
	};

	/**
	 *
	 * toggle music
	 */
	const toggleMusic = () => {
		if (checked === true) {
			setChecked(false);
			backgroundMusic(music, true, 0.1, true);
		} else {
			setChecked(true);
			backgroundMusic(music, true, 0.1, false);
		}
	};

	/**
	 *
	 * sound to play when time over
	 */
	const timeOverSound = () => {
		backgroundMusic(beep, false, 1, false);
	};

	// react custom hook to implement timer
	const { time, start } = useTimer({
		initialTime: 25,
		endTime: 0,
		timerType: "DECREMENTAL",
		onTimeOver: timeOverSound,
	});

	/**
	 *
	 *  get random question
	 */
	const getQuestion = () => {
		const randomIndex = Math.floor(Math.random() * triviaQuestions.length);

		const participantQuestion = triviaQuestions[randomIndex];

		setQuestion(participantQuestion);

		start();
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
							size="small"
							color={"primary"}
							onChange={toggleMusic}
						/>
					</div>
				</div>
				<div className={styles.subcontainer_right_info}>
					<h1>Welcome to</h1>
					<h2 className={styles.typing}>
						Aks trivia
						<br />
						night 2021!!{" "}
					</h2>
					<button onClick={getQuestion}>Get Question</button>
				</div>
				<div className={styles.icons}>
					<div className={styles.timer}>
						<p>
							<span>Timer:</span> {time} s
						</p>
					</div>
					<Link href="https://github.com/msaaddev">
						<a>
							<GitHub />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Trivia;
