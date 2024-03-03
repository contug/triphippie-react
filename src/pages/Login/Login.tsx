import styles from './Login.module.scss';
import {useNavigate} from "react-router-dom";
import React from "react";
import baseUrl from "../../env.params.ts";
import axios from "axios";


export function Login() {

    const navigate = useNavigate();

    const handleLogin = async (event: React.MouseEvent) => {
        event.preventDefault();

        axios.post(`${baseUrl}/login`, JSON.stringify({
            email: "test",
            password: "test"

        })).then(response => {
            console.log(response);
            navigate('/dashboard');
        }).catch(e => console.log(e))

    }

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

                        <button className={styles.loginFormButton} type="submit" onClick={(event) => {
                            handleLogin(event)
                        }}>Login
                        </button>
                    </form>
                    <a className={styles.loginLink}>Registrati</a>
                </div>
            </div>

        </>
    );
}
