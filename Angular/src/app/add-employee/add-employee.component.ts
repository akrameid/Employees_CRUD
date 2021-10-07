import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeServiceService) { }

  employee : Employee=new Employee();  
  submitted = false;
  ngOnInit(): void {
    this.submitted = false;
  }

  employeesaveform=new FormGroup({  
    employee_first_name:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),  
    employee_last_name:new FormControl('' , [Validators.required , Validators.minLength(2) ] ), 
    employee_email:new FormControl('',[Validators.required,Validators.email]),
    Employee_salary: new FormControl('', [Validators.pattern('[0-9]+'),Validators.min(0)]),
    Employee_phone: new FormControl('', Validators.pattern('[- 0-9]+')),
    Employee_hire_date: new FormControl(),
    manager_id: new FormControl('', Validators.min(0)),
    department_id: new FormControl('', Validators.min(0))
  });  
  
  saveEmployee(saveEmployee){  
    this.employee=new Employee();     
    this.employee.firstName=this.EmployeeFirstName.value;  
    this.employee.lastName=this.EmployeeLastName.value;  
    this.employee.email=this.EmployeeEmail.value;  
    this.employee.salary = this.EmployeeSalary.value;
    this.employee.phoneNumber = this.EmployeePhone.value;
    this.employee.hireDate = this.EmployeeHireDate.value;
    this.employee.managerId = this.ManagerId.value;
    this.employee.depId = this.DepartmentId.value;
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.employeeservice.createEmployee(this.employee)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.employee = new Employee();  
  }  
  
  get EmployeeFirstName(){  
    return this.employeesaveform.get('employee_first_name');  
  }  
  get EmployeeLastName(){  
    return this.employeesaveform.get('employee_last_name');  
  }  
  
  get EmployeeEmail(){  
    return this.employeesaveform.get('employee_email');  
  }  
  
  get EmployeeSalary() {
    return this.employeesaveform.get('Employee_salary');
  }

  get EmployeePhone() {
    return this.employeesaveform.get('Employee_phone');
  }

  get EmployeeHireDate() {
    return this.employeesaveform.get('Employee_hire_date');
  }
  get EmployeeId() {
    return this.employeesaveform.get('Employee_id');
  }
  get ManagerId() {
    return this.employeesaveform.get('manager_id');
  }
  get DepartmentId() {
    return this.employeesaveform.get('department_id');
  }
  
  addEmployeeForm(){  
    this.submitted=false;  
    this.employeesaveform.reset();  
  } 

}
