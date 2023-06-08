import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AreaDetailsComponent } from './area-details/area-details.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GindiComponent } from './gindi/gindi.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactsComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      {
        path: 'chennai',
        component: ChennaiComponent,
        children: [
          { path: 'gindi', component: GindiComponent },
          { path: 'gindi/:areaCode', component: AreaDetailsComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
