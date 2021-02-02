import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { VisitorsComponent } from './visitors/visitors.component';
import { VisitorsListComponent } from './visitors-list/visitors-list.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VisitorsComponent, VisitorsListComponent, NewsListingComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
