import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  {
    path: '',
    component: UsersTableComponent,
  },
  {
    path: 'features/:id/:username',
    component: UserComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
