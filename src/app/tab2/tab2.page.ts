import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';


// var stringifiedData = JSON.stringify(this.myJSON);
// var parsedData = JSON.parse(stringifiedData);
// this.displayData = parsedData;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})


export class Tab2Page {

  public searchTerm: string = "";
  public items: any;

  constructor(private dataService: DataService) {}

  // ngOnInit(){
  //   this.setFilteredItems2();
  // }

  // setFilteredItems2() {
  //   // this.items = this.dataService.filterItems(this.searchTerm);
  // }

}
