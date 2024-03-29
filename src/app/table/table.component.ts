import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableDataSource, TableItem } from './table-datasource';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource = new TableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'image', 'name', 'specie', 'actions'];

  ngAfterViewInit(): void {
    this.table.dataSource = [];
    const data = JSON.parse(localStorage.getItem('data') || '{}');
    if( data ){
      this.table.dataSource = JSON.parse(localStorage.getItem('data') || '{}');
    }
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
    
    console.log(this.dataSource );
    
  }

  editItem(){
    alert('EDIT');
  }

  deleteItem(){
    alert('DELETE');
  }
}
