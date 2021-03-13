// document.querySelector("button").addEventListener("click",handleClick);//don't put() arter the function
// function handleClick(){
//   alert("I got clicked");
// }
// We can use a ananomus finction and replace the handle click like this.
// document.querySelector("div").addEventListener("click", function (){
//   alert("I got clicked");
// });

//loop to detect which key is pressed. For detecting button press.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML); //make sound is in both functions and is sent to the sound switch.
    buttonAnimation(buttonInnerHTML);
});
}
// detecting keyboard press (listening to keypress addEvent)
document.addEventListener("keypress", function(event){  //event listener added to the entire document
  makeSound(event.key);
  buttonAnimation(event.key);        //make sound is in both functions and is sent to the sound switch.
});

//this is where the key values are sent to play the relivent sound.
function makeSound(key){
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();  //   tom1.play();
      break;

      case "a":
          var tom1 = new Audio("sounds/tom-2.mp3");
          tom1.play();  //   tom1.play();
      break;

      case "s":
          var tom1 = new Audio("sounds/tom-3.mp3");
          tom1.play();  //   tom1.play();
      break;

      case "d":
          var tom1 = new Audio("sounds/tom-4.mp3");
          tom1.play();  //   tom1.play();
      break;

      case "j":
          var tom1 = new Audio("sounds/crash.mp3");
          tom1.play();  //   tom1.play();
      break;

      case "k":
          var tom1 = new Audio("sounds/snare.mp3");
          tom1.play();  //   tom1.play();
      break;
      case "l":
          var tom1 = new Audio("sounds/kick-bass.mp3");
          tom1.play();  //   tom1.play();
      break;
    default: console.log(buttonInnerHTML)
    // this.style.color = "white";
  // var tom1 = new Audio("sounds/tom-1.mp3");
  // tom1.play();  //   tom1.play()
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
