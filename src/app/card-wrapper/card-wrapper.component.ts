import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.scss'
})
export class CardWrapperComponent {
  @Input() title: string = "Card Title"
  @Input() cardStyle: string = ""
}
