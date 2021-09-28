import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeregestrationComponent } from './collegeregestration.component';

describe('CollegeregestrationComponent', () => {
  let component: CollegeregestrationComponent;
  let fixture: ComponentFixture<CollegeregestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeregestrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeregestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
