import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import * as myJSON from "../tab2/myJSON.json";
import * as products from "./products.json";
import { Observable } from 'rxjs';

// console.log(myJSON.default);
// var stringifiedData = JSON.stringify(this.myJSON);
// var parsedData = JSON.parse(stringifiedData);
// this.displayData = parsedData;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})


export class Tab2Page{

  // constructor(private dataService: DataService) {}
  //
  // ngOnInit(){
  //   this.setFilteredItems();
  // }
  //
  // setFilteredItems2() {
  //   this.items = this.dataService.filterItems2(this.searchTerm);
  // }

}
