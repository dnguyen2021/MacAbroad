import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from "../services/data.service";
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.page.html',
  styleUrls: ['./user-input.page.scss'],
})
export class UserInputPage implements OnInit {
  public searchTerm: string = "";
  public searchTerm2: string = "";
  public searchTerm3: string = "";
  public saveTerm: string = "";
  public items: any = [];
  // public savedItems: any = [];
  public boolean;

  constructor(public navCtrl: NavController, private dataService: DataService, private menu: MenuController) {
  }

  ngOnInit(){
    this.setStars();
    this.createSort();
    this.setFilteredItems();

  }

  setStars(){
    this.items = this.dataService.createStars(this.searchTerm, this.searchTerm2, this.searchTerm3);
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems();
  }

  createSort(){
    this.items = this.dataService.sort();
  }

  show(){
    this.boolean = true;
    // this.dataService.setShow();
  }

  saveData(item){
    // this.savedItems.push(item);
    this.dataService.save(item);
  }

  goToFavourites(){
    this.navCtrl.navigateForward('/tabs/saved-programs')
  }

  goToRecommendation(){
    this.navCtrl.navigateForward('/tabs/recommendation')
  }

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }
  //
  // openEnd() {
  //   this.menu.open('end');
  // }
  //
  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }

  goToProfile(){
    this.navCtrl.navigateForward('/profile')
    }

}


