import { Component, Inject, ViewChild} from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DATE_LOCALE } from '@angular/material';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatDatepicker } from '@angular/material/datepicker';
import { HttproviderService } from './httprovider.service'
import { DialogComponentComponent } from './dialog-component/dialog-component.component'
import { DeleteModalComponent } from './delete-modal/delete-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [];
  arr = [1,2,3,4,5,6,7,8,9]
  employment: string;
  name: string;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;
  Loading: boolean;
  
  constructor(private HttproviderService: HttproviderService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private http: HttpClient,private dragulaService: DragulaService, public dialog: MatDialog) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    this.getUserdata();
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }
  private onDrag(args) {
    let [e, el] = args;
  }
  
  private onDrop(args) {
    let [e, el] = args;
    this.HttproviderService.rearrangedata(this.items)
  }

  private onOver(args) {
    let [e, el, container] = args;
  }

  private onOut(args) {
    let [e, el, container] = args;
  }
  showDeleteModal(i) { 
  
    let dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '400px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.deleteuserData(i)
      }
    });
  }
  createuserData() { 
    let dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.HttproviderService.createUserData(result,this.items);
      }
    });
  }
  openDialog(i): void {
    let dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '750px',
      data: { name: this.name, employment: Object.assign({}, this.items[i])}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.items[i] = result;
        this.HttproviderService.updateuserData(i,this.items);
      }
    });
  }

  deleteuserData(index) {
    var id = this.items[index]._id;
    this.items.splice(index, 1);
    this.HttproviderService.deleteUserData(id);

  }
  getUserdata() { 
    var __this = this
    this.Loading = true;
    this.HttproviderService.getUserData().then(function (data: any) {
      __this.items = data.data;
      __this.Loading = false;
    });

  }
}
