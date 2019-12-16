import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IonicModule } from '@ionic/angular';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],

})

export class Tab4Page {

  items = [
    {
      title: 'Application',
      description: 'Online Application for Mac Study Abroad applications Deadline',
      icon: 'calendar',
      date:  {subtitle: 'December', title: '5th, 2019'},
    },
    {
      title: 'Pre-Departure Meeting',
      description: 'Required pre-departure meeting to discuss logistics and housing accommadations',
      icon: 'calendar',
      date:  {subtitle: 'February', title: '26th, 2020'},
    },
    {
      title:'Priority 1 - Fall 2019',
      description: 'Permission to Share Contact Information',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Fall 2019',
      description: 'Direct Enroll: Apply to your program',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Fall 2019',
      description: 'Financial Policy',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Fall 2019',
      description: 'Required Travel Documents',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Fall 2019',
      description: 'Search and Apply for Scholarships',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Academic Accommodations',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Credit and Grading Policy',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Emergency Contact Information',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Health Information Form',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Insurance Information for Study Away',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Resources to Review BEFORE Pre-Departure Orientation',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Student Travel and Travel Advisories',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Study Away and Sexual Violence: Prevention and Response',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Visa Information',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'Wellness & Study Away',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 3 - Fall 2019',
      description:'Student Accounts Office Verification',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'April 29th'},
    },    
    {
      title:'Priority 3 - Fall 2019',
      description:'Student Assumption of Risk',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'April 29th'},
    },
    {
      title:'Priority 3 - Fall 2019',
      description:'Parent Assumption of Risk',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'April 29th'},
    },
    {
      title:'Priority 3 - Fall 2019',
      description:'Spring Semester Registration',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'April 29th'},
    },
    {
      title:'Priority 2 - Fall 2019',
      description:'MANDATORY Pre-Departure Orientation, Spring',
      icon:'calendar',
      date: {subtitle: 'February 25th to', title: 'March 27th'},
    },
    {
      title:'Priority 1 - Spring 2020',
      description:'Permission to Share Contact Information',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Spring 2020',
      description:'Direct Enroll: Apply to your program',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Spring 2020',
      description:'Financial Policy',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Spring 2020',
      description:'Required Travel Documents',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 1 - Spring 2020',
      description:'Search and Apply for Scholarships',
      icon:'calendar',
      date: {subtitle: 'January 17th to', title: 'March 1st'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Academic Accommodations',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Credit and Grading Policy',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Emergency Contact Information',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Health Information Form',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Insurance Information for Study Away',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Resources to Review BEFORE Pre-Departure Orientation',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Student Travel and Travel Advisories	',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Study Away and Sexual Violence: Prevention and Response',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Visa Information',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'Wellness & Study Away',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
    {
      title:'Priority 3 - Spring 2020',
      description:'Student Accounts Office Verification',
      icon:'calendar',
      date: {subtitle: 'September 4th to', title: 'November 26th'},
    },
    {
      title:'Priority 3 - Spring 2020',
      description:'Student Assumption of Risk',
      icon:'calendar',
      date: {subtitle: 'September 4th to', title: 'November 26th'},
    },
    {
      title:'Priority 3 - Spring 2020',
      description:'Parent Assumption of Risk',
      icon:'calendar',
      date: {subtitle: 'September 4th to', title: 'November 26th'},
    },
    {
      title:'Priority 3 - Spring 2020',
      description:'Spring Semester Registration',
      icon:'calendar',
      date: {subtitle: 'September 4th to', title: 'November 26th'},
    },
    {
      title:'Priority 2 - Spring 2020',
      description:'MANDATORY Pre-Departure Orientation, Spring',
      icon:'calendar',
      date: {subtitle: 'September 4th to ', title: 'September 30th'},
    },
  ]
  constructor(public navCtrl: NavController){

  }
  goToHome(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }

  boxBoolean = false;

  onBoxBooleanChange(){
    console.log(this.boxBoolean);
  }

}


// export class Tab4Page implements OnInit{
//   event = {
//     title: '',
//     desc: '',
//     startTime: '',
//     endTime: '',
//     allDay: false
//   };

//   minDate = new Date().toISOString();

//   eventSource = [];
//   viewTitle;

//   calendar = {
//     mode: 'month',
//     currentDate: new Date(),
//   };

//   // @ViewChild(CalendarComponent) myCal: CalendarComponent;
//   @ViewChild(CalendarComponent, { read: true, static: false}) myCal: CalendarComponent;

//   constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }

//   ngOnInit() {
//     this.resetEvent();
//   }

//   resetEvent() {
//     this.event = {
//       title: '',
//       desc: '',
//       startTime: new Date().toISOString(),
//       endTime: new Date().toISOString(),
//       allDay: false
//     };
//   }

//   // Create the right event format and reload source
//   addEvent() {
//     let eventCopy = {
//       title: this.event.title,
//       startTime:  new Date(this.event.startTime),
//       endTime: new Date(this.event.endTime),
//       allDay: this.event.allDay,
//       desc: this.event.desc
//     }

//     if (eventCopy.allDay) {
//       let start = eventCopy.startTime;
//       let end = eventCopy.endTime;

//       eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
//       eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
//     }

//     this.eventSource.push(eventCopy);
//     // this.myCal.loadEvents();
//     this.resetEvent();
//   }
//    // Change current month/week/day
//  next() {
//   var swiper = document.querySelector('.swiper-container')['swiper'];
//   swiper.slideNext();
// }

// back() {
//   var swiper = document.querySelector('.swiper-container')['swiper'];
//   swiper.slidePrev();
// }

// // Change between month/week/day
// changeMode(mode) {
//   this.calendar.mode = mode;
// }

// // Focus today
// today() {
//   this.calendar.currentDate = new Date();
// }

// // Selected date reange and hence title changed
// onViewTitleChanged(title) {
//   this.viewTitle = title;
// }

// // Calendar event was clicked
// async onEventSelected(event) {
//   // Use Angular date pipe for conversion
//   let start = formatDate(event.startTime, 'medium', this.locale);
//   let end = formatDate(event.endTime, 'medium', this.locale);

//   const alert = await this.alertCtrl.create({
//     header: event.title,
//     subHeader: event.desc,
//     message: 'From: ' + start + '<br><br>To: ' + end,
//     buttons: ['OK']
//   });
//   alert.present();
// }

// // Time slot was clicked
// onTimeSelected(ev) {
//   let selected = new Date(ev.selectedTime);
//   this.event.startTime = selected.toISOString();
//   selected.setHours(selected.getHours() + 1);
//   this.event.endTime = (selected.toISOString());
// }

// }
