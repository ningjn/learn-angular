import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-base-list',
  templateUrl: './my-base-list.component.html',
  styleUrls: ['./my-base-list.component.scss']
})
export class MyBaseListComponent implements OnInit {

  @Input() listData: any[];

  constructor() { }

  ngOnInit() {
  }

}
