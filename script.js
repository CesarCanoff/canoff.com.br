const stringToShow = "Hello, I'm César Canoff";
const mainTitle = document.querySelector('.main-title');
let text = mainTitle.textContent;
let firstLetter = mainTitle.textContent[0];

var underscoreElement = document.createElement('span');
underscoreElement.textContent = '_';
underscoreElement.style.color = '#2b99f3';
underscoreElement.style.fontWeight = 'bold';

for (let i = 0; i < stringToShow.length; i++) {
  setTimeout(() => {
    text += stringToShow[i];
    mainTitle.textContent = text;
    mainTitle.appendChild(underscoreElement);
  }, 100 * i);
}
