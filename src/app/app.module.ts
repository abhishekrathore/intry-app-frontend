import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material';
import { HttproviderService } from './httprovider.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    DialogComponentComponent,
    DeleteModalComponent
  ],
  entryComponents: [DialogComponentComponent, DeleteModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragulaModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [HttproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
