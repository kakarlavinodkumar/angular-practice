import { Component } from "@angular/core";

@Component({
    selector: 'home-root',
    standalone: true,
    imports: [],
    template: `<section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>`,
    styleUrls: ['./home.component.css'], 
})

export class HomeComponent {
    title = 'Home Component'
}
