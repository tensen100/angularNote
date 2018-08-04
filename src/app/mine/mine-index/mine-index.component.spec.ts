import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineIndexComponent } from './mine-index.component';

describe('MineIndexComponent', () => {
  let component: MineIndexComponent;
  let fixture: ComponentFixture<MineIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
