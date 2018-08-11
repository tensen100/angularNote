import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRightContainerComponent } from './dialog-right-container.component';

describe('DialogRightContainerComponent', () => {
  let component: DialogRightContainerComponent;
  let fixture: ComponentFixture<DialogRightContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRightContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRightContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
