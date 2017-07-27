import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private authGuard:AuthGuard) { }

  ngOnInit() {
  	//this.authGuard.canActivate(); We can activate on app.module
  }

}
