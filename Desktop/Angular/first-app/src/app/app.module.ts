import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { HttpClientModule } from "@angular/common/http";
import { RedElDirective } from './red-el.directive';
import { ProjectComponent } from './components/project/project.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { FormsModule } from '@angular/forms';
import { UtilitiesService } from './Services/utilities.service';
import { MbserviceService } from './MobileService/mbservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    TechstackComponent,
    RedElDirective,
    ProjectComponent,
    RegisterformComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UtilitiesService,MbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
