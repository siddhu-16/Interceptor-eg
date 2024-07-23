import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './services/apiservice.service';

@Component({
  selector: 'app-apicomponent',
  templateUrl: './apicomponent.component.html',
  styleUrls: ['./apicomponent.component.css']
})
export class ApicomponentComponent implements OnInit {

  constructor(private api:ApiserviceService) { }
  data:any;
  ngOnInit(): void {
    this.api.getdata().subscribe(data =>{
      console.log(data);
      this.data = data
    })
  }

}
