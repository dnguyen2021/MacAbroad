import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from "../services/data.service";


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.page.html',
  styleUrls: ['./user-input.page.scss'],
})
export class UserInputPage implements OnInit {
  public searchTerm: string = "";
  public searchTerm2: string = "";
  public searchTerm3: string = "";
  public items: any = [];
  public boolean;

  constructor(public navCtrl: NavController, private dataService: DataService) {}

  ngOnInit(){
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm, this.searchTerm2, this.searchTerm3);
  }

  // goToRecommendation(){
  //   this.navCtrl.navigateForward('/tabs/recommendation');
  // }

  show(){
    this.boolean = true;
  }

}
