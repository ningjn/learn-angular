# Box组件

## my-box.component.html

```
src/app/shared/business/my-layout/my-box/my-box.component.html

<div class="dx-card" fxLayout="column" [class.my-box]="uiType === 'left-title'" fxFill>
  <div *ngIf="uiType === 'left-title' && boxTitle" class="my-box-header"
       fxFlex="36px">
    <div fxLayoutAlign="start center" class="my-left-title">
      <div class="ornament"></div>
      <div class="text">{{ boxTitle }}</div>
    </div>
  </div>

  <div fxFlex="*" fxLayoutAlign="center start" style="padding: 0 12px 12px 12px">
    <ng-content></ng-content>
  </div>
</div>

```

## my-box.component.scss

```
src/app/shared/business/my-layout/my-box/my-box.component.scss

@import "../../../../../themes/generated/variables.base";

.dx-card {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  margin: 0;
}

.my-box-header {
  padding-top: 10px;
}

.my-left-title {
  height: 24px;

  .ornament {
    width: 3px;
    height: 24px;
    background: $base-accent;
  }
  .text {
    padding-left: 10px;
    color: $base-text-color;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
  }
}

```

## my-box.component.ts

```
src/app/shared/business/my-layout/my-box/my-box.component.ts

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

```
