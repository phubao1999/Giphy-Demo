import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGifComponent } from './upload-gif.component';

describe('UploadGifComponent', () => {
  let component: UploadGifComponent;
  let fixture: ComponentFixture<UploadGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
