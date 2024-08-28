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
      message: "Hi there! Welcome to Social Navigator.",
      sender: "Chatbot",
    },
    {
      message: "Do you need help navigating a tricky situation?",
      sender: "Chatbot",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track which question is being asked
  const questions = [
    "Do you need help navigating a tricky situation?",
    "Where did this situation take place?",
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
      <div style={{ position: "relative", height: "500px", width: "700px" }}>
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
