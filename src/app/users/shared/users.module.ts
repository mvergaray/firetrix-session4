import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { UsersListComponent } from '../users-list/users-list.component';

import { UsersDetailComponent } from '../users-detail/users-detail.component';
import { UsersService } from './users.service';
import { UsersFormComponent } from '../users-form/users-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    UsersDetailComponent,
  ],
  providers: [
    UsersService,
  ],
})
export class UsersModule { }
