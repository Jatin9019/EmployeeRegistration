import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService , private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form:NgForm){
    if(form.value.$key==null){
      this.employeeService.insertEmployee(form.value);
    }else{
      //this.employeeService.updateEmployee(form.value);
    }
    this.resetForm(form);   
    this.tostr.success('Submitted Succcessfully','Employee Register');


  }
  resetForm(form?:NgForm){
    if(form !=null)
      form.reset();
    this.employeeService.selectedEmployee={
      $key:'', 
      name:'',
      office:'',
      position:'',
      salary:0
    }
  }

}
