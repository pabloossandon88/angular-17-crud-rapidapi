import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface DialogData {
    animal: string;
    name: string;
    species: string;
}

@Component({
    selector: 'dialog-overview-dialog',
    templateUrl: './dialog-overview.component.html',
    standalone: true,
    imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
    ],
  })
  export class DialogOverview {
    constructor(
      public dialogRef: MatDialogRef<DialogOverview>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    addItem(name: any, species: any): void{
      const dataTable = JSON.parse(localStorage.getItem('data') || '{}');
      dataTable.push({name: name, species:species})
      console.log(dataTable);
      localStorage.setItem('data', JSON.stringify(dataTable) );
    }
  }