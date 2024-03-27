import { Component } from '@angular/core';
import { HomeComponent } from './home.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, TestComponent],
  template: `<h1>Hello world!</h1>
  <div><home-root></home-root></div>
  <div><app-test [param]=test></app-test></div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  test = ['test1', 'test2', 'test3', 'test4'];
}
