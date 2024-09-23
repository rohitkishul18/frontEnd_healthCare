import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HabitCreateComponent } from './habit-create/habit-create.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { EditHabitComponent } from './edit-habit/edit-habit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'habits/create', component: HabitCreateComponent },
  { path: 'habits', component: HabitListComponent },
  { path: 'habits/edit/:id', component: EditHabitComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
