let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tyson3.jpg') {
      myImage.setAttribute('src','images/tyson4.jpg');
    } else {
      myImage.setAttribute('src','images/tyson3.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Iron Mike Tyson is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Iron Mike Tyson is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}