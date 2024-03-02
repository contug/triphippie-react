import styles from './Login.module.scss';

export function Login() {
    return (
        <>
            <div className={styles.login}>
                <div className={styles.loginContainer}>
                    <header className={styles.loginAppLogo}>
                        <img className={styles.loginAppLogoImage} src="/public/triphippie.png" alt="logo"/>
                        <h1>
                            <span>trip</span>
                            <span className={styles.loginAppLogoText}>hippie</span>
                        </h1>
                    </header>
                    <h4>Benvenuto</h4>
                    <form className={styles.loginForm}>
                        <input className={styles.loginFormInput} type="text" placeholder="Email"/>
                        <input className={styles.loginFormInput} type="password" placeholder="Password"/>
                        <a className={styles.loginLink}>Hai dimenticato la password?</a>

                        <button className={styles.loginFormButton} type="submit">Login</button>
                    </form>
                    <a className={styles.loginLink}>Registrati</a>
                </div>
            </div>

        </>
    );
}
