import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'user-input', loadChildren: './user-input/user-input.module#UserInputPageModule' },
  { path: 'tab6', loadChildren: './tab6/tab6.module#Tab6PageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule {}
