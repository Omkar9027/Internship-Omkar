import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { B1Component } from './b1/b1.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [ {
  path:'',
  component:BodyComponent
  },
  {
    path:'home',
    component:BodyComponent
  },
  {
    path:'Blog',
    component:BlogComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'blog1',
    component:B1Component
  },
  {
    path:'**',
    component:BodyComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
