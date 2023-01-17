class Score {
  score: number;
  constructor(score: number) {
    this.score = score;
  }
  getScore(): number {
    return this.score;
  }
  addScore(): void {
    this.score = this.score + 10;
  }
}

export default Score;
