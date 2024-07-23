import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time24',
  standalone: true // Mark the pipe as standalone
})
export class Time24Pipe implements PipeTransform {
  transform(value: Date | string): string {
    if (!value) return '';

    const date = typeof value === 'string' ? new Date(value) : value;

    // Get hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format hours and minutes to always show two digits
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${formattedHours}:${formattedMinutes}`; // Return in HH:MM format
  }
}