import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableDataSource, TableItem } from './table-datasource';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverview } from '../dialog/dialog.overview.component';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [
      MatTableModule, 
      MatPaginatorModule, 
      MatSortModule, 
      MatIconModule, 
      MatButtonModule,
    ]
})
export class TableComponent implements AfterViewInit {

  constructor(
    public dialog: MatDialog, 
    private localStorageService: LocalStorageService,
    ) {

          
    
  }
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource = new TableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'image', 'name', 'specie', 'actions'];

  ngAfterViewInit(): void {
    this.table.dataSource = JSON.parse( this.localStorageService.getItem('data') || '{}' );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editItem(){
    this.openDialog()
  }

  deleteItem(){
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      data: {
        
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
