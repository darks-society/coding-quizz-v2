import type Payload from './interfaces/payload';
import type Challenge from './models/Challenge';
import Timer from './models/Timer';
import * as IC from './utils/initialize_challenges';
import * as RC from './utils/random_challenge';
import * as SC from './utils/setup_challenge';
import * as SCalculator from './utils/score_calculator';
import * as CA from './utils/check_answer';
import * as UC from './utils/uncheck_checkbox';
import * as ASM from './utils/associate_score_module';
import * as ST from './utils/title_logique';

const startQuizz = (): void => {
  localStorage.getItem('context') === null && (window.location.href = '.');

  ST.titleLogique();

  let challenges!: Challenge[];

  if (localStorage.getItem('context')! === 'TS') {
    challenges = IC.initializeTypescript();
  } else if (localStorage.getItem('context')! === 'PY') {
    challenges = IC.initializePython();
  } else if (localStorage.getItem('context')! === 'Mongo') {
    challenges = IC.initializeMongo();
  }

  const challengeNumber = challenges.length;

  const getChallenge = (challenges: Challenge[]): Payload => {
    let rc = RC.randomChallenge(challenges);
    let sc = SC.setupChallenge(challenges[rc]);
    challenges.splice(rc, 1);
    return sc;
  };

  const NextCheckAnswers = () => {
    let isCorrect: boolean = CA.checkAnswer(data.answer);
    isCorrect && challengeSuccessful++;
  };

  let data: Payload = getChallenge(challenges);
  let timer: Timer = new Timer(data.question_time);
  let challengeSuccessful: number = 0;
  let user_clicks: number = 0;

  const dataSetter = () => {
    user_clicks = user_clicks + 1;
    NextCheckAnswers();
    data = getChallenge(challenges);
    timer.setTimeLeft(data.question_time);
    UC.uncheck();
  };

  const endSetup = () => {
    user_clicks = user_clicks + 1;
    if (user_clicks > challengeNumber) {
      UC.uncheck();
    } else {
      NextCheckAnswers();
      let final_score: number = SCalculator.scoreCalculator(
        challengeNumber,
        challengeSuccessful,
      );
      final_score >
        parseInt(
          localStorage.getItem(
            ASM.getScoreTypeUsingContext(localStorage.getItem('context')!),
          ) as string,
        ) && ASM.associateScore(final_score);
      final_score >= 50
        ? (document.getElementById('score')!.style.color = 'green')
        : (document.getElementById('score')!.style.color = 'red');

      document.getElementById('score')!.textContent =
        'your final score : ' + final_score.toString() + '%';
      UC.uncheck();
      clearInterval(countDown);
    }
  };

  const endOfChallenges = (challenges: Challenge[]) => {
    challenges.length <= 0 ? endSetup() : dataSetter();
  };

  const countDown = setInterval(() => {
    timer.getTimeLeft() < 0
      ? endOfChallenges(challenges)
      : (document.getElementById('time')!.textContent =
          'time left : ' + timer.getTimeLeft().toString());
    timer.decrement();
  }, 1000);

  document.getElementById('next')!.addEventListener('click', () => {
    challenges.length <= 0 ? endSetup() : dataSetter();
  });
};

startQuizz();
