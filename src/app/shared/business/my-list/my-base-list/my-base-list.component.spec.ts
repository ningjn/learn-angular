import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBaseListComponent } from './my-base-list.component';

describe('MyBaseListComponent', () => {
  let component: MyBaseListComponent;
  let fixture: ComponentFixture<MyBaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
