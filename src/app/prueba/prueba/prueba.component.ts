import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Observable, catchError, EMPTY, empty } from 'rxjs';
import { CharacterResults } from '../../interfaces/character';

import { AfterViewInit, ViewChild, inject } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableDataSource, TableItem } from '../../table/table-datasource';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverview } from '../../dialog/dialog.overview.component';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [
    AsyncPipe,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatIconModule, 
    MatButtonModule
  ],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent implements OnInit {
  public characterResults$! : Observable<CharacterResults>
  constructor(
    private serviceCharacter: CharacterService,
    private localStorageService: LocalStorageService
  ) {}


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource = new TableDataSource();
  //dataSource = TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'image', 'name', 'specie', 'actions'];

  public errorMessage! : string;
  ngOnInit(): void {

    
    //this.characterResults$ = this.serviceCharacter.getCharacterList();
    
    const data = this.serviceCharacter.getCharacterList().subscribe(things => {
      console.log('things :: ', things );
      /*
      this.dataSource.data = things.result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      */
  });
    
    /*
    .pipe(catchError( (error:string) =>{
      this.errorMessage = error;
      return empty;
    } ))
    */

    this.localStorageService.setItem('data', JSON.stringify(data) );

    console.log(data);

    
    ;
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
