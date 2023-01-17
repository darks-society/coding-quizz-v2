class Timer {
  time_left: number;
  constructor(time_left: number) {
    this.time_left = time_left;
  }
  getTimeLeft(): number {
    return this.time_left;
  }
  setTimeLeft(time_left: number) {
    this.time_left = time_left;
  }
  decrement() {
    this.time_left = this.time_left - 1;
  }
}

export default Timer;
