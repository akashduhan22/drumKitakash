//sound generator by click

//created a variable to provide limit to the for loop by selecting every element with .drum class and figured its length
var numberOfDrum = document.querySelectorAll(".drum").length;
//using for loop to select every element having class .drum from 0(first element) to max. length of the element having class .drum
for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var color= this.style.color="white";
    console.log(color); //used this method to change the color of the button when clicked.
    
    var alpha1 = this.innerHTML; //using this method to find the innerHTML of the button which one is clicked and storing it into alpha1 variable.
    buttonAnimation(alpha1);
//using switch add sound to the buttons that makes the sound only if the innerHTML matches  with the case statement.
    switch (alpha1) {
      case "w":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
/*var audio_name= new Audio('path to the audio');
  audio_name.play();
   */
      case "a":
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;

      case "s":
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;

      case "d":
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;

      case "j":
        var audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        break;

      case "k":
        var audio6 = new Audio("sounds/snare.mp3");
        audio6.play();
        break;

      case "l":
        var audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        break;

      default:
        console.log("refresh");
    }
  });
}

//keypress sound generater
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
//used callback method to invoke the event.key function.
//firstly function(event) invokes and tells all the information about which key is pressed by the EventListner='keypress' then a function makesound(event.key) only uses the which key is pressed to run the case match into switch statement. 
function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "j":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;

    case "k":
      var audio6 = new Audio("sounds/snare.mp3");
      audio6.play();
      break;

    case "l":
      var audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;

    default:
      console.log("refresh");
  }
}

//animation starts.
function buttonAnimation(currentkey){
  var action=document.querySelector("."+currentkey);
  action.classList.add("pressed");

  setTimeout(function(){
  action.classList.remove("pressed");
  },100);
}
  
  
  
  // var audio1= new Audio('./sounds/tom-1.mp3');
// audio1.play();

// var color= this.style.color="white";
//     console.log(color);