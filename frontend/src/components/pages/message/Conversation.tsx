import axios from "axios";
import { useEffect, useState } from "react";


const Conversation: React.FC = ({ }) => {
//   const [user, setUser] = useState(null);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   useEffect(() => {
//     const friendId = conversation.members.find((m) => m !== currentUser._id);

//     const getUser = async () => {
//       try {
//         const res = await axios("/users?userId=" + friendId);
//         setUser(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getUser();
//   }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src=''
        alt=""
      />
      <span className="conversationName">sdp</span>
    </div>
  );
}

export default Conversation;