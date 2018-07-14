import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearBranchesComponent } from './near-branches.component';

describe('NearBranchesComponent', () => {
  let component: NearBranchesComponent;
  let fixture: ComponentFixture<NearBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
