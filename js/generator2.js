let prompts = [
  "The Best Way To Get Started Is To Quit Talking And Begin Doing",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty",
  "Don’t Let Yesterday Take Up Too Much Of Today.",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
  "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
  "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
  "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
  "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
  "We May Encounter Many Defeats But We Must Not Be Defeated.",
  "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
  "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?",
  "We Generate Fears While We Sit. We Overcome Them By Action.",
  "Whether You Think You Can Or Think You Can’t, You’re Right.",
  "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.",
  "The Man/Woman Who Has Confidence In Himself/Herself Gains The Confidence Of Others.",
  "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.",
  "Creativity Is Intelligence Having Fun",
  "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.",
  "Do What You Can With All You Have, Wherever You Are.",
  "Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.",
  "You Are Never Too Old To Set Another Goal Or To Dream A New Dream.",
  "To See What Is Right And Not Do It Is A Lack Of Courage.",
  "Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.",
  "The Future Belongs To The Competent. Get Good, Get Better, Be The Best!"
]

function generate() {
  var randomNumber = Math.floor(Math.random() * (prompts.length));
  document.getElementById('prompt').innerHTML = prompts[randomNumber];
}
