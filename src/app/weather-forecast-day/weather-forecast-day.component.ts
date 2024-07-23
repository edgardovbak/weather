import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-forecast-day',
  standalone: true,
  imports: [ MatIconModule, CommonModule],
  templateUrl: './weather-forecast-day.component.html',
  styleUrl: './weather-forecast-day.component.scss'
})
export class WeatherForecastDayComponent {
  @Input() temperatureMax: string = ""
  @Input() temperatureMin: string = ""
  @Input() temperature: string = ""
  @Input() dayName: string = ""
  @Input() wheaterState: string = ""

}
