function showQuote() {
  const quotes = [
    "Believe in yourself!",
    "Stay positive and happy.",
    "Work hard and don't give up hope.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
}

function generateNumber() {
  let num = Math.floor(Math.random() * 100) + 1; // 1 to 100
  document.getElementById("result").innerText = "You got: " + num;
}


function generateEmoji() {
  const emojis = ['😀', '😂', '😍', '😎', '🤩', '🥶', '🤓', '😈', '👻', '🐶', '🍕', '🌈'];
  const index = Math.floor(Math.random() * emojis.length);
  document.getElementById("emojiBox").innerText = emojis[index];
}
