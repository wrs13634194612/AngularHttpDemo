import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
// import { Service } from './service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

import {Service} from '../model/Service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,AsyncPipe,JsonPipe,DatePipe,HttpClientModule,MatButtonModule],
  templateUrl: './user.component.html',
  providers:[Service],
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit  {

  constructor(private service: Service) {}


  ngOnInit(): void {
  }
  onAcceptClick(key: string): void {
    console.log('you click onAcceptClick'+key)


    this.service.getSingleCharacterz('1').subscribe(
      (result:any)=>{
        console.log(result)
      },(error:any)=>{
        console.error('Error : '+error);
      }
    );
  }


  onAddClick(key: string): void {
    console.log('you click onAddClick' + key)
    this.service
      .postSingleCharacterz('1')
      .pipe(tap())
      .subscribe((resp) =>{
        console.log(resp)
      });
  }

}
