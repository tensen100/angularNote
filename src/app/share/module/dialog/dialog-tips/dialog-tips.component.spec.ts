import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTipsComponent } from './dialog-tips.component';

describe('DialogTipsComponent', () => {
  let component: DialogTipsComponent;
  let fixture: ComponentFixture<DialogTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
