// var button = document.getElementsByClassName("link-button");


// function typeEffect(element, speed) {
// 	var text = element.innerHTML;
// 	element.innerHTML = "";
	
// 	var i = 0;
// 	var timer = setInterval(function() {
//     if (i < text.length) {
//       element.append(text.charAt(i));
//       i++;
//     } else {
//       clearInterval(timer);
//       button.style.display = 'flex';
//     }
//   }, speed);
// }


// // application
// var speed = 75;
// var h1 = document.querySelector('h1');
// var p = document.querySelector('p');
// var delay = h1.innerHTML.length * speed + speed;

// // type affect to header
// typeEffect(h1, speed);


// // type affect to body
// setTimeout(function(){
//   p.style.display = "inline-block";
//   typeEffect(p, speed);
// }, delay);
var button = document.getElementsByClassName("link-button")[0]; // Assuming there's only one element with the class "link-button"

function typeEffect(element, speed, callback) {
    var text = element.innerHTML;
    element.innerHTML = "";
    
    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }, speed);
}

// Function to show the button
function showButton() {
    button.style.display = 'flex';
}

// application
var speed = 75;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed, function() {
    // type affect to body
    setTimeout(function(){
        p.style.display = "inline-block";
        typeEffect(p, speed, showButton);
    }, delay);
});
