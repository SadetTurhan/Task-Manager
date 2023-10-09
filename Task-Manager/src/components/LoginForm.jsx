function LoginForm(){
    return(
        <>
            <form className="loginForm">
                <p className="formFirstText">Welcome to The Task Manager, <br/> to continue please login</p>
                <hr className="formLineAfterFirstText"/>
                <label className="formLabelText">Your Email</label><input className="formInput"/>
                <label className="formLabelText">Your Password</label><input className="formInput"/>
                <p className="formForgotPasswordText">Forgot your password?</p>
                <button className="formLoginButton">Login</button>
                <p className="formSignInText">Please Sign In if you don’t have an account</p>
            </form>
        </>
    )
}

export { LoginForm }