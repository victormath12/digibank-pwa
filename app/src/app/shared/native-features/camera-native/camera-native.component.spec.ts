import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraNativeComponent } from './camera-native.component';

describe('CameraNativeComponent', () => {
  let component: CameraNativeComponent;
  let fixture: ComponentFixture<CameraNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
