import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import{FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormComponent } from './form/form.component';
import { TestColorDirective } from './test-color.directive';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DirectivasComponent,
    EmpleadoComponent,
    FormComponent,
    TestColorDirective,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
   // SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
