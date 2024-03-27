import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  template: `
    <p>
      test component
    </p>
    <p *ngFor="let str of param">
      <br >
      parameter passed is {{str}}
    </p>
  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() param! : string[];
}
