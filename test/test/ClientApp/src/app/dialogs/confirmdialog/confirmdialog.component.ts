import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ConfirmdialogComponent, any>,
    @Inject(MAT_DIALOG_DATA) public data: {text:string}) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
