import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-forecast-hour',
  standalone: true,
  imports: [ MatIconModule, CommonModule ],
  templateUrl: './weather-forecast-hour.component.html',
  styleUrl: './weather-forecast-hour.component.scss'
})
export class WeatherForecastHourComponent {
  @Input() wheaterState: string = "sunny"
  @Input() hours: string = "6:00 am"
  @Input() temperature: string = "30"
}
