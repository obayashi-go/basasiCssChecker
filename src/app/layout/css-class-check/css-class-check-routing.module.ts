import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssClassCheckComponent } from './css-class-check.component';

const routes: Routes = [
  {
    path : '',
    component: CssClassCheckComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssClassCheckRoutingModule { }
