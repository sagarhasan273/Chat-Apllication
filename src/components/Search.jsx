/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';

export default function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const citiesRef = collection(db, 'users');
    const q = query(citiesRef, where('displayName', '==', username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    if (e.code === 'Enter') handleSearch();
  };

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid
    ? currentUser.uid + user.uid : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }
    } catch (error) {
      setErr(true);
    }
    setUser(null);
    setUsername('');
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
      {err && <span>Something went wrong!</span>}
      {user && (
      <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>
    )}
    </div>
  );
}
