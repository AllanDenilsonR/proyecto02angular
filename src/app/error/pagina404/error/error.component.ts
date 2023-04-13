import { Component, OnInit } from '@angular/core';
import { PAGE_NOT_FOUN } from 'src/app/constants/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent  {

  erro404:string=PAGE_NOT_FOUN;

}
