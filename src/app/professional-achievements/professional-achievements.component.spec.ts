import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAchievementsComponent } from './professional-achievements.component';

describe('ProfessionalAchievementsComponent', () => {
  let component: ProfessionalAchievementsComponent;
  let fixture: ComponentFixture<ProfessionalAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalAchievementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
