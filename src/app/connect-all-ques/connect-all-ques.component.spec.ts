import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAllQuesComponent } from './connect-all-ques.component';

describe('ConnectAllQuesComponent', () => {
  let component: ConnectAllQuesComponent;
  let fixture: ComponentFixture<ConnectAllQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectAllQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectAllQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
