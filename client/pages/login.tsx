import React from 'react';
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import {useRouter} from "next/router";
import Header from "@/components/header/header";

const Login = () => {
    const router = useRouter();
    return (
        <section className="login">
            <Header pathname={router.pathname}/>

            <div className="container">

                <h1 className="login__title">
                    Episodic series of digital audio.
                </h1>

                <form className="login__form">
                    <div className="login__form-wrapper">
                        <Input id={'email_input'} icon={'email'} label={'E-mal address'}/>
                        <Input id={'password_input'} icon={'key'} label={'Password'}/>
                    </div>

                    <div className="login__form-wrapper">
                        <Button color={'blue'} text={'Login'}/>
                        <a href="#" className="login__form-link">Forgot password?</a>
                    </div>
                    <Button color={'dark_blue'} text={'Login with Facebook'}/>
                    <Button color={'dark_red'} text={'Register new account'}/>

                </form>

            </div>
        </section>
    );
};

export default Login;