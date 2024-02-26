function ScrambleText({ duration, interval, charset, uppercase, text }) {
    let scrambledText = text;
    let iteration = 0;
    let spliceIteration = 0;
    let terminated = false;
  
    const random = (characterList) => {
      const length = characterList.length;
      const randomNumber = Math.floor(Math.random() * length);
      const letter = characterList[randomNumber];
      return uppercase ? letter.toUpperCase() : letter;
    };
  
    const replacer = (scrambledArray, originalArr, charsToReplace) => {
      const replacement = originalArr.slice(0, charsToReplace).join('');
      scrambledArray.splice(0, replacement.length, replacement);
    };
  
    const scrambler = (lengthOfArray) => {
      const scrambledArray = [];
      for (let i = 0; i < lengthOfArray; i++) {
        scrambledArray.push(random(charset));
      }
      return scrambledArray;
    };
  
    const scramble = (timer) => {
      if (terminated) {
        scrambledText = text;
        clearInterval(timer);
        return;
      }
  
      iteration++;
      const scrambledArray = scrambler(text.length);
  
      if (iteration % (parseInt(duration / interval / text.length)) === 0) {
        spliceIteration++;
      }
  
      replacer(scrambledArray, text.split(''), spliceIteration);
  
      const scrambledWord = scrambledArray.join('');
      scrambledText = scrambledWord;
  
      if (spliceIteration === text.length) {
        clearInterval(timer);
      }
    };
  
    const intervalTimer = setInterval(() => {
      scramble(intervalTimer);
    }, interval);
  
    const handleClick = () => {
      terminated = true;
    };
  
    return {
      text: scrambledText,
      handleClick: handleClick
    };
  }
  