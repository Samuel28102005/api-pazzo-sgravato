import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuGiOhComponent } from './yu-gi-oh.component';

describe('YuGiOhComponent', () => {
  let component: YuGiOhComponent;
  let fixture: ComponentFixture<YuGiOhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YuGiOhComponent]
    });
    fixture = TestBed.createComponent(YuGiOhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
