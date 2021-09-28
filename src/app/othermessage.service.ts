import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OthermessageService {
  constructor() {}
  othermessage() {
    return 'Message from  other service';
  }
}
