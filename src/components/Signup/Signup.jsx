import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
// import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Signup = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        console.log(name, email, password, accepted);

        //reset error and success
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 cheracter or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case cheracter.');
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our terms and conditions');
            return;
        }


        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.')

                //update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg",
                })
                    .then(() => console.log('Profile updated'))
                    .catch()

                //send email varification
                sendEmailVerification(result.user)
                    .then(() => {
                        alert('please check your email and verify your account')
                    })
                    .catch()
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })

    }

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-4">Please Register.</h2>
                <form onSubmit={handleSignup}>
                    <input className="mb-4 w-full py-2 px-4" type="text" name="name" placeholder="Your Name" id="name" required />
                    <br />
                    <input className="mb-4 w-full py-2 px-4" type="email" name="email" placeholder="Email Address" id="mail" required />
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
                    </div>
                    <br />
                    <div>
                        <select className="select select-success w-full">
                            <option disabled selected>Select One</option>
                            <option>Farmer</option>
                            <option>Buyer</option>
                        </select>
                    </div>
                    <br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Acceps our <a href="">terms and conditions</a></label>
                    </div>
                    <br />
                    <input className="mb-4 w-full btn btn-success" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-500">{success}</p>
                }
                <p>Already have an account? Please <Link className="underline" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;