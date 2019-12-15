import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
// import {MatExpansionModule} from '@angular/material/expansion'
// import { MbscFormOptions } from '@mobiscroll/angular-lite'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})

// .controller('MyCtrl', function($scope) {
//   $scope.items2 = [];
//   for (var i=0; i<10; i++) {
//     $scope.items2[i] = {
//       name: i,
//       items: [],
//       show: false
//     };
//     for (var j=0; j<3; j++) {
//       $scope.items2[i].items.push(i + '-' + j);
//     }
//   }

//   /*
//    * if given group is the selected group, deselect it
//    * else, select the given group
//    */
//   $scope.toggleItem = function(item) {
//     item.show = !item.show;
//   };
//   $scope.isItemShown = function(item) {
//     return item.show;
//   };

// });

export class Tab2Page implements OnInit{

  public searchTerm4: string = "";
  public items2: any;

  constructor(private dataService: DataService, private navCtrl: NavController) {

    }
  // panelOpenState = false;




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

  goToHome(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }


  // goToProgramWebsite(){
  //   this.navCtrl.navigateForward()
  // }

}