# 布局
```
修改： src/app/pages/school/school.component.html

<!--走马灯-->
<div class="content-block">
  <div style="background: yellowgreen; width: 100%; height: 460px">

  </div>
</div>

<!--校园时讯-->
<div class="content-block">
  <div style="width: 100%; height: 460px" gdColumns="1fr 1fr" gdGap="60px" gdRows="1fr">
    <div gdRow="1" gdColumn="1" style="background: yellowgreen; "></div>
    <div gdRow="1" gdColumn="2" style="background: yellowgreen; "></div>
  </div>
</div>

<!--校园风光-->
<div class="content-block">
  <div style="background: yellowgreen; width: 100%; height: 460px">

  </div>
</div>

<!--学术-->
<div class="content-block">
  <div style="width: 100%; height: 460px" gdColumns="1fr 1fr 1fr" gdGap="40px" gdRows="1fr">
    <div gdRow="1" gdColumn="1" style="background: yellowgreen; "></div>
    <div gdRow="1" gdColumn="2" style="background: yellowgreen; "></div>
    <div gdRow="1" gdColumn="3" style="background: yellowgreen; "></div>
  </div>
</div>

<!--快速通道-->
<div class="content-block">
  <div style="width: 100%; height: 460px" gdColumns="1fr 1fr" gdGap="60px" gdRows="1fr">
    <div gdRow="1" gdColumn="1" style="background: yellowgreen; "></div>
    <div gdRow="1" gdColumn="2" style="background: yellowgreen; "></div>
  </div>
</div>

<!--整体导航-->
<div class="content-block">
  <div style="background: yellowgreen; width: 100%; height: 460px">

  </div>
</div>

```

``` 
src/app/app-routing.module.ts

+ import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    ......
    + FlexLayoutModule
  ],
	......
})
export class AppRoutingModule { }

```
