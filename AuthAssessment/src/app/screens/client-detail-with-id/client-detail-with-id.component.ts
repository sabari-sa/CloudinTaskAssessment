import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { authService } from 'src/app/_services';

@Component({
  selector: 'app-client-detail-with-id',
  templateUrl: './client-detail-with-id.component.html',
  styleUrls: ['./client-detail-with-id.component.css']
})
export class ClientDetailWithIdComponent {
  clientIdDetail: any;
  hashClientIdError: any;

  id = "739515";

  displayedColumns: string[] = ['type', 'title', 'popularity', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private authService: authService,) {

  }

  ngOnInit() {
    this.onclickWithClientId(739515);
  }

  onclickWithClientId(id: any) {
    this.authService.withClientId(id).subscribe({
      next: (response: any) => {
        this.clientIdDetail = JSON.stringify(response);
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
  type: string;
  title: string;
  popularity: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "type": "family",
    "title": "Eiffel Tower Experience - Las Vegas",
    "popularity": 0.692,
    "status": "normal",
  },
  {
    "type": "family",
    "title": "Eiffel Tower Experience - Las Vegas",
    "popularity": 0.692,
    "status": "normal",
  },
];