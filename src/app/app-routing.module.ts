import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular'; 

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'user-input', loadChildren: './user-input/user-input.module#UserInputPageModule' },
  { path: 'tab6', loadChildren: './tab6/tab6.module#Tab6PageModule' },
  { path: 'recommendation', loadChildren: './recommendation/recommendation.module#RecommendationPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'saved-programs', loadChildren: './saved-programs/saved-programs.module#SavedProgramsPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), FormsModule,
    ReactiveFormsModule, IonicModule
  ],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule {}
