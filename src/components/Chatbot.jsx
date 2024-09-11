import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  //TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { fetchSimulatedReview } from '../api/api.js';
import chatFlow from '../data/chatFlowData'; 
import ReviewingScreen from './ReviewingScreen.jsx';

function Chatbot() {
  const [messages, setMessages] = useState([
    /*{ message: 'Hi there! Welcome to Social Navigator.', sender: 'Chatbot' },
    { message: 'Need help navigating a tricky situation? Share your story with us. We’re here to listen, understand, and offer insights.', sender: 'Chatbot' }, */
    { message: 'Ready to share your story? Feel free to describe any situation that’s on your mind. If you need help framing your situation, just click ‘Need Guidance’, or you can start typing whenever you’re ready.', sender: 'Chatbot' },
  ]);
  //const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const [hideInput,setHideInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (chatFlow[currentStep]?.options?.includes('Tell another story')) {
      setHideInput(true);
    } else {
      setHideInput(false);
    }
  }, [currentStep]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
      position: "single",
      className: 'mt-4'
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    //setIsTyping(true);

    if (message === 'Submit your story') {
      setIsReviewing(true); 


      setTimeout(async () => {
        try {
          const review = await fetchSimulatedReview();
          setIsReviewing(false); 

          const combinedReviewMessage = `
            <b>Review Summary</b>:
            ${review.summary}
            
            <b>How the Situation Felt</b>:
            ${review.feelings}
            
            <b>Miscommunications</b>:
            ${review.miscommunications[0].title}
            ${review.miscommunications[0].points.join(',')}
            
            <b>Suggestions</b>:
            ${review.suggestions.join(', ')}
            
            <b>Insights</b>:
            ${review.insights.map((insight) => 
            `<b>${insight.title}</b>:
            <br> ${insight.description}`).join(',')}
          `;

          setMessages((prevMessages) => [
            ...prevMessages,
            { message: 'The review is complete', sender: 'Chatbot' },
            { message: combinedReviewMessage, sender: 'Chatbot', position: 'single' },
          ]);

          setCurrentStep((prevStep) => prevStep + 1);
        } catch (error) {
          setIsReviewing(false); 
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: 'There was an error fetching your review. Please try again later.', sender: 'Chatbot' },
          ]);
        } 
      }, 3000); 

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
      //setIsTyping(false);
    }
  };

  const handleOptionClick = (option) => {
    if (option === 'Tell another story') {
      setHideInput(true);
      navigate('/new-story-alert');
    } else {
      handleSend(option);
    }
  };

  return (
    
    <div className='flex items-center justify-center h-[60vh] w-[60vw] mx-auto my-auto'>
    <MainContainer className='border-none text-black'>
      <ChatContainer> 
        <MessageList
            scrollBehavior="auto"
            loading={isReviewing} 
            style={{ backgroundColor:'#FEF8EB', border:'0px', color:'#151B28' }}
          >
            {isReviewing 
              ? <ReviewingScreen /> 
              : messages.map((message, index) => (
                  <Message key={index} model={message} />
                ))
            }
            {!isReviewing && currentStep < chatFlow.length && chatFlow[currentStep].options && (
              <div className={`flex flex-wrap 
              ${chatFlow[currentStep].options.includes('Edit story') || chatFlow[currentStep].options.includes('Submit your story') ? 'justify-end' : 'justify-start'}
              ${chatFlow[currentStep].options.includes('Tell another story') ? 'justify-end' : 'justify-start'} 
               justify-start py-3 mb-2`}>
                {chatFlow[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`text-black text-sm shadow-md p-2 rounded-lg mt-2 mr-2 hover:bg-blue-500 hover:border-none ${
                      option === 'Skip' ? '!bg-[#F0E7D5] hover:bg-yellow-400 ' : 'bg-[#FFBB33] hover:bg-yellow-400'
                    } ${
                      option === 'Edit message' ? '!bg-white hover:bg-yellow-400 !px-6 !py-3 !rounded-full' : 'bg-[#FFBB33] hover:bg-yellow-400'
                    }
                    ${
                      option === 'Submit your story' ? '!bg-[#FFBB33] !hover:bg-blue-600 !px-6 !py-3 !rounded-full' : 'bg-[#FFBB33] hover:bg-yellow-400'
                    }  
                    ${
                      option === 'Tell another story' ? '!bg-[#FFBB33]!hover:bg-blue-600 !px-6 !py-3 !rounded-full' : 'bg-[#FFBB33] hover:bg-yellow-400'
                    }  `
                  }
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </MessageList>     
          {!isReviewing && !hideInput && (
  <MessageInput
    placeholder="Type your response here"
    onSend={(message) => handleSend(message)}
    attachButton={false}
    style={{ 
      backgroundColor: 'white', 
      borderRadius: '10px', 
      border: '0.5px solid black', 
      fontSize: '0.9rem' 
    }}
  />
)}
      </ChatContainer>
    </MainContainer>
    </div> 
  );
}

export default Chatbot;