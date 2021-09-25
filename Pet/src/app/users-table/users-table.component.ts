import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from './users.model';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  public dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  public columns: string[] = ['name', 'email', 'username', 'phone', 'website'];
  public isLoadingResults: boolean = false;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }
 
  public pageChanged(): void {
    this.updateUsers();
  }

  ngOnInit(): void {
    this.updateUsers();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public selectRow(row: User): void {
    this.router.navigate(['features', row.id, row.username], { relativeTo: this.route })
  }

  public onTableScroll(event: any) {
    const scrollFromBottom = event.target.scrollHeight - event.target.offsetHeight - event.target.scrollTop;

    if (scrollFromBottom <= 0) {
      this.updateUsers();
    }
  }

  private updateUsers(): void {
    this.isLoadingResults = true;
    this.usersService.getUsers().pipe(
      finalize(() => {
        this.isLoadingResults = false;
      })
    ).subscribe((users: User[]) => {
      this.dataSource.data = this.dataSource.data.concat(users)
    });
  }
}
