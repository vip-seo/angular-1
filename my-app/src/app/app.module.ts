import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { DataService } from "./data.service";
import { HomeComponent } from './home/home.component';
import { ChapterComponent } from './home/chapter/chapter.component';
import { CounterComponent } from './home/counter/counter.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    HomeComponent,
    ChapterComponent,
    CounterComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
