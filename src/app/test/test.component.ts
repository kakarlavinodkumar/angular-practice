import { Component, Input, Inject, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

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
    <p *ngFor="let housetype of houseTypes">
    <br >
    Home Type is {{housetype}}
    </p>
  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() param! : string[];
  houseTypes: string[] =[];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.houseTypes = this.housingService.getAllHousingTypes();
  }
  
}
