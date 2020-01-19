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

  constructor(private dataService: DataService, private navCtrl: NavController) {

    }

  ngOnInit() {
    this.setSearchedItems();
  }

  setSearchedItems() {
    this.items2 = this.dataService.searchItems(this.searchTerm4);
    console.log('these are items');
    console.log(this.items2);
  }

  setSortSearch(){
    this.items2 = this.dataService.sortSearch();
  }

  goToProfile(){
    this.navCtrl.navigateForward('/profile')
  }

  logout(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }

  goToHome(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }


}
