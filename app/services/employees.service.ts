import { Injectable } from '@angular/core';
import { Employees } from '../Models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  public getEmployees(): Employees[] {
    return [{
      id:101,
      firstName:"Abhishek",
      lastName:"Borana",
      salary:60000,
      dob:"09/09/1998",
      email:"abhishek@gmail.com"
    },
    {
      id:102,
      firstName:"Yami",
      lastName:"Gautm",
      salary:450000,
      dob:"19/10/1996",
      email:"yami12_gautm@gmail.com"
    },
    {
      id:103,
      firstName:"Sahil",
      lastName:"Sharma",
      salary:230000,
      dob:"27/03/1988",
      email:"sharma_sahil@icloud.com"
    },
    {
      id:104,
      firstName:"Yashi",
      lastName:"Mishra",
      salary:60000,
      dob:"31/08/1995",
      email:"yashi@gmail.com"
    },
    {
      id:105,
      firstName:"Naman",
      lastName:"Vyas",
      salary:78000,
      dob:"02/05/2000",
      email:"naman@gmail.com"
    }
  ]
  }
}
