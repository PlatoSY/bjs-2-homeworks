class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(alarmTime, alarmCallback, alarmId) {
    if (!alarmId) {
      throw new Error(`Параметр не передан`);
    }
    if (this.alarmCollection.some((alarm) => alarm.alarmId === alarmId)) {
      return console.error(`Звонок уже есть`);
    }

    this.alarmCollection.push({
      id: alarmId,
      time: alarmTime,
      callback: alarmCallback,
    });
  }

  removeClock(id) {
    let alarmCollectionBefore = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.id !== id
    );
    let alarmCollectionAfter = this.alarmCollection.length;
    //return alarmCollectionBefore > alarmCollectionAfter;
    if (alarmCollectionBefore !== alarmCollectionAfter) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    let hours = ('0' + currentDate.getHours()).slice(-2);
    let minutes = ('0' + currentDate.getMinutes()).slice(-2);
    let alarmTime = `${hours}:${minutes}`;
    return alarmTime;
  }

  start() {
    const checkClock = (alarm) => {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback();
      }
    };

    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((alarm) => checkClock(alarm));
      }, 500);
    }
  }

  stop() {
    if (!this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((currentAlarm) => {
      console.log(
        `Будильник ${currentAlarm.id} заведен на: ${currentAlarm.time} `
      );
    });
  }

  clearAlarms() {
    this.alarmCollection = [];
    this.stop();
  }
}
