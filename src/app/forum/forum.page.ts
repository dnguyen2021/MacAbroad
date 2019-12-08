import { Component, OnInit } from '@angular/core'; 
import { NavController, LoadingController, ToastController, Events, NavParams } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { FirebaseService } from '../database.service'
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  boolean: any; 
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private dataService: DataService, 
    private fireBaseService: FirebaseService,
    private formBuilder: FormBuilder,
    public afs: AngularFirestore
 
  ) { 
  }

  public Name: string; 
  public email: string; 
  public Program: string; 
  public Review: string; 
  public Date: string; 

  public post: any = {color: 'primary', message: 'Post to Forum'};


  validations_form: FormGroup;

  items2: string; 
  public searchTerm4: string = "";

  reviewSaver: string = "";

  public reviews: any[] = [];
  public review: any; 

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      Name: new FormControl(''),
      email: new FormControl(''),
      Program: new FormControl(''),
      Review: new FormControl(''),
      Date: new FormControl('')

    });

  
    this.review = this.afs.firestore.collection('reviews');  
    this.review.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.reviews.push((doc.id, 
          "=>",
          doc.data()
        )); 
  
  })})
}

  setPrograms(){
    this.items2 = this.dataService.getItems(); 
  }

  setSearchedItems(){
    this.items2 = this.dataService.searchItems(this.searchTerm4);
  }

  onSubmit(value){
    this.post.color = 'light';
    this.post.message = 'Your post has been added (please refresh page)'
    let data = {
      Name: value.Name,
      email: value.email,
      Program: value.Program,
      Review: value.Review, 
      Date: value.Date
    }
    this.fireBaseService.createReview(data)
    .then(
      // res => {
      //   this.router.navigate(["/forum"]);
      // }
    )


  }

  getReviews(){
  console.log(this.reviews); }



  filterReviews(){
    return this.reviews.filter(item => {
      return item.Program == 'Sciences Po';

    });
  }

  setFilteredItems() {
    this.reviews = this.filterReviews();
  }


  show(){
    this.boolean = true;
    // this.dataService.setShow();
  }

  goBack(){
    this.navCtrl.navigateForward('/tabs/saved-programs');
  }

}

