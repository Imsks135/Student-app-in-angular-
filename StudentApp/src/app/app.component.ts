import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
    <div class="container">
      <h2>Fill Student details here</h2>
      <form [formGroup]="studentForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input type="text" class="form-control" formControlName="firstname" required>
        </div>
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input type="text" class="form-control" formControlName="lastname" required>
        </div>
        <div class="form-group">
          <label for="emailid">Email</label>
          <input type="email" class="form-control" formControlName="emailid" required>
        </div>
        <div class="form-group">
          <label>Gender</label>
          <div class="form-check">
            <input type="radio" class="form-check-input" id="male" value="Male" formControlName="gender">
            <label class="form-check-label" for="male">Male</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" id="female" value="Female" formControlName="gender">
            <label class="form-check-label" for="female">Female</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
`,
styles: [
  `
  .container {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }
  form {
    margin-top: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    font-weight: bold;
  }
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }
  .btn-primary:hover {
    background-color: #0056b3;
  }
  `
]
})
export class AppComponent implements OnInit{
  studentForm!: FormGroup; // Use non-null assertion operator to inform TypeScript that it will be initialized.

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      this.studentService.addStudent(newStudent).subscribe(
        () => {
          // Success handling, like clearing the form or showing a success message
          this.studentForm.reset();
        },
        (error) => {
          // Error handling, show an error message or handle as per your requirement
        }
      );
    }
  }
}
