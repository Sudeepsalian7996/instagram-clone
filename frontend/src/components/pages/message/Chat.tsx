import TimeAgo from 'timeago-react';

interface chatProps {
    own : boolean;
    message: {
      text: string;
      createdAt: string;
      // other properties if needed
    };
}

const Chat: React.FC <chatProps> = ({ message, own  }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src=""
          alt=""
        />
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">
        <TimeAgo
          datetime={message.createdAt}
        />
      </div>
    </div>
  );
}
export default Chat;