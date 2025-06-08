import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignerUiComponent } from './designer-ui.component';

describe('DesignerUiComponent', () => {
  let component: DesignerUiComponent;
  let fixture: ComponentFixture<DesignerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignerUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
