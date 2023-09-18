const INTERVAL_DELAY = 1000;

let markInterval = 0;
let currentMarkedWordIndex = 0;
let paragraphElement = document.getElementById('task-block__text');
let paragraphStr = paragraphElement.innerText;

function markTextWords() {
  resetMarkingCounter();
  
  markNextTextWord(paragraphStr);
  
  markInterval = setInterval(function () {
    markNextTextWord()
  }, INTERVAL_DELAY);
}

function markNextTextWord() {
  let paragraphWordsArr = paragraphStr.split(' ');
  
  if (!paragraphWordsArr[currentMarkedWordIndex].match(/[\wа-я]+/ig)) {
    currentMarkedWordIndex++;
    markNextTextWord();
    return;
  }
  
  paragraphWordsArr[currentMarkedWordIndex] = `
    <span class="marked-word">${paragraphWordsArr[currentMarkedWordIndex]}</span>
  `
  
  paragraphElement.innerHTML = paragraphWordsArr.join(' ');
  
  currentMarkedWordIndex++;
  
  if (currentMarkedWordIndex >= paragraphWordsArr.length) {
    resetMarkingCounter();
  }
}

function resetMarkingCounter() {
  clearInterval(markInterval);
  currentMarkedWordIndex = 0;
}
