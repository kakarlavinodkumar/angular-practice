import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  getAllHousingTypes(): string[] {
    return ["Condo", "Town Homes", "Studio", "Independent Home"];
  }
}
