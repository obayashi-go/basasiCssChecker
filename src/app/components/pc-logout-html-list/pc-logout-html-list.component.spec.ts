import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcLogoutHtmlListComponent } from './pc-logout-html-list.component';

describe('PcLogoutHtmlListComponent', () => {
  let component: PcLogoutHtmlListComponent;
  let fixture: ComponentFixture<PcLogoutHtmlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcLogoutHtmlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcLogoutHtmlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
