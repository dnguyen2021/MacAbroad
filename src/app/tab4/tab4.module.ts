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
>>>>>>> 7b0d959b825fbb067c67c0a5412d6329b7bdfc74

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

=======
    NgCalendarModule,
>>>>>>> 7b0d959b825fbb067c67c0a5412d6329b7bdfc74
  ],
  declarations: [Tab4Page]
  
}
)

export class Tab4PageModule {

}
