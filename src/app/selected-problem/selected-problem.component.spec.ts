import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProblemComponent } from './selected-problem.component';

describe('SelectedProblemComponent', () => {
  let component: SelectedProblemComponent;
  let fixture: ComponentFixture<SelectedProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedProblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
