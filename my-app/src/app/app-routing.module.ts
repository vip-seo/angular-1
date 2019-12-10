import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {pathMatch: 'full', path: '', redirectTo: 'home'},
  {path: "home", component: HomeComponent},
  {path: "admin", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
