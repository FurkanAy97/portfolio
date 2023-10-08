import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0,150]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
