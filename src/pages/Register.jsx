/* eslint-disable jsx-a11y/label-has-associated-control */
import addAvater from '../img/addAvatar.png';

function Register() {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Sagar Chat</span>
          <span className="title">Register</span>
          <form action="">
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input style={{ display: 'none' }} type="file" id="file" />
            <label htmlFor="file">
              <img src={addAvater} alt="" />
              <span>Add an avater</span>
            </label>
            <button type="button">Sign Up</button>
          </form>
          <p>You do have an account? Login</p>
        </div>
      </div>
    );
}
export default Register;
