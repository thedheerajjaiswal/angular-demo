import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((obj) => {
      console.log(obj);
    });
  }
  // canDeactivate() {
  //   return confirm('Are you sure you want to leave this page of Admin ..!');
  // }
}
