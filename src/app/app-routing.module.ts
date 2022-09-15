import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { CharComponent } from './char/char.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
    path:'characters',
    component:CharactersComponent
  },{
    path:'about',
    component:AboutComponent
  },{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },{
    path:'char/:id',
    component:CharComponent
  },{
    path:'add',
    component:AddCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
