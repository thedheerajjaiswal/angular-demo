import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDecoratorComponent } from './parent-decorator.component';

describe('ParentDecoratorComponent', () => {
  let component: ParentDecoratorComponent;
  let fixture: ComponentFixture<ParentDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
