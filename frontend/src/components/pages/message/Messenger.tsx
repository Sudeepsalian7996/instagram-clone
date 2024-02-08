import Conversation from "./Conversation";
import Chat from "./Chat";
import "./messenger.css";

const Messenger: React.FC = () => {

  return (
    <>
      
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation />
            {/* {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))} */}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <Chat own = {true}/>
            <Chat own = {false}/>
            {/* {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    // <div ref={scrollRef}>
                    //   <Message message={m} own={m.sender === user._id} />
                    // </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )} */}
          </div>
          <input type="text" placeholder="enter the text" />
          <button>send</button>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            online
            {/* <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;