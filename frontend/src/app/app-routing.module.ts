import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes = [
  {path:'search', component:FormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
