import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-condition',
  standalone: true,
  imports: [ CommonModule, MatIconModule ],
  templateUrl: './weather-condition.component.html',
  styleUrl: './weather-condition.component.scss'
})
export class WeatherConditionComponent {
  @Input() weatherCondition: string = "thermostat"
  @Input() conditionName: string = "Air condition"
  @Input() conditionValue: string = "30"
}
