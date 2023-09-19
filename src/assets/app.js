const INTERVAL_DELAY = 1000;

const paragraphElement = document.getElementById('task-block__text');
const paragraphStr = paragraphElement.innerText;

let markInterval = 0;
let currentMarkedWordIndex = 0;

function markTextWords() {
  resetMarkingCounter();
  
  markNextTextWord(paragraphStr);
  
  markInterval = setInterval(markNextTextWord, INTERVAL_DELAY);
}

function markNextTextWord() {
  let paragraphWordsArr = paragraphStr.split(' ');
  
  // Если текущий отрывок это символ вроде тире, то берется следующий отрывок
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
