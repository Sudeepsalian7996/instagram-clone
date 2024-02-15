import axios from "axios";
import { useEffect, useState } from "react";

interface conversation {
  conversation:any;
  currentUser: string;
}

interface user {
    fullName: string;
}

const Conversation: React.FC<conversation> = ({ conversation, currentUser }) => {
  const [user, setUser] = useState<user>();
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation?.members?.find((m: any) => m !== currentUser);
    const getUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_HOSTNAME}/users/${friendId}`)
        
        setUser(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src=''
        alt=""
      />
      <span className="conversationName">{user?.fullName}</span>
    </div>
  );
}

export default Conversation;