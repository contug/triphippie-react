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
                            <span className={styles.fontThemeColor}>hippie</span>
                        </h1>
                    </header>
                    <h3>Benvenuto</h3>
                    <form className={styles.loginForm}>
                        <input className={styles.loginFormInput} type="text" placeholder="Email"/>
                        <input className={styles.loginFormInput} type="password" placeholder="Password"/>
                        <span>Hai dimenticato la password?</span>

                        <button className={styles.loginFormButton} type="submit">Login</button>
                    </form>
                    <h4>Registrati</h4>
                </div>
            </div>

        </>
    );
}
