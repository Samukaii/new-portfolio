import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkWithMeComponent } from './talk-with-me.component';

describe('TalkWithMeComponent', () => {
  let component: TalkWithMeComponent;
  let fixture: ComponentFixture<TalkWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkWithMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalkWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
