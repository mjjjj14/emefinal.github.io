// // Dino Animation

// let animation1Complete = false;
// let animation2Complete = false;

// var div = document.getElementById('hiddenDiv');

// document.querySelector('.dino1').addEventListener('animationend', () => {
//     // Animation 1 is complete, start Animation 2
//     document.querySelector('.dino2').style.animation = 'animateRight 2s steps(11)';

//     animation1Complete = true;

//     animateAndShow();
// });

// document.querySelector('.dino2').addEventListener('animationend', () => {

//     animation2Complete = true;
//     animateAndShow();
// });


// function animateAndShow() {
  
//     if (animation1Complete && animation2Complete ) {
//         document.getElementById('hiddenDiv').style.display = 'flex';
//     }

//     div.style.opacity = '0';
//     setTimeout(function() {
//         div.style.opacity = '1'; // Fade in the div
//         // You can add more animation logic here if needed
//       }, 100); // Adjust the time according to your animation duration
// }


// Image Slider

let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);

 
}

function nextSlide() {
  showSlide(slideIndex += 1);

}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}


  
