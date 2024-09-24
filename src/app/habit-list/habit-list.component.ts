import { Component, OnInit } from '@angular/core';
import { HabitService } from '../service/habit.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { HabitService } from '../services/habit.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {
  habits: any[] = [];

  constructor(private habitService: HabitService,private router:Router) {}

  ngOnInit(): void {
    const storeDetail = localStorage.getItem('user');  // Retrieve user data from localStorage
  
    if (storeDetail) {
      try {
        const userDetails = JSON.parse(storeDetail);  // Parse the stored user data
        const userId = userDetails.userId; // Extract userId from the parsed data
  
        // Fetch habits for the user
        this.habitService.getHabitsByUser(userId).subscribe(
          (data:any) => {
            this.habits=data;
          },
          (error) => {
            console.error('Error fetching habits:', error);  // Log any error that occurs
          }
        );
      } catch (error) {
        console.error('Error parsing user details from localStorage:', error);  // Handle JSON parsing errors
      }
    } else {
      console.error('User details not found in localStorage.');  // Handle the case where no user data is found
    }
  }
  

  onDelete(habitId: string) {
    if (confirm('Are you sure you want to delete this habit?')) {
      this.habitService.deleteHabit(habitId).subscribe(() => {
        this.habits = this.habits.filter(habit => habit._id !== habitId);
        alert('Habit deleted successfully!');
      });
    }
  }
  editHabit(habitId:any){
    this.router.navigate(['/habits/edit', habitId]); 
  }
}
