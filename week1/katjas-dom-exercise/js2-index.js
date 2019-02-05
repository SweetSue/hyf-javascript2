// * console log button
let buttonElement = document.getElementById('saveBtn');
console.log(buttonElement);

// * console log all inputs
let inputElement = document.getElementsByTagName('input');
console.log(inputElement);

// * change button text
buttonElement.innerText = 'Save here';

// * add class to button and country input
let inputCountryElement = document.getElementById('country');
console.log(inputCountryElement);
buttonElement.className = 'myClass';
inputCountryElement.className = 'myClass';

// * change color of that class
let all = document.getElementsByClassName('myClass');
for (var i = 0; i < all.length; i++) {
  all[i].style.color = 'red';
}

// * set value of name input
document.getElementById('name').value = 'Your name here';

// * append p to form with values of inputs when clicking the button
document.getElementById('saveBtn').onclick = function() {
  newParagraph();
};
function newParagraph() {
  let p = document.createElement('p');
  p.className = 'inputText';
  p.innerHTML =
    document.getElementById('name').value + '<br>' + document.getElementById('country').value;
  document.body.appendChild(p);
}
