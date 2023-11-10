import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YuGiOhService } from './yu-gi-oh.service';
import { YuGiOhComponent } from './yu-gi-oh/yu-gi-oh.component';
import { MazzoComponent } from './mazzo/mazzo.component';

const routes: Routes = [
  {{path:"yu-gi-oh", component:YuGiOhComponent}},
  {{path:"mazzo", Component:MazzoComponent}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
