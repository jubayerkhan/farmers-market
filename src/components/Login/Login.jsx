import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        //reset error and success
        setRegisterError('');
        setSuccess('');

        //add validation
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                // setSuccess('User Logged in successfully')
                if (result.user.emailVerified) {
                    setSuccess('User Logged in successfully')
                }
                else {
                    alert('Please varify your email address')
                }
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                // setRegisterError(error.message)
            })
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log('please provide an email',emailRef.current.value);
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            console.log('Please enter a valid email!');
            return;
        }

        //send validation email
        sendPasswordResetEmail(auth, email)
        .then(() =>{
            alert('Please check your email')

        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-4 text-white">Please Login.</h2>
                <form onSubmit={handleLogin}>
                    <input
                        className="mb-4 w-full py-2 px-4"
                        type="email" name="email"
                        ref={emailRef}
                        placeholder="Email Address"
                        id="mail"
                        required />
                    <br />
                    <div className="relative mb-2 ">
                        <input
                            className="w-full py-2 px-4"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            id="pass"
                            required />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                        <label className="label">
                            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                    </div>
                    <br />
                    {/* <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Acceps our <a href="">terms and conditions</a></label>
                    </div> */}
                    <br />
                    <input className="mb-4 w-full btn btn-success" type="submit" value="Login" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-800">{success}</p>
                }
                <p className="text-white">New to this website? Please <Link className="underline" to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;