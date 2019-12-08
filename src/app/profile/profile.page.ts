import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { FirebaseService } from '../database.service'
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private dataService: DataService, 
    private fireBaseService: FirebaseService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

    validations_form: FormGroup;

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      Name: new FormControl(''),
      email: new FormControl(''),
      Program: new FormControl(''),
      GPA: new FormControl(''),
      Major: new FormControl('')
    });
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/tab2');
    });
  }

  public searchTerm4: string = "";
  public items2: any;
  public itemlist: string; 
  public item; 

  public Name: string; 
  public email: string; 
  public Programs: string; 
  public GPA: string; 
  public Major: string; 


  setPrograms(){
    this.items2 = this.dataService.getItems(); 
  }

  returnToHomepage(){
    this.navCtrl.navigateForward("/tabs/user-input")
  }


  onSubmit(value){
    let data = {
      Name: value.Name,
      email: value.email,
      Program: value.Program, 
      GPA: value.GPA, 
      Major: value.Major
    }
    this.fireBaseService.createTask(data)
    .then(
      res => {
        this.router.navigate(["/profile"]);
      }
    )
  }

}