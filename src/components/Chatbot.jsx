import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "apikeys";

const systemMessage = {
  role: "system",
  content: "Hello",
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message:
        "Ready to share your story? Feel free to describe any situation that's on your mind.",
      sender: "Chatbot",
    },
    {
      message:
        "if you need help framing your situation, just click 'Need Guidance' or you can start tying whenever you're ready",
      sender: "Chatbot",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    "Do you need help navigating a tricky situation?",
    "Where did this situation take place?",
    "do you need any help",
    // Add more questions
  ];
  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Determine next steps based on the question index
    if (currentQuestionIndex < questions.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        const nextQuestion = questions[currentQuestionIndex + 1];
        setMessages([
          ...newMessages,
          { message: nextQuestion, sender: "Chatbot" },
        ]);
        setIsTyping(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000);
    } else {
      setIsTyping(true);
      await sendMessageToBackend(newMessages);
    }
  };

  async function sendMessageToBackend(chatMessages) {
    // Sending data to backend
    const response = await fetch("http://your-backend-url/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: chatMessages }),
    });

    const data = await response.json();
    setMessages([
      ...chatMessages,
      {
        message: data.reply,
        sender: "Chatbot",
      },
    ]);
    setIsTyping(false);
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "450px", width: "700px" }}>
        <h2 className="text-black font-bold p-1 ">
          Hi there! Welcome to Social Navigator
        </h2>
        <p className="text-black p-1 ">
          Need help navigating a tricky situation? Share your story with us.{" "}
          <br></br>
          We're here to listen, understand and off insights.
        </p>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="Navigator is typing..." />
                ) : null
              }
            >
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput
              placeholder="Type your response here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default Chatbot;
