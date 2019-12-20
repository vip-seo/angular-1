import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { BindingComponent } from "./binding/binding.component";
import { FormsComponent } from "./forms/forms.component";

const routes: Routes = [
  {pathMatch: 'full', path: '', redirectTo: 'home'},
  {path: "home", component: HomeComponent},
  {path: "admin", component: MainComponent},
  {path: "binding", component: BindingComponent},
  {path: "forms", component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
