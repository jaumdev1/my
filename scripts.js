const button = document.querySelector('#mybutton');
const text = document.querySelector('#phrase');
button.style.display = 'none';
const quotes = [
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "You miss 100% of the shots you don’t take. -Wayne Gretzky",
  "I have not failed. I’ve just found 10,000 ways that won’t work. -Thomas Edison",
  "The only way to do great work is to love what you do. -Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
  "In order to be irreplaceable one must always be different. -Coco Chanel",
  "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. -Oprah Winfrey",
  "The best way to predict your future is to create it. -Abraham Lincoln",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. -Chantal Sutherland",
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  "Happiness is not something ready-made. It comes from your own actions. -Dalai Lama XIV",
  "You can't fall if you don't climb. But there's no joy in living your whole life on the ground. -Unknown",
  "If you want to live a happy life, tie it to a goal, not to people or things. -Albert Einstein",
  "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
  "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",
  "Happiness is not something ready-made. It comes from your own actions. -Dalai Lama XIV",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. -Chantal Sutherland",
  "If you want to live a happy life, tie it to a goal, not to people or things. -Albert Einstein",
  "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
  "There is no substitute for hard work. -Thomas Edison",
  "I have learned over the years that when one's mind is made up, this diminishes fear. -Rosa Parks",
  "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
  "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
  "Success is not how high you have climbed, but how you make a positive difference to the world. -Roy T. Bennett"]

function generateQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber];
 
  button.style.display = 'block';
  
}

text.style.display = 'none';
button.addEventListener('click', function() {
  if (text.style.display === 'none') {
    text.style.display = 'block'; /* torna o texto visível */
  } else {
    text.style.display = 'none'; /* esconde o texto novamente */
  }
});

