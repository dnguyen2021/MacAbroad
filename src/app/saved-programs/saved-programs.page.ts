import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { UserInputPage } from "../user-input/user-input.page";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-saved-programs',
  templateUrl: './saved-programs.page.html',
  styleUrls: ['./saved-programs.page.scss'],
})
export class SavedProgramsPage implements OnInit {
  public savedItems: any = [];


  constructor(public navCtrl: NavController, private dataService: DataService) {
  }

  ngOnInit() {
    this.createSavedItems();
  }

  createSavedItems(){
    this.savedItems = this.dataService.getSaved();
  }

  goBack(){
    this.navCtrl.navigateForward('/tabs/recommendation')
  }

  removeItem2(i){
    this.savedItems.splice(i, 1);
  }
}
