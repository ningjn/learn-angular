import { Component, OnInit } from '@angular/core';
import {ScreenService} from '../../shared/services';
import {Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  newsList: any[] = [
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
    {title: '省委常委、宣传部部长关志鸥来我校听思政课', flag: '', time: '05-22'},
  ];

  dataSource: string[] = [
    './assets/images/gallery/1.jpg',
    './assets/images/gallery/2.jpg',
    './assets/images/gallery/3.jpg',
    './assets/images/gallery/4.jpg',
    './assets/images/gallery/5.jpg',
    './assets/images/gallery/6.jpg'
  ];

  screenSize: any;
  slideShowDelay = 2000;

  constructor(private screen: ScreenService) { }

  ngOnInit() {
    this.screenSize = this.screen.sizes;
    this.screen.changed.subscribe(() => {
      this.screenSize = this.screen.sizes;
      console.log(this.screenSize);
    });
  }
}
