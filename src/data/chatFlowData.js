const chatFlow = [
    {
      message: 'Need help navigating a tricky situation?',
      options: ['Need guidance', 'I’m good, thanks!'], // User selects: Need guidance
    },
    {
      message: 'Where did this situation take place?',
      options: ['Work', 'School', 'Social event', 'Online', 'Other…', 'Skip'], // User selects an option: Work
    },
    {
      message: 'Can you briefly describe the environment or context? A sentence or two will help us understand better.',
      options: ['Skip'], // User types a response here: “I was in a meeting with my team at work, discussing a new project. It was a formal setting, and everyone seemed focused.”
    },
    {
      message: 'How did this situation start?',
      options: ['Conversation', 'Email/Text exchange', 'In-person interaction', 'Conflict/Disagreement', 'Other…', 'Skip'], // User selects an option: Conversation
    },
    {
      message: 'Could you share a few details about the initial interaction? Even just a sentence or two helps.',
      options: ['Skip'], // User types a response here: “My manager asked for updates on our project, and I started explaining my progress, but I got sidetracked talking about some smaller details that I found interesting.”
    },
    {
      message: 'How did you feel during this situation?',
      options: ['Confused', 'Frustrated', 'Worried', 'Angry', 'Neutral', 'Other…', 'Skip'], // User selects an option: Confused
    },
    {
      message: 'What was the most significant feeling you experienced? Please describe it briefly.',
      options: ['Skip'], // User types a response here: “I felt confused because I could tell that the rest of the team seemed impatient, but I wasn’t sure why. I was just trying to explain things clearly.”
    },
    {
      message: 'What was the other person’s reaction?',
      options: ['Supportive', 'Indifferent', 'Hostile', 'Confusing', 'Other…', 'Skip'], // User selects an option: “Confusing”
    },
    {
      message: 'Could you describe any specific actions or words that stood out to you?',
      options: ['Skip'], // User types a response here: “My manager interrupted me, saying we were running out of time and needed to move on. I couldn’t tell if they were annoyed or just trying to keep us on schedule.”
    },
    {
      message: 'How did the situation end, and what are your thoughts on it now?',
      options: ['Resolved positively', 'Unresolved', 'Still thinking about it', 'Regretful', 'Other…', 'Skip'], // User selects an option: “Still thinking about it.”
    },
    {
      message: 'Please share a few thoughts or reflections on how it ended.',
      options: ['Skip'], // User types a response here: “The meeting moved on quickly after that, but I’ve been thinking about it a lot. I’m worried I might have annoyed everyone or seemed like I wasn’t focused, even though I was really trying to be thorough.”
    },
    {
      message: 'Thank you for sharing these details. You can now submit your full story for analysis. Feel free to add anything else you think might be important. Or if you’re finished, just click ‘I’m ready to submit’.',
      options: ['Edit message', 'I’m ready to submit'], // User selects an option: “I'm ready to submit”
    },
    {
      message: 'Submit your story for review by clicking below.',
      options: ['Review your story'], // User selects "Submit your story"
    },
    {
      message: 'Would you like to share another story?',
      options: ['Tell another story'], // This step prompts the user to tell another story after the review
    },
  ];
  
  export default chatFlow;