# LearnAngular

angular学习

## 前提
[安装nodejs](https://nodejs.org/en/).

## 创建项目
```
方式一
npm install -g @angular/cli
ng new learn-angular --defaults --style scss --routing

方式二
npx --package @angular/cli ng new learn-angular --defaults --style scss --routing
```

## 添加框架组件
```
npx -p devextreme-cli devextreme add devextreme-angular

添加应用模板
ng generate devextreme-angular:add-app-template
  执行命令后选择
  --(outer toolbar)
  --Override the existing file

添加视图
  
  学校概况
  ng generate devextreme-schematics:add-view School
  
  师资队伍
  ng generate devextreme-schematics:add-view Teacher --icon=group

```

## 基础
### 布局
```
安装flex-layout组件
npm i -s @angular/flex-layout @angular/cdk
```

### 模块

### 组件
```
创建公用组件box

src/app/shared/business
ng generate module my-layout
ng generate component my-box
```
[具体修改](https://github.com/ningjn/learn-angular/tree/003_box_detail/src/app/shared/business/my-layout/my-box)

```
创建公用内容List组件

src/app/shared/business
ng generate module my-list
ng generate component my-base-list
```
[具体修改](https://github.com/ningjn/learn-angular/tree/003_content_detail/src/app/shared/business/my-list/my-base-list)

## 细节
### logo修改
```
修改： src/app/shared/components/header/header.component.scss

::ng-deep .header-title .dx-item-content {
  padding: 0;
  margin: 0;
  // -----------add-------------
  background-size: cover;
  width: 239px;
  height: 68px;
  background: url(../../../../assets/images/main/logo.png) no-repeat center;
}

修改： src/app/shared/components/header/header.component.html
    <dxi-item
        location="before"
        cssClass="header-title"
        *ngIf="title"
        [text]="title">
    </dxi-item>
    
    修改为：
    
    <dxi-item
        location="before"
        cssClass="header-title">
    </dxi-item>
```

## 关于部署与构建

[官网说明](https://angular.cn/guide/deployment)

### nginx搭建web服务器

```
Windows下安装
下载地址： http://nginx.org/download/nginx-1.17.0.zip
解压后，直接双击nginx.exe,即可
访问： http://127.0.0.1/ 可以看到nginx页面说明正常
```

```
linux下安装
下载地址： http://nginx.org/download/nginx-1.17.0.tar.gz
解压后需要编译
wget http://nginx.org/download/nginx-1.17.0.tar.gz
tar xvf nginx-1.17.0.tar.gz
cd nginx-1.17.0
./configure --prefix=/home/appuser/.nginx
make
make install

修改/home/appuser/.nginx/conf/nginx.conf
端口80改为8088
启动： /home/appuser/.nginx/sbin/nginx
```

### 构建

```
ng build --prod --base-href /edu/
构建完成后，代码放到了dist/项目名下
把项目名修改为 --base-href /edu/的 edu
把edu目录整个放到nginx目录下的html中

本地访问：http://127.0.0.1/edu/ 可以看到网页
Linux访问：http://你的ip地址:8088/edu 可以看到网页
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
