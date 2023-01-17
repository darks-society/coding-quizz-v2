class Challenge {
  question: string;
  answer: string;
  fake_answers: string[];
  question_time: number;
  constructor(
    question: string,
    answer: string,
    fake_answers: string[],
    question_time: number,
  ) {
    this.question = question;
    this.answer = answer;
    this.fake_answers = [...fake_answers];
    this.question_time = question_time;
  }
}

export default Challenge;
