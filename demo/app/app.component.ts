import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  num: number = 10;
  constructor() { }
  ngOnInit() { }

  onClick(e: any) {
    console.log(e);
    if (e) {
      this.num++;
    } else {
      this.num--;
    }
  }
}
