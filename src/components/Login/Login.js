import React, { useContext, useState } from "react";
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {

    //login hook's
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isLogIn, setIsLogin] = useState(true);
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
             setError(error.message);
        });
    }

    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            setError(error.message);
        });
    }

    const handleSubmit = (e) => {
        if (!isLogIn && newUser.email && newUser.password && newUser.confirmPassword) {
            if (password === confirmPassword) {
                firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                    .then(res => {
                        userNameUpdate(newUser.firstName);
                        newUser.displayName = newUser.firstName;
                        setLoggedInUser(newUser);
                        history.replace(from);
                    })
                    .catch(function (error) {
                        setError(error.message);
                    });
            }
            else {
                setError('Password & Confirm Password does not match');
            }
        }
        else if (isLogIn && newUser.email && newUser.password) {
            firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
                .then(res => {
                    setLoggedInUser(res.user);
                    history.replace(from);
                })
                .catch(function (error) {
                    setError(error.message);
                });
        }
        e.preventDefault();
    }

    const userNameUpdate = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
        }).catch(function (error) {
            setError(error.message);
        });
    }

    const handleBlur = (e) => {
        let isValidForm = true;
        if (e.target.name === 'email') {
            isValidForm = /\S+@\S+\.\S+/.test(e.target.value);
            if (isValidForm) {
                setError('');
            } else {
                setError('Please provide a valid email address');
            }
        }
        if (e.target.name === 'password') {
            const hasGreaterThanFive = e.target.value.length > 5;
            const hasOneDigit = /\d{1}/.test(e.target.value);
            isValidForm = hasGreaterThanFive && hasOneDigit;
            setPassword(e.target.value);
            if (isValidForm) {
                setError('');
            } else {
                setError('Password have at least one digit with minimum five (5) length long.');
            }
        }
        if (e.target.name === 'confirmPassword') {
            setConfirmPassword(e.target.value);
            if (password === confirmPassword) {
                isValidForm = true;
                setError('');
            } else {
                isValidForm = false;
                setError('Password & Confirm Password does not match');
            }
        }

        if (isValidForm) {
            const user = { ...newUser };
            user[e.target.name] = e.target.value;
            setNewUser(user);
        }
    }

    return (

        <div>
            <div className="container">
                <div className="login-form">
                    <div className="m-2">
                        {error && <p className="alert alert-danger m-3">{error}</p>}
                        {
                            isLogIn ? <form className="mt-3 " onSubmit={handleSubmit} >
                                <h4 className="ml-3" >Login</h4>
                                <input name="email" onBlur={handleBlur} className="form-control m-3" required type="email" placeholder="Email" />
                                <input name="password" onBlur={handleBlur} className="form-control m-3" required type="password" placeholder="Password" />
                                <button type="submit" className="btn btn-warning form-control m-3 btn-width" >Login</button>
                            </form>
                                : <form className="mt-3 " onSubmit={handleSubmit} >
                                    <h4 className="ml-3 " > Create an account</h4>
                                    <input name="firstName" onBlur={handleBlur} className="form-control m-3" required type="firstName" placeholder="First name" />
                                    <input name="lastName" onBlur={handleBlur} className="form-control m-3" required type="lastName" placeholder="Last name" />
                                    <input name="email" onBlur={handleBlur} className="form-control m-3" required type="email" placeholder="email" />
                                    <input name="password" onBlur={handleBlur} className="form-control m-3" required type="password" placeholder="Password" />
                                    <input name="confirmPassword" onBlur={handleBlur} onChange={handleBlur} className="form-control m-3" required type="Password" placeholder="confirm password" />
                                    <button type="submit" className="btn btn-warning form-control ml-3 btn-width" >Create an account</button>
                                </form>
                        }
                        {
                            isLogIn ? <p className="text-center mt-2">Don't have an account? <strong className="login-tag text-warning" onClick={() => setIsLogin(false)}>Create an account</strong> </p>
                                : <p className="text-center mt-2" >Already have an account? <strong className="login-tag text-warning" onClick={() => setIsLogin(true)}>Login</strong> </p>
                        }
                    </div>
                </div>
                <div className="login-form-social">
                    <div className="d-flex flex-row mt-3" >
                        <hr className="w-50 mr-1" />Or<hr className="w-50 ml-1" />
                    </div>
                    <div className="form-control social-btn ml-3 m-2" onClick={handleGoogleSignIn}>
                        <div className="d-flex">
                            <div className="text-left mr-5">
                                <img src="https://i.ibb.co/QcGGmpK/google.png" alt="facebook" className="img img-fluid social-img text-left" />
                            </div>
                            <div className="ml-5"> Continue with Google</div>
                        </div>
                    </div>
                    <div className="form-control social-btn ml-3 m-2" onClick={handleFacebookSignIn}>
                        <div className="d-flex">
                            <div className="text-left mr-5">
                                <img src="https://i.ibb.co/KDcynyB/fb.png" alt="facebook" className="img img-fluid social-img text-left" />
                            </div>
                            <div className="ml-5">Continue with Facebook</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;