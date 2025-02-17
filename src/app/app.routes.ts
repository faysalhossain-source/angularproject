import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path: 'abuot', component:AboutComponent},
    {path: 'contact', component:ContactComponent}
];
