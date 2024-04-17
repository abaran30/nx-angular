import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibAComponent } from './lib-a.component';

describe('LibAComponent', () => {
  let component: LibAComponent;
  let fixture: ComponentFixture<LibAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
