let markInterval = 0;
let currentMarkedWordIndex = 0;
let paragraphElement = document.getElementById('task-block__text');

function markTextWords() {
  clearInterval(markInterval);
  
  let paragraphStr = paragraphElement.innerText;
  
  markInterval = setInterval(function () {
    markNextTextWord(paragraphStr)
  }, 100);
}

function markNextTextWord(paragraphStr) {
  let paragraphWordsArr = paragraphStr.split(' ');
  
  paragraphWordsArr[currentMarkedWordIndex] = `
    <span class="marked-word">${paragraphWordsArr[currentMarkedWordIndex]}</span>
  `
  
  paragraphElement.innerHTML = paragraphWordsArr.join(' ');
  
  currentMarkedWordIndex++;
  
  if (currentMarkedWordIndex >= paragraphWordsArr.length) {
    currentMarkedWordIndex = 0;
    clearInterval(markInterval);
  }
}