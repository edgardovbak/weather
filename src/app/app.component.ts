import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { WeatherConditionComponent } from './weather-condition/weather-condition.component';
import { WeatherForecastDayComponent } from './weather-forecast-day/weather-forecast-day.component';
import { WeatherForecastHourComponent } from './weather-forecast-hour/weather-forecast-hour.component';
import { CityNameComponent } from './city-name/city-name.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

import { WeatherService } from './weather.service'; 
import { Time24Pipe } from './time24.pipe';

interface ForecastHoutly {
  list: [
    {
      weather: any;
      dt_txt: string;
      main: any;
    }
  ]
  
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    WeatherConditionComponent,
    CardWrapperComponent,
    WeatherForecastDayComponent,
    WeatherForecastHourComponent,
    CityNameComponent,
    FormsModule,
    CurrentWeatherComponent,
    CommonModule,
    Time24Pipe
  ],
  providers: [WeatherService], // Provide the WeatherService
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  weatherData: any; // Property to hold the weather data
  hourlyForecast: ForecastHoutly | undefined | null; // Property to hold the weather data forecast
  dailyForecast: any;
  errorMessage: string = ''; // Property to hold error messages

  submittedCity: string = 'Budapest'; // Property to hold the submitted city name

  constructor(private weatherService: WeatherService) { } // Inject the WeatherService

  // Method to handle the submitted input from the child component
  onInputSubmitted(city: string) {
    this.submittedCity = city; // Store the submitted city name
    this.getWeatherData(city); // Fetch weather data for the city
    this.getHourlyForecastData(city);
  }

  // Method to fetch weather data
  async getWeatherData(city: string) {
    try {
      this.weatherData = await this.weatherService.getWeather(city); // Fetch weather data
      this.errorMessage = ''; // Clear any previous error messages

    } catch (error) {
      this.errorMessage = 'Could not fetch weather data. Please try again.'; // Handle errors
      this.weatherData = null; // Clear weather data on error
    }
  }

  // Method to fetch hourly forecast data
  async getHourlyForecastData(city: string) {
    try {
      this.hourlyForecast = await this.weatherService.getHourlyForecast(city); // Fetch hourly forecast data
      this.errorMessage = ''; // Clear any previous error messages
    } catch (error) {
      this.errorMessage = 'Could not fetch hourly forecast data. Please try again.'; // Handle errors
      this.hourlyForecast = null; // Clear hourly forecast data on error
    }
  }

  ngOnInit() {
    this.getWeatherData(this.submittedCity); 
    this.getHourlyForecastData(this.submittedCity);
  }
}
