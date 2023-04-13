import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IMAGE_CLOUDINARY, VIDEO_YOUTUBE } from '@modules/directivas/constants/directivas.consts';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent  {


  isError:boolean=true;
  msg: string = 'Resultado';
  dato: string = 'image';
  video: string = VIDEO_YOUTUBE;
  
  constructor(private sanitizer:DomSanitizer){  }
  
  get imagen(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(IMAGE_CLOUDINARY);
  }
}
