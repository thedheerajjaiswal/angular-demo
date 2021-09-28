import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css'],
  providers: [MessageserviceService],
})
export class ServiceExampleComponent implements OnInit {
  msg: any;
  othmsg: string;
  constructor(private _messageserviceService: MessageserviceService) {
    // console.log(this._messageserviceService.message());
  }

  message() {
    this.msg = this._messageserviceService.message();
    this.othmsg = this._messageserviceService.getothermessage();
  }
  ngOnInit(): void {}
}
