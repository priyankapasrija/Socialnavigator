import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { fetchSimulatedReview } from '../api/api.js';
import chatFlow from '../data/chatFlowData'; 

function Chatbot() {
  const [messages, setMessages] = useState([
    { message: 'Hi there! Welcome to Social Navigator.', sender: 'Chatbot' },
    { message: 'Need help navigating a tricky situation? Share your story with us. We’re here to listen, understand, and offer insights.', sender: 'Chatbot' },
    { message: 'Ready to share your story? Feel free to describe any situation that’s on your mind. If you need help framing your situation, just click ‘Need Guidance’, or you can start typing whenever you’re ready.', sender: 'Chatbot' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user'
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    setTimeout(async () => {
      if (message === 'Submit your story') {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: 'We’re Reviewing Your Story. Thanks for sharing! We’re taking a moment to review your input and generate useful insights.', sender: 'Chatbot' },
        ]);
        try {
          const review = await fetchSimulatedReview();
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: 'The review is complete', sender: 'Chatbot' },
            { message: review.summary, sender: 'Chatbot' },
            { message: review.feelings, sender: 'Chatbot' },
            { message: review.miscommunications[0].title, sender: 'Chatbot' },
            ...review.miscommunications[0].points.map((point) => ({ message: point, sender: 'Chatbot' })),
            { message: review.suggestions.join(' '), sender: 'Chatbot' },
            ...review.insights.map((insight) => ({ message: `${insight.title}: ${insight.description}`, sender: 'Chatbot' })),
          ]);
          
          setCurrentStep((prevStep) => prevStep + 1);
        } catch (error) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: 'There was an error fetching your review. Please try again later.', sender: 'Chatbot' },
          ]);
        } finally {
          setIsTyping(false);
        }
        return;
      }

      if (currentStep < chatFlow.length - 1) {
        const nextStep = chatFlow[currentStep + 1];

       
        if (nextStep.options.length > 0) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: nextStep.message, sender: 'Chatbot' },
          ]);
        } else {
        
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: nextStep.message, sender: 'Chatbot' },
          ]);
        }
        setCurrentStep((prevStep) => prevStep + 1);
        setIsTyping(false);
      }
    }, 1000);
  };

  const handleOptionClick = (option) => {
    if (option === 'Tell another story') {
      navigate('/new-story-alert');
    } else {
      handleSend(option);
    }
  };

  return (
    <div className='flex items-center justify-center h-[80vh] w-[80vw] mx-auto my-auto'>
    <MainContainer>
      <ChatContainer>
        <MessageList
          scrollBehavior="auto"
          /*typingIndicator={isTyping ? <TypingIndicator content="Navigator is typing..." style={{ backgroundColor:'white', fontSize:'12px', margin:'-10px'}}/> : <TypingIndicator content="User is typing..." style={{ backgroundColor:'white', fontSize:'12px', padding:'0'}} /> }*/
        >
          {messages.map((message, index) => (
            <Message key={index} model={message}  />
          ))}
          {currentStep < chatFlow.length && chatFlow[currentStep].options && (
            <div>
              {chatFlow[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="bg-yellow-300 hover:bg-violet-300 text-black text-sm p-2 rounded-md mt-2 mb-2 mr-2"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </MessageList>
        <MessageInput placeholder="Type your response here" onSend={handleSend} attachButton='false'  />
      </ChatContainer>
    </MainContainer>
    </div>
  );
}

export default Chatbot;