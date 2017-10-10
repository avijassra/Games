import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    newGuid(): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    dateUid(): string {
      var dt = new Date(),
        dtNow = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60000);;
      return `${dtNow.getFullYear()}${dtNow.getDate()}${dtNow.getDay()}_${dtNow.getHours()}${dtNow.getMinutes()}${dtNow.getSeconds()}`
    }
}