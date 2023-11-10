import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazzoComponent } from './mazzo.component';

describe('MazzoComponent', () => {
  let component: MazzoComponent;
  let fixture: ComponentFixture<MazzoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MazzoComponent]
    });
    fixture = TestBed.createComponent(MazzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
