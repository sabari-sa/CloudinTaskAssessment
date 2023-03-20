import { Component } from '@angular/core';

import { LoginService } from "./_services/authentication.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  clientDetail: any;
  clienmtSecretDetails: any;
  clientIdDetail:any;

  constructor( private LoginService: LoginService,) {

  }

  title = 'AuthAssessment';


  onclickWithClient(){
    this.LoginService.withClient().subscribe(response =>{
      this.clientDetail = JSON.stringify(response);  
      this.clienmtSecretDetails = null;
      this.clientIdDetail = null;
      
    });
   
  }

  onclickWithClientSecret(){
    this.LoginService.withClientSecret().subscribe(response =>{
      this.clienmtSecretDetails = JSON.stringify(response);
      this.clientDetail = null;
      this.clientIdDetail = null;
  });
  }
  onclickWithClientId(id:any){
    id = "739515";
    this.LoginService.withClientId(id).subscribe(response =>{
      this.clientIdDetail = JSON.stringify(response);  
      this.clienmtSecretDetails = null;
      this.clientDetail = null;
    });
   
  }


}
