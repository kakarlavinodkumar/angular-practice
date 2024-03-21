import { Component } from "@angular/core";

@Component({
    selector: 'home-root',
    standalone: true,
    imports: [],
    template: `<h1>Home Component</h1>`,
    styleUrls: ['./home.component.css'], 
})

export class HomeComponent {
    title = 'Home Component'
}
