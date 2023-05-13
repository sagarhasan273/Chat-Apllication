/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
console.log(password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setErr(true);
    }
  };
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Sagar Chat</span>
          <span className="title">Login</span>
          <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="submit">Sign In</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    );
}
export default Login;
