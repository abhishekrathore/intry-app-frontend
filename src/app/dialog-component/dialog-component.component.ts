import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DATE_LOCALE } from '@angular/material';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatDatepicker } from '@angular/material/datepicker';
@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class DialogComponentComponent{

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  showModalData = false;
  person = {};
  jobRole = ['Full Time', 'Part Time', 'Internship']
  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.showModalData = true;
    }
    else {
      this.showModalData = false;
    }
  }
  saveData(person) { 
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}