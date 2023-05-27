import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilesService } from 'src/app/core/service/files.service';

@Component({
  selector: 'app-pcphome',
  templateUrl: './pcphome.component.html',
  styleUrls: ['./pcphome.component.scss']
})
export class PcphomeComponent implements OnInit {

  constructor(
    public _fileservice:FilesService,
    private _router: Router,

  ) { }

  ngOnInit(): void {
  }
  

  
  
  images: string[] = [
    "/images/06.jpg",
    "/images/02.webp",
    
    "/images/04.webp","/images/05.webp","/images/01.webp","/images/08.webp",
  ];
  lengthimg=this.images.length
  currentImageIndex: number = 0;
  nextimgindex : number=1;
  preimgindex : number=this.lengthimg-1;
  
 
  Signup(){
    this._router.navigate(['/signup'])
  }
  
  Loginpage(){
    this._router.navigate(['/login'])
  }
}


