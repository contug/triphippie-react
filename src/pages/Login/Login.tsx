import styles from './Login.module.scss';
import {useNavigate} from "react-router-dom";
import React from "react";
import {setLoadingStatus} from "../../store/loadingSlice.ts";
import {useAppDispatch} from "../../hooks/redux-hooks.ts";


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useAppDispatch();

    const handleLogin = async (event: React.MouseEvent) => {
        event.preventDefault();

        //TODO: axios.post -> login token
        //mocked login call
        dispatch(setLoadingStatus({callerId: "Login", status: true}))
        setTimeout(() => {
            dispatch(setLoadingStatus({callerId: "Login", status: false}))
            navigate("/dashboard/trips")
        }, 1000);

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
                        <input
                            className={styles.loginFormInput}
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className={styles.loginFormInput}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <a className={styles.loginLink}>Hai dimenticato la password?</a>

                        <button
                            className={styles.loginFormButton}
                            type="submit"
                            onClick={(event) => {
                                handleLogin(event)
                            }}
                            disabled={!email || !password}
                        >
                            Login
                        </button>
                    </form>
                    <a className={styles.loginLink}>Registrati</a>
                </div>
            </div>

        </>
    );
}
