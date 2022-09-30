import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSearchComponent } from './hello-search.component';

describe('HelloSearchComponent', () => {
  let component: HelloSearchComponent;
  let fixture: ComponentFixture<HelloSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
