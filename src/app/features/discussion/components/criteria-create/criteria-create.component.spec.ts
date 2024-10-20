import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaCreateComponent } from './criteria-create.component';

describe('CriteriaCreateComponent', () => {
  let component: CriteriaCreateComponent;
  let fixture: ComponentFixture<CriteriaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriaCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriteriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
