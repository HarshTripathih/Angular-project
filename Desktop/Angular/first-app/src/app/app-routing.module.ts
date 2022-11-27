import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { ProjectComponent } from './components/project/project.component';
import { RegisterformComponent } from './components/registerform/registerform.component';


const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "experience",
    component: ExperienceComponent
  },
  {
    path: "project",
    component: ProjectComponent
  },
  {
    path: "techstack",
    component: TechstackComponent
  },
  {
    path: "registerform",
    component: RegisterformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
