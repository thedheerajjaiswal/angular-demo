import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmaterialExampleComponent } from './angularmaterial-example.component';

describe('AngularmaterialExampleComponent', () => {
  let component: AngularmaterialExampleComponent;
  let fixture: ComponentFixture<AngularmaterialExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularmaterialExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularmaterialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
