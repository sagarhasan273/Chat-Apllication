import myPhoto from '../img/myphoto.jpg';

export default function Search() {
    return (
      <div className="search">
        <div className="searchForm">
          <input type="text" placeholder="Find a user" />
        </div>
        <div className="userChat">
          <img src={myPhoto} alt="" />
          <div className="userChatInfo">
            <span>Hasan</span>
          </div>
        </div>
      </div>
    );
}
