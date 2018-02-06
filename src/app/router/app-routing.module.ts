import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../pages/home/home.component';
import { InternaComponent } from './../pages/interna/interna.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'interna', component: InternaComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
