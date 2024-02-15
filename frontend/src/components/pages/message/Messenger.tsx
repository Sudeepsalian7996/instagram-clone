import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { io, Socket } from "socket.io-client";
import Conversation from "./Conversation";
import Chat from "./Chat";
import "./messenger.css";

interface currentchat {
  _id : string
}

interface message {
  _id : string;
  sender : string;
  text: string;
  createdAt: string;
}

const Messenger: React.FC = () => {
  const [conversation, setConversation] = useState([])
  const [currentChat, setCurrentChat] = useState<currentchat>()
  const [messages, setMessages] = useState<message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [socket, setSocket] = useState<Socket | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)

  //dummy userId use tokens later
  const userId = localStorage.getItem('userId') || ''

  useEffect(() => {
     setSocket(io(import.meta.env.VITE_WEBSOCKET_URL))
     socket?.on('dummy', (data) => console.log(data))
  }, []);
 
  useEffect(() => {
    const getConversation = async() => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_HOSTNAME}/messages/conversation/${userId}`)
        setConversation(res?.data)
      } catch (error) {
        
      }
    }
    getConversation()
  },[])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_HOSTNAME}/messages/${currentChat?._id}`)
        setMessages(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    const message = {
      sender: userId,
      text: newMessage,
      conversationId: currentChat?._id,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_HOSTNAME}/messages/chat`,message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversation.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={userId} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages?.map((m) => (
                    <div ref={scrollRef}>
                      <Chat message={m} own={m?.sender === userId} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
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