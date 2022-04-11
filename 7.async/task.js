class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(alarmTime, alarmCallback, alarmId) {
    if (!alarmId) {
      throw new Error(`Параметр не передан`);
    }
    if (this.alarmCollection.includes(alarmId)) {
      return console.error(`Звонок уже есть`);
    }
    this.alarmCollection.push({
      id: alarmId,
      time: alarmTime,
      callback: alarmCallback,
    });
  }
  removeClock(alarmIdtoRemove) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => {
      if (alarmIdtoRemove === this.alarmCollection[alarm]) {
        return true;
      }
    });
  }
  getCurrentFormattedTime() {
    let currentDate = new Date();
    let hours = ('0' + currentDate.getHours()).slice(-2);
    let minutes = ('0' + currentDate.getMinutes()).slice(-2);
    let alarmTime = `${hours}:${minutes}`;
    return alarmTime;
    //let alarmTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
    //return alarmTime;
  }
  start() {
    const checkClock = (alarm) => {
      if (alarm.alarmTime === this.getCurrentFormattedTime()) {
        alarm.callback();
      }
    };
    if (this.timerId === false) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => checkClockBind(alarm));
      }, 5000);
    }
  }

  stop() {
    if (this.timerId === true) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms() {
    this.alarmCollection.forEach((currentAlarm) => {
      alert(
        `Будильник ${currentAlarm.alarmId} создан: ${currentAlarm.alarmTime} `
      );
    });
  }
  clearAlarms() {
    this.alarmCollection = [];
  }
}
//console.log(AlarmClock.getCurrentFormattedTime);
// console.log(AlarmClock.addClock);
// console.log(AlarmClock.removeClock);
// console.log(AlarmClock);
