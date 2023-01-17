import type Payload from 'src/interfaces/payload';
import type Challenge from 'src/models/Challenge';

export const setupChallenge = (challenge: Challenge): Payload => {
  let allGuesses: string[] = [challenge.answer, ...challenge.fake_answers];
  let allGuessesShuffled: string[] = [];
  for (let i = 0; i < 4; i++) {
    let r = Math.floor(Math.random() * allGuesses.length);
    allGuessesShuffled.push(allGuesses[r]);
    allGuesses.splice(r, 1);
  }
  document.getElementById('question')!.innerHTML = challenge.question;
  document.getElementById(
    'guessLabel1',
  )!.innerHTML = `<code>${allGuessesShuffled[0]}</code>`;
  document.getElementById(
    'guessLabel2',
  )!.innerHTML = `<code>${allGuessesShuffled[1]}</code>`;
  document.getElementById(
    'guessLabel3',
  )!.innerHTML = `<code>${allGuessesShuffled[2]}</code>`;
  document.getElementById(
    'guessLabel4',
  )!.innerHTML = `<code>${allGuessesShuffled[3]}</code>`;

  return Object.assign(
    {},
    {
      answer: challenge.answer,
      question_time: challenge.question_time,
    },
  );
};
