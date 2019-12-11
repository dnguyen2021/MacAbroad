import { Component, OnInit, ViewChild } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { IonicModule, NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  
  public searchTerm4: string = "";
  public items2: any;
  
  constructor(private reviewService: ReviewsService, private navCtrl: NavController) {}
  
  ngOnInit() {
    this.setSearchItems();
  }

  setSearchItems() {
    this.items2 = this.reviewService.searchItems(this.searchTerm4);
  }

  setSortSearch(){
    this.items2 = this.reviewService.sortSearch();
  }

  goToHome(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }
 
}
