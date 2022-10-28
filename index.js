const COUNTDOWN_TIME = 10;
const INTERVAL = 1000;

const MESSAGE =
  "Some say the world will end in 🔥, Some say in ice. From what I've tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

const words = MESSAGE.split(" ");

const countdownSpan = document.querySelector("#countdown");
const messageP = document.querySelector("#message");

const img = document.createElement("img");

function countDown() {
  let i = COUNTDOWN_TIME;

  const countDownInterval = setInterval(function () {
    countdownSpan.textContent = i;
    i--;

    if (i < 0) {
      clearInterval(countDownInterval);
      displayMessage(words);
    }
  }, INTERVAL);
}

countDown();

function displayMessage(msgARR) {
  let i = 0;

  const msgInterval = setInterval(function () {
    messageP.textContent = msgARR[i];
    i++;
  }, INTERVAL);

  if (i === msgARR.length) {
    clearInterval(msgInterval);
  }
}

displayMessage(words);
