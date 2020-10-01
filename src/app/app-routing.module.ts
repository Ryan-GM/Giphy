import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphyComponent } from './giphy/giphy.component';
import { TrendsComponent } from './trends/trends.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'giphy', component: GiphyComponent},
  {path: 'trends', component: TrendsComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
