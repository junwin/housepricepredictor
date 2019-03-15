import { Injectable } from '@angular/core';
import { HouseFeatures } from './houseFeatures';
import { AREAS } from './mock-areas';

@Injectable({
  providedIn: 'root'
})
export class HousePriceCalcService {

  constructor() { }

  getAreas(): string[] {
    return AREAS;
  }
}
