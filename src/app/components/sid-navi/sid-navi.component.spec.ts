import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidNaviComponent } from './sid-navi.component';

describe('SidNaviComponent', () => {
  let component: SidNaviComponent;
  let fixture: ComponentFixture<SidNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
