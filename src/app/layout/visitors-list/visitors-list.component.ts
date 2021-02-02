import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.css']
})
export class VisitorsListComponent implements OnInit {
	public VisitorList :any =[];
public VisitorFiles :any =[];

  constructor() { }

  ngOnInit(): void {
  
  this.getdata();

  }

     getdata(){
	   this.VisitorList = JSON.parse(localStorage.getItem("visitors-data"));
  	  console.log(this.VisitorList);
    // localStorage.clear();
}


}
