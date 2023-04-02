import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranPlayerComponent } from './quran-player.component';

describe('QuranPlayerComponent', () => {
  let component: QuranPlayerComponent;
  let fixture: ComponentFixture<QuranPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuranPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuranPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
