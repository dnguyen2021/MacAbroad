import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.page.html',
  styleUrls: ['./recommendation.page.scss'],
})

export class RecommendationPage implements OnInit {
  public savedItems: any = [];
  public boolean;

  constructor(public navCtrl: NavController, private dataService: DataService) {}

  ngOnInit() {
    // this.createItems();
    // // this.setStars();
    // // this.setFilteredItems();
    // // this.createSort();
    // this.isShow();
  }

  // setFilteredItems() {
  //   this.items = this.dataService.filterItems();
  // }
  //
  // createSort(){
  //   this.items = this.dataService.sort();
  // }
  //
  // isShow(){
  //   this.boolean = this.dataService.setShow();
  // }
  //
  // createItems(){
  //   this.savedItems = this.dataService.getSaved();
  // }

}
