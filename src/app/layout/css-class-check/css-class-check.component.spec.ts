import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssClassCheckComponent } from './css-class-check.component';

describe('CssClassCheckComponent', () => {
  let component: CssClassCheckComponent;
  let fixture: ComponentFixture<CssClassCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssClassCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssClassCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
