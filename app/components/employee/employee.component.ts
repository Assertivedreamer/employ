import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/Models/employee.model'; 
import { EmployeesService } from 'src/app/services/employees.service'; 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees: Employees[];
  constructor(public employeeService: EmployeesService) {
    this.employees = [];
   }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}
