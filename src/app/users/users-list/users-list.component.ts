import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/users.service';

import { Observable } from 'rxjs/Observable';
import { User } from '../../user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  items: Observable<User[]>;
  showSpinner = true;

  constructor(private itemService: UsersService) {
    this.items = this.itemService.getItemsList();
  }

  ngOnInit() {
    this.items.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deleteItems() {
    this.itemService.deleteAll();
  }
}
