import React, { FC } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../../core/contexts/AuthContext';



type Inputs = {
    email: string,
    password: string,
}

const LoginPage: FC = () => {
    const { login } = useAuth();
    const history = useHistory();

    // Submit Handler
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    async function onSubmit(data: any) {
        try {
            await login(data.email, data.password);
            history.push("/");
        } catch(e) {
            console.log;
        }
        
        
    }
    

    return (
        <main className="main-form">
            <div className="form-wrapper">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="form-title">Login Form</h1>
                    <div className="form-group">
                        <label htmlFor="email">Enter your email</label>
                        <input {...register("email")} className="form-control" name="email" id="email" type="text" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter your Password</label>
                        <input {...register("password")} className="form-control" name="password" id="password" type="password" />
                    </div>
                    <input type="submit" className="btn btn--submit" value="Log in" />    
                </form>
                <p className="form-reminder">Need an account? <Link to="/signup">Sign Up</Link></p>
            </div> 
        </main>
    )
}

export default LoginPage;