"use strict";

let displayedLetters = 0;
let fullText = document.querySelector(".typewritten").textContent;
let speed = 200;

init();

function init() {
	console.log("init");
	
	document.querySelector(".typewritten").textContent;
	document.querySelector(".typewritten").textContent = "";
	
	typeWriter();
}

function typeWriter() {
	
  if (displayedLetters < fullText.length) {
    document.querySelector(".typewritten").innerHTML += fullText.charAt(displayedLetters);
    displayedLetters++;
    setTimeout(typeWriter, speed);
  }
}

// Reference: https://www.w3schools.com/howto/howto_js_typewriter.asp