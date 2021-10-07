import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Observable, Subject } from "rxjs";
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeservice: EmployeeServiceService) { }
  EmployeesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  model;
  employees: Observable<Employee[]>;
  newEmployee: Employee = new Employee();
  currentEmployee: Employee = new Employee();
  deleteMessage = false;
  Employeelist: any;
  isupdated = false;


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.employeeservice.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
      this.dtTrigger.next();
    })
  }

  deleteEmployee(id: number) {
    this.employeeservice.deleteemployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.employeeservice.getEmployeesList().subscribe(data => {
            this.employees = data
          })
        },
        error => console.log(error));
  }

  updateEmployee(id: number) {
    console.log('updateEmployee')
    this.employeeservice.getemployee(id)
      .subscribe(
        data => {
          this.currentEmployee = data
          console.log(this.currentEmployee)
          console.log('this.isupdated ' + this.isupdated)
          this.Employeeupdateform.patchValue({
            Employee_id: this.currentEmployee.id,
            Employee_first_name: this.currentEmployee.firstName,
            Employee_last_name: this.currentEmployee.lastName,
            Employee_email: this.currentEmployee.email,
            Employee_salary: this.currentEmployee.salary,
            Employee_phone: this.currentEmployee.phoneNumber,
            Employee_hire_date: this.currentEmployee.hireDate,
            manager_id: this.currentEmployee.managerId,
            department_id: this.currentEmployee.depId
          })
        },
        error => console.log(error));
  }

  Employeeupdateform = new FormGroup({
    Employee_id: new FormControl(),
    Employee_first_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    Employee_last_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    Employee_email: new FormControl('', [Validators.required, Validators.minLength(2)]),
    Employee_salary: new FormControl('', [Validators.pattern('[0-9]+'),Validators.min(0)]),
    Employee_phone: new FormControl('', Validators.pattern('[- 0-9]+')),
    Employee_hire_date: new FormControl(),
    manager_id: new FormControl(),
    department_id: new FormControl()
  });

  updateEmp(em) {
    console.log('updateEmp');
    this.newEmployee = new Employee();
    this.newEmployee.id = this.EmployeeId.value;
    this.newEmployee.firstName = this.EmployeeFirstName.value;
    this.newEmployee.lastName = this.EmployeeLastName.value;
    this.newEmployee.email = this.EmployeeEmail.value;
    this.newEmployee.salary = this.EmployeeSalary.value;
    this.newEmployee.phoneNumber = this.EmployeePhone.value;
    this.newEmployee.hireDate = this.EmployeeHireDate.value;
    this.newEmployee.managerId = this.ManagerId.value;
    this.newEmployee.depId = this.DepartmentId.value;


    console.log('model ')
    console.log(this.model)
    console.log('newEmployee ')
    console.log(this.newEmployee)
    this.employeeservice.updateemployee(this.newEmployee.id, this.newEmployee).subscribe(
      data => {
        this.isupdated = true;
        console.log('updateemployee this.isupdated ' + this.isupdated)
        this.employeeservice.getEmployeesList().subscribe(data => {
          this.employees = data
          console.log('updateemployee this.employees ' + this.employees)
          console.log(this.employees)
        })
      },
      error => console.log(error));
  }

  get EmployeeFirstName() {
    return this.Employeeupdateform.get('Employee_first_name');
  }
  get EmployeeLastName() {
    return this.Employeeupdateform.get('Employee_last_name');
  }

  get EmployeeEmail() {
    return this.Employeeupdateform.get('Employee_email');
  }

  get EmployeeSalary() {
    return this.Employeeupdateform.get('Employee_salary');
  }

  get EmployeePhone() {
    return this.Employeeupdateform.get('Employee_phone');
  }

  get EmployeeHireDate() {
    return this.Employeeupdateform.get('Employee_hire_date');
  }
  get EmployeeId() {
    return this.Employeeupdateform.get('Employee_id');
  }
  get ManagerId() {
    return this.Employeeupdateform.get('manager_id');
  }
  get DepartmentId() {
    return this.Employeeupdateform.get('department_id');
  }

  changeisUpdate() {
    this.isupdated = false;
  }

}
