import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [],
  templateUrl: './list-header.component.html',
  styleUrl: './list-header.component.css'
})
export class ListHeaderComponent {

  title: string = '';
  link: string = '';
  buttonText: string = '';

  @Input() set setTitle(value: string) {
    if (value !== undefined) {
      this.title = value;
    }
  }

  @Input() set setLink(value: string) {
    if (value !== undefined) {
      this.link = value;
    }
  }

  @Input() set setButtonText(value: string) {
    if (value !== undefined) {
      this.buttonText = value;
    }
  }

}
