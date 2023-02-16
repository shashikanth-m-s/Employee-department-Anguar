import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:any;
  constructor(private employeeServiece:EmployeeService){}

  ngOnInit(): void{
   
    this.employee=this.employeeServiece.getAllEmployees().subscribe((data)=>this.employee=data);
    this.employee=this.employeeServiece.getAllEmployees().subscribe((data)=>console.log(data));
  }

}
