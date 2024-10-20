import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionMapComponent } from './discussion-map.component';

describe('DiscussionMapComponent', () => {
  let component: DiscussionMapComponent;
  let fixture: ComponentFixture<DiscussionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
