import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastHourComponent } from './weather-forecast-hour.component';

describe('WeatherForecastHourComponent', () => {
  let component: WeatherForecastHourComponent;
  let fixture: ComponentFixture<WeatherForecastHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherForecastHourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherForecastHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
