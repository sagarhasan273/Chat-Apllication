/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */

function Login() {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Sagar Chat</span>
          <span className="title">Login</span>
          <form action="">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="button">Sign In</button>
          </form>
          <p>You don't have an account? Register</p>
        </div>
      </div>
    );
}
export default Login;
