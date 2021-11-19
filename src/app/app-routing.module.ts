import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ //c'est un routeurs qui genere  les URL
  {
    path: '',
    component: HomeComponent  // si l'url est vide, le composant home est la page principale
  },
  {
    path: 'contact',
    component: ContactComponent  // si l'url est: /conatact, le composant contact est la page principale
  },
  {
    path: 'detail/:id',
    component: DetailComponent  // si l'url est: /conatact, le composant detail est la page principale
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
