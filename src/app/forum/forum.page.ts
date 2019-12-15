import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Events, NavParams } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { FirebaseService } from '../database.service'
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReviewsService } from '../reviews.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  boolean: any;
  public reviewSearchTermFor: string = "";
  public reviewItems: any;
  public oldreview: any;
  public searchTerm4: string = "";

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private dataService: DataService,
    private fireBaseService: FirebaseService,
    private formBuilder: FormBuilder,
    public afs: AngularFirestore,
    public events: Events,
    private reviewService: ReviewsService
  ) {
  }

  public Name: string;
  public email: string;
  public Program: string;
  public Review: string;
  public Date: string;
  public WishToKnow: string;
  public Advice: string;

  public post: any = {color: 'primary', message: 'Post to Forum'};
  public storedStarRating: string;

  validations_form: FormGroup;


  items2: string;




  public willYouShow: string = "";
  public searchReview: string = '';

  reviewSaver: string = "";

  public reviews: any[] = [];
  public review: any;

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      Name: new FormControl(''),
      email: new FormControl(''),
      Program: new FormControl(''),
      Review: new FormControl(''),
      Date: new FormControl(''),
      WishToKnow: new FormControl(''),
      Advice: new FormControl('')
    });

    this.resetSelections();
}

  setPrograms() {
    this.items2 = this.dataService.getItems();
  }

  setSearchedItems() {
    this.items2 = this.dataService.searchItems(this.searchTerm4);
  }

  goToHome(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }
  
  splicedDate: string;

  onSubmit(value) {
    this.post.color = 'light';
    this.post.message = 'Your post has been added (please refresh page)';
    this.splicedDate = this.dateConverter(value.Date);
    this.storedStarRating = this.getRating();
    console.log("adding review");
    console.log(this.storedStarRating);
    let data = {
      Name: value.Name,
      email: value.email,
      Program: value.Program,
      Review: value.Review,
      Date: this.splicedDate,
      Rating: this.storedStarRating,
      WishToKnow: value.WishToKnow,
      Advice: value.Advice

    };
    this.fireBaseService.createReview(data)
    .then(
      // res => {
      //   this.router.navigate(["/forum"]);
      // }
    );


  }

  resetSelections(){
    this.review = this.afs.firestore.collection('reviews');
    this.review.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.reviews.push((doc.id,"=>",
          doc.data()
        ));
  })})

    this.reviewItems = this.reviewService.items;
  }

  filterList(evt) {

    const searchTerm = evt;
    console.log(searchTerm);
    this.filterPrior(evt);

    if (!searchTerm) {
      this.resetSelections();

      return;
    }
    this.reviews = this.reviews.filter(review => {
      if (review.Program.toLowerCase() && searchTerm) {
        if (review.Program.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }

    });
  }

  filterPrior(evt) {
    const searchTerm = evt;
    console.log('REVIEWS FROM PREVIOUS YEARS');
    console.log(this.reviewItems);
    this.reviewItems = this.reviewItems.filter(review => {
      if (review.programName.toLowerCase() && searchTerm) {
        if (review.programName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  getReviews() {
  console.log(this.reviews); }


  dateConverter(date) {
    return date.substring(0, 10);
  }

  goBack() {
    this.navCtrl.navigateForward('/tabs/saved-programs');
  }

  logRatingChange() {
    this.events.subscribe('star-rating:changed', (starRating) =>
    {console.log(starRating);
     this.storedStarRating = starRating;
    });
 }

 getRating() {
   return this.storedStarRating;
 }

 logout(){
   this.navCtrl.navigateForward('/tabs/tab1')
 }

}
