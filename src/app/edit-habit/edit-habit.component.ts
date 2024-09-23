import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from '../service/habit.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-habit',
  templateUrl: './edit-habit.component.html',
  styleUrls: ['./edit-habit.component.scss']
})
export class EditHabitComponent {
  habitId: any;
  habitName: string = '';
  habitDescription: string = '';

  constructor(private route: ActivatedRoute, private habitService: HabitService, private router: Router) {}

  ngOnInit(): void {
    this.habitId = this.route.snapshot.paramMap.get('id')!;  // Get the habit ID from the route

    // Fetch the habit data
    this.habitService.getHabitById(this.habitId).subscribe((habit: any) => {
      this.habitName = habit.name;
      this.habitDescription = habit.description;
    });
  }

  // Save the updated habit
  onSubmit() {
    const updatedHabit = {
      name: this.habitName,
      description: this.habitDescription
    };

    this.habitService.updateHabit(this.habitId, updatedHabit).subscribe(() => {
      alert('Habit updated successfully!');
      this.router.navigate(['/habits']); // Navigate back to the habit list
    });
  }
}
