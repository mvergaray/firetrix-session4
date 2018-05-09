import { Component, Input } from '@angular/core';

import { User } from '../../user';
import { UsersService } from '../shared/users.service';
import { Roles } from '../../role';

@Component({
  selector: 'item-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent {

  @Input() item:User;

  constructor(private itemSvc: UsersService) { }

  updateRead(roles: Roles) {
    roles.reader = !roles.reader;
    this.itemSvc.updateItem(this.item.key, { roles: roles});
  }

  updateAdmin(roles: Roles) {
    roles.admin = !roles.admin;
    this.itemSvc.updateItem(this.item.key, { roles: roles});
  }

  deleteItem() {
    this.itemSvc.deleteItem(this.item.key);
  }

}
