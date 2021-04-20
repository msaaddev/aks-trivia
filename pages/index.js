import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
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
                <div className={styles.subcontainer_left}></div>
                <div className={styles.subcontainer_right}>
                    <div className={styles.subcontainer_right_info}>
                        <h1>Welcome to</h1>
                        <h2 className={styles.typing}>
                            Aks trivia
                            <br />
                            night 2021!!
                        </h2>
                        {/* <h2 className={styles.typing}>night 2021!!</h2> */}
                        <button>Get Your Question</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
