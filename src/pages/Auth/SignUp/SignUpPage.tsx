import React, { FC } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../../core/contexts/AuthContext';

type Inputs = {
    email: string,
    password: string,
}

const SignUpPage: FC = () => {
    const { signup } = useAuth();
    const history = useHistory();

    // Submit Handler
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    function onSubmit(data: any) {
        signup(data.email, data.password);
        history.push("/");
    }
    

    return (
        <main className="main-form">
            <div className="form-wrapper">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="form-title">SignUp Form</h1>
                    <div className="form-group">
                        <label htmlFor="email" className="form-control__label">Enter your email</label>
                        <input {...register("email")} className="form-control" name="email" id="email" type="text" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-control__label">Enter your Password</label>
                        <input {...register("password")} className="form-control" name="password" id="password" type="password" />
                    </div>
                    <input type="submit" className="btn btn--submit" value="Sign Up" />
                </form>
                <p className="form-reminder">Already have an account? <Link to="/login">Log In</Link></p>
            </div> 
        </main>
    )
}

export default SignUpPage;