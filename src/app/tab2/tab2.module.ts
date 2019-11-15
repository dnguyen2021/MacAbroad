import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab2Page } from './tab2.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SubmitComponent} from '../submit/submit.component'




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]

})

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.page.html',
})
@Component({
  selector: 'tab2.page',
  templateUrl: 'tab2.page.html',
  styleUrls: ['./tab2.page.scss',]
})
export class Tab2PageModule {

}
