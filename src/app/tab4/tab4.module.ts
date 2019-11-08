import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab4Page } from './tab4.page';
import { Calendar } from '@ionic-native/calendar/ngx';
import { NgCalendarModule  } from 'ionic2-calendar';

<<<<<<< HEAD
=======

>>>>>>> 9966aa33aab5391778301583f8540cde5782372b
const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
<<<<<<< HEAD

    NgCalendarModule,

=======
    NgCalendarModule,
>>>>>>> 9966aa33aab5391778301583f8540cde5782372b
  ],
  declarations: [Tab4Page]

}
)

export class Tab4PageModule {

}