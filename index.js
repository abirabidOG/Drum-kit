var audio1 = new Audio('sounds/tom-1.mp3');
var audio2 = new Audio('sounds/tom-2.mp3');
var audio3 = new Audio('sounds/tom-3.mp3');
var audio4 = new Audio('sounds/tom-4.mp3');
var audio5 = new Audio('sounds/crash.mp3');
var audio6 = new Audio('sounds/kick-bass.mp3');
var audio7 = new Audio('sounds/snare.mp3');

// var buttonInnerHTML = this.innerHTML;

//   switch (buttonInnerHTM) {
//     case "w":
//       audio1.play();
//       break;
//     case "a":
//       audio2.play();
//       break;
//     case "s":
//       audio3.play();
//       break;
//     case "d":
//       audio4.play();
//       break;
//     case "j":
//       audio5.play();
//       break;
//     case "k":
//       audio6.play();
//       break;
//     case "l":
//       audio7.play();
//       break;
//   }

// Detecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    }
  );
}


// Detecting Keyboard Press

addEventListener("keypress", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
      case "w":
        audio1.play();
        break;
      case "a":
        audio2.play();
        break;
      case "s":
        audio3.play();
        break;
      case "d":
        audio4.play();
        break;
      case "j":
        audio5.play();
        break;
      case "k":
        audio6.play();
        break;
      case "l":
        audio7.play();
        break;
    }

  }

  //make button active

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }


