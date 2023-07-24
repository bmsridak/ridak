var counter = 0;
var i = 0; // Pindahkan deklarasi variabel i ke luar fungsi

function typeWriter() {
  var id = document.getElementById("repeat");
  var firstTxt = "As a man who loves you with all of his heart, I want to start by admitting that I made a big mistake with the way I treated my past and relationship with my ex. I realize that those actions and decisions have hurt your feelings, and with regret, I apologize for the pain I have felt. I promise to be wiser and more responsible in our relationship, and I don't want to make the same mistake again. because now I realize how precious our relationship is. You are someone special in my life, and I want to spend my future with you. I hope to correct past mistakes and create a stronger, more intimate and happier relationship with you. I am committed to speaking honestly about how I feel and listening attentively to anything you have to say. I will work hard to understand and appreciate your perspective, and live a transparent and open life with you. Hope you can give me a chance to prove this change. I promise that I will try to be the best for you, and together, we can overcome the obstacles that stand in the way of our relationship. I hope our future is full of laughter, support and happiness. Lastly, I want to say that I love you infinitely. You are a special person to me, and I hope we can find a way to overcome this problem and build a beautiful future together. Thank you for listening, and once again, I apologize for my mistake. I really hope we can overcome this together and become stronger as a couple.";
  var speed = 3;

  if (counter == 1) {
    id.innerHTML += firstTxt.charAt(i);
  } else if (counter == 1000000000000) {
    id.innerHTML += lastTxt.charAt(i);
  } else {
    id.innerHTML += txt.charAt(i);
  }

  i++;

  if (i < firstTxt.length || i < lastTxt.length || i < txt.length) {
    setTimeout(typeWriter, speed);
  }
}

setInterval(function() {
  counter++;
  typeWriter();
}, 7000);
