import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
    <p>
      test works!
    </p>
  `,
  styleUrl: './test.component.css'
})
@Input("param")
export class TestComponent {
  @Input() param! : string;
}
