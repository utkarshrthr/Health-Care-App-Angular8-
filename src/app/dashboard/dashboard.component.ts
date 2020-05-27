import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appName:string;
  userName:string;
  searchTerm:string;
  currentId:number;
  patients:Patient[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.appName = "Fortis Healthcare";
    this.userName = "Anurag Tripathi";
   
    for(let i = 0; i < localStorage.length; i++){
        let obj = localStorage.getItem(localStorage.key(i));
        let patient = JSON.parse(obj);
        this.patients.push(new Patient(parseInt(localStorage.key(i)), patient.name, patient.age, patient.gender, patient.contact, patient.email, new Date(patient.dateOfBirth)));      
    }

  }

  delete(id):void{
     document.getElementById(`pt${id}`).remove();
     localStorage.removeItem(id);
  }

  edit(id):void{
    this.router.navigate([`add/${id}`]);
  }
}
