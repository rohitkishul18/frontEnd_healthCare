import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabitService } from '../service/habit.service';


@Component({
  selector: 'app-habit-create',
  templateUrl: './habit-create.component.html',
  styleUrls: ['./habit-create.component.scss']
})
export class HabitCreateComponent {
  habitName = '';
  habitDescription = '';

  constructor(private habitService: HabitService, private router: Router) {}

  onSubmit() {
    const storedUser = localStorage.getItem('user');  // Retrieve the user data from localStorage
  
    if (storedUser) {
      const userDetails = JSON.parse(storedUser);  // Parse the stored user data
      const userId = userDetails.userId;  // Extract userId from the parsed data
  
      const habitData = {
        userId: userId,  // Use userId in habitData
        name: this.habitName,
        description: this.habitDescription,
      };
  
      // Call the habit service to create a new habit
      this.habitService.createHabit(habitData).subscribe(
        (response: any) => {
          alert('Habit created successfully!');
          this.router.navigate(['/habits']);  // Redirect to the habits page
        },
        (error: any) => {
          console.error('Error creating habit:', error);
        }
      );
    } else {
      alert('Cannot get user details from localStorage.');  // Handle the case where no user is found
    }
  }
  
}
