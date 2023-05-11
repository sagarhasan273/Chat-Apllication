import myPhoto from '../img/myphoto.jpg';

export default function Chats() {
    return (
      <div className="chats">
        <div className="userChat">
          <img src={myPhoto} alt="" />
          <div className="userChatInfo">
            <span>Hasan</span>
            <p>Hello!</p>
          </div>
        </div>
        <div className="userChat">
          <img src={myPhoto} alt="" />
          <div className="userChatInfo">
            <span>Hasan</span>
            <p>Hello!</p>
          </div>
        </div>
        <div className="userChat">
          <img src={myPhoto} alt="" />
          <div className="userChatInfo">
            <span>Hasan</span>
            <p>Hello!</p>
          </div>
        </div>
      </div>
    );
}
