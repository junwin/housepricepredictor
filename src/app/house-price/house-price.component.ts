import { Component, OnInit } from '@angular/core';
import { HouseFeatures } from '../houseFeatures'
import { AREAS } from '../mock-areas';

@Component({
  selector: 'app-house-price',
  templateUrl: './house-price.component.html',
  styleUrls: ['./house-price.component.css']
})
export class HousePriceComponent implements OnInit {

  houseFeatures: HouseFeatures = {
     area: '76',
     rooms: 7
  };

  availableAreas = AREAS;

  constructor() { }

  ngOnInit() {
  }

  selectedArea: string;

  onSelectArea(a: string): void {
    this.selectedArea = a;
  }
}


