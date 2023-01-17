export const checkAnswer = (answer: string): boolean => {
  let user_guess: string = '';
  let guess1 = document.getElementById('guess1');
  let guess2 = document.getElementById('guess2');
  let guess3 = document.getElementById('guess3');
  let guess4 = document.getElementById('guess4');
  if (guess1!.checked == true) {
    user_guess = document.getElementById('guessLabel1')!.textContent as string;
  }
  if (guess2!.checked == true) {
    user_guess = document.getElementById('guessLabel2')!.textContent as string;
  }
  if (guess3!.checked == true) {
    user_guess = document.getElementById('guessLabel3')!.textContent as string;
  }
  if (guess4!.checked == true) {
    user_guess = document.getElementById('guessLabel4')!.textContent as string;
  }

  return user_guess === answer;
};
