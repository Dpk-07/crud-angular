import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = ['Matric', 'Diploma', 'Graduate', 'Post Graduate'];
  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private dialogref: MatDialogRef<AddEditEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      exp: '',
      package: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      // console.log(this.empForm.value)
      if(this.data){
        this.service.editEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee Details Updated Successfully');
            console.log(val);
            this.dialogref.close(true);
          },
          error: (err: any) => {
            alert(err);
          },
        });

      }else{
        this.service.addEmploye(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee Add Successfully');
            console.log(val);
            this.dialogref.close(true);
          },
          error: (err: any) => {
            alert(err);
          },
        });
      }

    }
  }
}
