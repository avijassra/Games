export class AppService {
    static newGuid(): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    static dateUid(): string {
      var dt = new Date(),
        dtNow = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60000),
        year = dtNow.getFullYear(),
        month = this.numToStrWithDigits(dtNow.getMonth(), 2),
        day = this.numToStrWithDigits(dtNow.getDay(), 2),
        hr = this.numToStrWithDigits(dtNow.getHours(), 2),
        min = this.numToStrWithDigits(dtNow.getMinutes(), 2),
        sec = this.numToStrWithDigits(dtNow.getSeconds(), 2);

      return `${year}${month}${day}_${hr}${min}${sec}`
    }

    private static numToStrWithDigits(num: number, digits: number): string {
      var numStr = num.toString();

      while(numStr.length < digits) {
        numStr = `0${numStr}`;
      }

      return numStr;
    }
}