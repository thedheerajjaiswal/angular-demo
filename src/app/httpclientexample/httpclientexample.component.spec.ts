import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientexampleComponent } from './httpclientexample.component';

describe('HttpclientexampleComponent', () => {
  let component: HttpclientexampleComponent;
  let fixture: ComponentFixture<HttpclientexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpclientexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
