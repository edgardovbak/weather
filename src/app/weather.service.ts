import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private apiKey: string = '97f4cdc8d08b055eb588cf74920abfb7'; // Your API key
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUr: string = 'https://api.openweathermap.org/data/2.5/forecast';

  // Method to get weather data by city name
  async getWeather(city: string): Promise<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json(); // Parse the JSON response
  }

  // Method to get weather data by city name hourly
  async getHourlyForecast(city: string): Promise<any> {
    const url = `${this.forecastUr}?q=${city}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json(); // Parse the JSON response
  }

  // Method to get the 7-day forecast
  async getDailyForecast(lat: number, lon: number): Promise<any> {
    const response = await fetch(`${this.forecastUr}?lat=${lat}&lon=${lon}&cnt=7&appid=${this.apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch forecast');
    }
    return await response.json();
  }
}