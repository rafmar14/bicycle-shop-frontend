import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationTableComponent } from './components-table.component';

describe('CombinationTableComponent', () => {
  let component: CombinationTableComponent;
  let fixture: ComponentFixture<CombinationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
