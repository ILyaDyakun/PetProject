import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
// import {MatTreeModule} from '@angular/material/tree'


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    // MatTreeModule
  ]
})
export class UserModule { }
