import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IMAGE_CLOUDINARY, VIDEO_YOUTUBE } from '@modules/directivas/constants/directivas.consts';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIFComponent {

  isError:boolean=true;
  msg: string = 'Resultado';
  dato: string = 'video';
  image: string = IMAGE_CLOUDINARY;
  //resultado:string='';

  //inyectamos la clase DomSanitizer
  constructor(private sanitizer: DomSanitizer){}

  get video(){

    return this.sanitizer.bypassSecurityTrustResourceUrl(VIDEO_YOUTUBE);
  }

}
