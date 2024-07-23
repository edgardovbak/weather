import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-city-name',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './city-name.component.html',
  styleUrl: './city-name.component.scss'
})
export class CityNameComponent {
  userInput: string = ''; // Property to hold the user input
  errorMessage: string = ''; // Property to hold the error message
  @Output() inputSubmitted = new EventEmitter<string>(); // Output property to emit input

  // Method to validate the input
  validateInput() {
    if (this.userInput.length < 3) {
      this.errorMessage = 'Text is too short. Please enter at least 3 letters.';
    } else {
      this.errorMessage = ''; // Clear the error message if input is valid
      this.submitInput();
    }
  }

  // Method to handle the Enter key press
  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.validateInput(); // Validate input when Enter is pressed
    }
  }

  // Method to submit the input
  submitInput() {
    this.inputSubmitted.emit(this.userInput); // Emit the input
    this.userInput = ''; // Clear the input field
  }
}
