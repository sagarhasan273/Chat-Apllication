import myPhoto from '../img/myphoto.jpg';

export default function Navbar() {
    return (
      <div className="navbar">
        <span className="logo">Sagar Chat
        </span>
        <div className="user">
          <img src={myPhoto} alt="" />
          <span>Hasan</span>
          <button type="button">Logout</button>
        </div>
      </div>
    );
}
