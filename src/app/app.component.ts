import { Component } from '@angular/core';
import { HomeComponent } from './home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<h1>Hello world!</h1>
  <div><home-root></home-root></div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
