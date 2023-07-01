import { Location } from '@angular/common';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { NgZorroModule } from 'src/app/ng-zorro.module';
import { GiphyApiService } from '../../services';
import { BaseLayoutComponent } from './base-layout.component';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;
  let locationRef: Location

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseLayoutComponent],
      imports: [NgZorroModule, RouterTestingModule.withRoutes(routes), NoopAnimationsModule, HttpClientTestingModule],
      providers: [{
        provide: GiphyApiService,
        useValue: {},
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BaseLayoutComponent);
    locationRef = TestBed.inject(Location)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', (async () => {
    const queryElements = fixture.debugElement.query(By.css('.subs'))
    queryElements.nativeElement.click();
    fixture.whenStable().then(() => {
      expect(locationRef.path()).toBe('/');
    })
  }));
});
