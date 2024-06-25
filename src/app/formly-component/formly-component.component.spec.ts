import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyComponentComponent } from './formly-component.component';

describe('FormlyComponentComponent', () => {
  let component: FormlyComponentComponent;
  let fixture: ComponentFixture<FormlyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
