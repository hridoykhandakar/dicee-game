const btn = document.querySelector(".btn");

btn.addEventListener("click", play);

function play(e) {
  e.preventDefault();

  let num1 = Math.floor(Math.random() * 6) + 1;
  let num2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").src = `images/dice${num1}.png`;
  document.querySelector(".img2").src = `images/dice${num2}.png`;

  if (num1 > num2) {
    document.querySelector(".title").innerText = "player 1 win";
  } else if (num1 < num2) {
    document.querySelector(".title").innerText = "player 2 win";
  } else {
    document.querySelector(".title").innerText = "Draw";
  }
  document.querySelector(".btn").innerText = "Play Again";
}
