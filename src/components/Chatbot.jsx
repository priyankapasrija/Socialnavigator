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

function Chatbot() {
  const [messages, setMessages] = useState([
    { message: 'Hi there! Welcome to Social Navigator.', sender: 'Chatbot' },
    { message: 'Need help navigating a tricky situation? Share your story with us. We’re here to listen, understand, and offer insights.', sender: 'Chatbot' },
    { message: 'Ready to share your story? Feel free to describe any situation that’s on your mind. If you need help framing your situation, just click ‘Need Guidance’, or you can start typing whenever you’re ready.', sender: 'Chatbot' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  // Define the flow of questions and messages
  const chatFlow = [
    { 
      message: 'Need help navigating a tricky situation?', 
      options: ['Need guidance', 'I’m good, thanks!'] // User selects: Need guidance
    },
    { 
      message: 'Where did this situation take place?', 
      options: ['Work', 'School', 'Social event', 'Online', 'Other…', 'Skip'] // User selects an option: Work
    },
    { 
      message: 'Can you briefly describe the environment or context? A sentence or two will help us understand better.', 
      options: [] // User types a response here: “I was in a meeting with my team at work, discussing a new project. It was a formal setting, and everyone seemed focused.”
    },
    { 
      message: 'How did this situation start?', 
      options: ['Conversation', 'Email/Text exchange', 'In-person interaction', 'Conflict/Disagreement', 'Other…', 'Skip'] // User selects an option: Conversation
    },
    { 
      message: 'Could you share a few details about the initial interaction? Even just a sentence or two helps.', 
      options: [] // User types a response here: “My manager asked for updates on our project, and I started explaining my progress, but I got sidetracked talking about some smaller details that I found interesting.”
    },
    { 
      message: 'How did you feel during this situation?', 
      options: ['Confused', 'Frustrated', 'Worried', 'Angry', 'Neutral', 'Other…', 'Skip'] // User selects an option: Confused
    },
    { 
      message: 'What was the most significant feeling you experienced? Please describe it briefly.', 
      options: [] // User types a response here: “I felt confused because I could tell that the rest of the team seemed impatient, but I wasn’t sure why. I was just trying to explain things clearly.”
    },
    { 
      message: 'What was the other person’s reaction?', 
      options: ['Supportive', 'Indifferent', 'Hostile', 'Confusing', 'Other…', 'Skip'] // User selects an option: “Confusing”
    },
    { 
      message: 'Could you describe any specific actions or words that stood out to you?', 
      options: [] // User types a response here: “My manager interrupted me, saying we were running out of time and needed to move on. I couldn’t tell if they were annoyed or just trying to keep us on schedule.”
    },
    { 
      message: 'How did the situation end, and what are your thoughts on it now?', 
      options: ['Resolved positively', 'Unresolved', 'Still thinking about it', 'Regretful', 'Other…', 'Skip'] // User selects an option: “Still thinking about it.”
    },
    { 
      message: 'Please share a few thoughts or reflections on how it ended.', 
      options: [] // User types a response here: “The meeting moved on quickly after that, but I’ve been thinking about it a lot. I’m worried I might have annoyed everyone or seemed like I wasn’t focused, even though I was really trying to be thorough.”
    },
    { 
      message: 'Thank you for sharing these details. You can now submit your full story for analysis. Feel free to add anything else you think might be important. Or if you’re finished, just click ‘I’m ready to submit’.', 
      options: ['Edit message', 'I’m ready to submit'] // User selects an option: “I'm ready to submit”
    },
    {
      message: 'Submit your story for review by clicking below.',
      options: ['Submit your story'] // User selects "Submit your story"
    }
  ];

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    setTimeout(async () => {
      if (message === 'Submit your story') {
        // Show loading message before fetching the review
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

        
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: 'Would you like to share another story?', option: ['Tell another story'] }
          ]);
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
            { message: nextStep.message, sender: 'Chatbot' }
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
    <MainContainer>
      <ChatContainer>
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={isTyping ? <TypingIndicator content="Navigator is typing..." /> : null}
        >
          {messages.map((message, index) => (
            <Message key={index} model={message} />
          ))}
          {currentStep < chatFlow.length && chatFlow[currentStep].options && (
            <div className="options-container">
              {chatFlow[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="option-button bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 px-2 rounded mt-2 my-2 mr-2"
                >
                  {option}
                </button>
              ))}
                  </div>
          )}
              {currentStep === chatFlow.length && (
            <div >
              <button
                onClick={() => handleOptionClick('Tell another story')}
                className="option-button bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 px-2 rounded mt-2 my-2 mr-2"
              >
                Tell another story
              </button>
            </div>
          )}
        </MessageList>
        <MessageInput placeholder="Type your response here" onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  );
}

export default Chatbot;