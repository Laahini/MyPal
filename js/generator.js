let prompts = [
  "Who do you trust most? Why?",
  "What do you value most in relationships (trust, respect, sense of humor, etc.)?",
  "What does love mean to you? How do you recognize it in a relationship?",
  "How do you use your personal strengths and abilities at work?",
  "What about your work feels real, necessary, or important to you?",
  "How does work fulfill you? Does it leave you wanting more?",
  "Does your work drain or overwhelm you? Why? Is this something you can change?",
  "What values do you consider most important in life (honesty, justice, altruism, loyalty, etc.)? How do your actions align with those values?",
  "What do you appreciate most about your personality? What aspects do you find harder to accept?",
  "Finish this sentence: My life would be incomplete without ....",
  "Describe a choice you regret. What did you learn from it?",
  "What go-to coping strategies help you get through moments of emotional or physical pain?",
  "What are three things that can instantly disrupt a good mood and bring you down? What strategies do you use to counter these effects?",
  "Describe your favorite thing to do when feeling low.",
  "What aspects of your life are you most grateful for?",
  "How do you prioritize self-care?",
  "Write a short love letter to some object or place that makes you happy.",
  "What are your favorite hobbies? Why?",
  "List 10 things that inspire or motivate you.",
  "What parts of life surprised you most? What turned out the way you expected it would?",
  "List three important goals. How do they match up to your goals from 5 years ago?",
  "What do you most want to accomplish in life?",
  "Identify one area where you’d like to improve. Then, list three specific actions you can take to create that change.",
  "What helps you stay focused and motivated when you feel discouraged?",
  "List and Describe Your Emotions."
]

function generate() {
  var randomNumber = Math.floor(Math.random() * (prompts.length));
  document.getElementById('prompt').innerHTML = prompts[randomNumber];
}
