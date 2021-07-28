import { Button } from '@material-ui/core'
import React from 'react'
import {auth,provider} from './firebase'
import './Login.css'
function Login() {
    const singIn= e =>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.nicepng.com/png/detail/19-191230_discord-blue-text-font-logo-discord-logo-svg.png" alt="logo"></img>
            </div>
            <Button onClick={singIn}>Sign In</Button>
        </div>
    )
}

export default Login
