import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
    return (
      <div className="navbar">
        <span className="logo">Sagar Chat
        </span>
        <div className="user">
          <img src={currentUser.photoURL} alt="" />
          <span>{currentUser.displayName}</span>
          <button type="button" onClick={() => signOut(auth)}>Logout</button>
        </div>
      </div>
    );
}
