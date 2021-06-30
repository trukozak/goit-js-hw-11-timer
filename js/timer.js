class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    const timerRef = document.querySelector(selector);
    this.daysRef = timerRef.querySelector('[data-value="days"]');
    this.hoursRef = timerRef.querySelector('[data-value="hours"]');
    this.minsRef = timerRef.querySelector('[data-value="mins"]');
    this.secsRef = timerRef.querySelector('[data-value="secs"]');

    this.startCountDownTimer();
  }

  startCountDownTimer() {
    setInterval(() => {
      const curTime = Date.now();
      const differenceTime = this.targetDate.getTime() - curTime;
      const displayTime = this.getTimeValue(differenceTime);
      this.updateTimeValue(displayTime);
    }, 1000);
  }

  getTimeValue(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateTimeValue({ days, hours, mins, secs }) {
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});
