import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [ CommonModule, MatIconModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {
  @Input() cityName: string = ""
  @Input() chanceOfRain: string = ""
  @Input() temperature: string = ""
  @Input() weatherStatus: string = ""
}
