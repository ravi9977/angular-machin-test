import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CommonService} from '../../Shared/common.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {

  vistorsForm: FormGroup;
  submitted = false;
   selectedFile : File = null;
  public vistorsfiles:any =[];
   url: string = "http://localhost:4200/assets"


  constructor(private formBuilder: FormBuilder,private router: Router,private http: HttpClient,
    api:CommonService) { }

  ngOnInit() {
    this.vistorsForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      visitortype: ['', Validators.required],
      personofvisit: ['', Validators.required],
      dateofentry: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      timeofentry: ['', Validators.required],
      timeofexit: ['', Validators.required],
       file: ['', Validators.required],

    }, );
  }

  // convenience getter for easy access to form fields
   get f() { return this.vistorsForm.controls; }

      onFileSelected(event){
        this.selectedFile = <File> event.target.files[0];
        console.log(this.selectedFile);
       
        this.vistorsForm.controls["file"].setValue(this.selectedFile.name)
        
      }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.vistorsForm.invalid) {
      return;
    }


    var formdata :{} ;

    formdata = this.vistorsForm.value;

    if (localStorage.getItem("visitors-data") === null)
      { var  data = []
        data.push(formdata);
        localStorage.setItem("visitors-data",JSON.stringify(data));
        this.router.navigate(["/list"]);
      }
    else
    { 
      data = JSON.parse(localStorage.getItem("visitors-data"));
      data.push(formdata);
      localStorage.setItem("visitors-data",JSON.stringify(data));

      this.router.navigate(["/list"]);

    }



  }

  onReset() {
    this.submitted = false;
    this.vistorsForm.reset();
  }
}
