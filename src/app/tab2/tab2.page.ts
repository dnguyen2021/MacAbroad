import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})

export class Tab2Page implements OnInit{
  public searchTerm4: string = "";
  public items2: any;

  constructor(private dataService: DataService, private navCtrl: NavController) {}


  ngOnInit() {
    this.setSearchedItems();
  }

  setSearchedItems() {
    this.items2 = this.dataService.searchItems(this.searchTerm4);
  }

  setSortSearch(){
    this.items2 = this.dataService.sortSearch();
  }

  goToProfile(){
    this.navCtrl.navigateForward('/profile')
  }

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
