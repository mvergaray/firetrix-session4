import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import { UsersService } from '../shared/users.service';


@Component({
  selector: 'item-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent {

  item: User = new User();

  constructor(private itemSvc: UsersService) { }
  createItem() {
    this.itemSvc.createItem(this.item);
    this.item = new User(); // reset item
  }
}
