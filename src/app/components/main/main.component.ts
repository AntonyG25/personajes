import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { personajesI } from 'src/app/interface/personajesI';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'status', 'species', 'gender'];
  dataSource: MatTableDataSource<any>;
  
  personajes: any = {};
  constructor(private data: RestService) {}

  ngOnInit(): void {
    this.data.getPersonajes().subscribe(resp =>{
      this.dataSource = new MatTableDataSource(resp);
      console.log(this.personajes);
    });
  }

}
