import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CreateUserRoutingModule } from './ create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
import { RepositoryModule } from './repositories/repository.module';

@NgModule({
  declarations: [
    CreateUserComponent,
  ],
  imports: [
    CreateUserRoutingModule,
    RepositoryModule,
  ],
  exports: [
    CreateUserComponent,
  ],
})
export class CreateUserModule { }