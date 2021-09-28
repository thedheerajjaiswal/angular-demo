import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  getmessage(): Promise<String> {
    let message = 'Hello Angular Practice';
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, 3000);
    });
  }

  constructor() {}
}
