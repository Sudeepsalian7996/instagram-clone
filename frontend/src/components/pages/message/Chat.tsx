
// import { format } from "timeago.js";

interface chatProps {
    own : boolean;
}

const Chat: React.FC <chatProps> = ({ own  }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src=""
          alt=""
        />
        <p className="messageText">THis is the dummy message</p>
      </div>
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    </div>
  );
}
export default Chat;