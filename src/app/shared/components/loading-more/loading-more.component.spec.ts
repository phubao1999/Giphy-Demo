import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingMoreComponent } from './loading-more.component';

describe('LoadingMoreComponent', () => {
  let component: LoadingMoreComponent;
  let fixture: ComponentFixture<LoadingMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
