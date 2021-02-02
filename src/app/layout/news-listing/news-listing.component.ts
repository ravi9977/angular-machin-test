import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../Shared/common.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {
	public userlist:any =[];

  constructor(public api:CommonService) { }

  ngOnInit(): void {
  	this.api.getallusers().subscribe(data=>{
  		this.userlist = data;
  		// console.log(data);
  	})
  }

}
