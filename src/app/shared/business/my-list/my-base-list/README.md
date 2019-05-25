# Box组件

## my-base-list.component.html

```
src/app/shared/business/my-list/my-base-list/my-base-list.component.html

<div fxFill fxLayout="column">
  <div fxFlex *ngFor="let item of listData"
       class="list-content" fxLayoutAlign="space-between center">
    <div>{{item.title}}</div>
    <div>{{item.time}}</div>
  </div>
</div>

```

## my-base-list.component.scss

```
src/app/shared/business/my-list/my-base-list/my-base-list.component.scss

.list-content{
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 50px;
}

```

## my-base-list.component.ts

```
src/app/shared/business/my-list/my-base-list/my-base-list.component.ts

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

```
