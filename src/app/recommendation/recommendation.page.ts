import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonicModule, NavController} from '@ionic/angular'; //ItemSliding
import { DataService } from "../services/data.service";
// import { Http } from '@angular/http';
import 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../database.service';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

  import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.page.html',
  styleUrls: ['./recommendation.page.scss'],
})

export class RecommendationPage { //implements OnInit
  @ViewChild('myswing1', {static:true}) swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  // public items2: any = [];
  public cards: Array<any>;
  public items2: Array<any>;
  stackConfig: StackConfig;
  recentCard: string= '';

  constructor(public navCtrl: NavController, private dataService: DataService, private fireBaseService: FirebaseService) { //private menu: MenuController, , private http:Http
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
    this.createItems();
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });

    this.cards = [{programName: ''}];
    this.cards.pop();
    this.addNewCards(0);

  }

  onItemMove(element, x, y, r) {
  var color = '';
  var abs = Math.abs(x);
  let min = Math.trunc(Math.min(16*16 - abs, 16*16));
  let hexCode = this.decimalToHex(min, 2);

  if (x < 0) {
    color = '#FF' + hexCode + hexCode;
  } else {
    color = '#' + hexCode + 'FF' + hexCode;
  }

  element.style.background = color;
  element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
}

// Connected through HTML
voteUp(like: boolean, i) {
  let removedCard = this.cards.pop();
  this.addNewCards(i);
  if (like) {
    this.recentCard = 'You liked: ' + removedCard.programName;
    this.dataService.save(removedCard);
  } else {
    this.recentCard = 'You disliked: ' + removedCard.programName;
  }
}

// Add new cards to our array
addNewCards(i) {
  this.cards.push(this.items2[0]);
  this.items2.splice(i, 1);
}

// http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

  while (hex.length < padding) {
    hex = "0" + hex;
  }

  return hex;
}

  // ngOnInit() {
  //   this.createItems();
  // }

  createItems(){
    this.items2 = this.dataService.getItems();
  }

  goToFavourites(){
    this.navCtrl.navigateForward('/tabs/saved-programs')
  }

  removeItem(i){
    this.items2.splice(i, 1);
  }

  addItem(item, i){

    let currentUser = firebase.auth().currentUser;
    let data = {
      Name: currentUser.email,
      email: currentUser.email,
      Program: item.program.programName,
      Language: '',
      Recommended : item.program.areaName,
      Location: item.program.locationName,
      Housing: item.program.housing,
      MinimumGPARequirement: item.program.GPA,
      AcademicFeatures: item.program.academicFeatures,
      Value: item.program.value,
      img: item.program.img
    }
    this.fireBaseService.createTask(data)

    .then(
      // res => {
      //   this.router.navigate(["/forum"]);
      // }
    )

    this.dataService.save(item);
    this.items2.splice(i, 1);
  }

  // share(slidingItem: ItemSliding) {
  //   slidingItem.close();
  // }

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }




}
