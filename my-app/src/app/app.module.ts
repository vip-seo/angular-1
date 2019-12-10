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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    HomeComponent,
    ChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
