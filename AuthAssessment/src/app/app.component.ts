import { Component } from '@angular/core';

import { authService } from "./_services/authentication.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  clientDetail: any;
  clienmtSecretDetails: any;
  clientIdDetail:any;

  constructor( private authService: authService,) {

  }

  title = 'AuthAssessment';


  onclickWithClient(){
    this.authService.withClient().subscribe(response =>{
      this.clientDetail = JSON.stringify(response);  
      this.clienmtSecretDetails = null;
      this.clientIdDetail = null;
      
    });
   
  }

  onclickWithClientSecret(){
    this.authService.withClientSecret().subscribe(response =>{
      this.clienmtSecretDetails = JSON.stringify(response);
      this.clientDetail = null;
      this.clientIdDetail = null;
  });
  }
  onclickWithClientId(id:any){
    debugger
    id = "739515";
    this.authService.withClientId(id).subscribe(response =>{
      this.clientIdDetail = JSON.stringify(response);  
      this.clienmtSecretDetails = null;
      this.clientDetail = null;
    });
   
  }


}
