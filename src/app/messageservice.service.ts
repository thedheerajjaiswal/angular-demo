import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class MessageserviceService {
  _othermessage: string;
  constructor(private _othermessageService: OthermessageService) {}

  message() {
    return 'Hello i am a example of services';
  }
  getothermessage() {
    // this._othermessage = this._othermessageService.othermessage();
    // return this._othermessage;
    return this._othermessageService.othermessage();
  }
}
