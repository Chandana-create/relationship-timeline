const compliments = [
  "You make my world brighter 🌟",
  "Every day with you is a gift 🎁",
  "You're my favorite notification ❤️"
];

function showCompliment() {
  alert(compliments[Math.floor(Math.random() * compliments.length)]);
}