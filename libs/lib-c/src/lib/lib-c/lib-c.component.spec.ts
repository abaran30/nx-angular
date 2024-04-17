import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibCComponent } from './lib-c.component';

describe('LibCComponent', () => {
  let component: LibCComponent;
  let fixture: ComponentFixture<LibCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibCComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
