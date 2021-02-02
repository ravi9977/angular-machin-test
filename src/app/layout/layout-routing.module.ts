import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from './visitors/visitors.component';
import { VisitorsListComponent } from './visitors-list/visitors-list.component';
import { NewsListingComponent } from './news-listing/news-listing.component';

const routes: Routes = [
{path:'',component:VisitorsComponent},
{path:'list',component:VisitorsListComponent},
{path:'news',component:NewsListingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
