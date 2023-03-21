import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { authService } from 'src/app/_services';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  clientDetail: any;
  hashClientIdError:any;

  displayedColumns: string[] = ['type', 'title', 'popularity', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor( private authService: authService,) {
  }

  ngOnInit(){
    this.authService.withClient().subscribe({
      next: (response: any) => {
        this.dataSource = response.events
      this.clientDetail = response.events;
      },
      error: (err: any) => {
        this.hashClientIdError = err.status;
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}



export interface PeriodicElement {
  type:string;
  title:number;
  popularity: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];