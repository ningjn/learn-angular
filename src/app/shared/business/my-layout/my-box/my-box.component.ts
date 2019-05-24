import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-box',
  templateUrl: './my-box.component.html',
  styleUrls: ['./my-box.component.scss']
})
export class MyBoxComponent implements OnInit {
  @Input()
  boxTitle: string;

  @Input()
  uiType = 'left-title'; // ui类型

  constructor() { }

  ngOnInit() {
  }

}
