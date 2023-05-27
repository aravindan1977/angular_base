import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/service/storage.service';

@Component({
  selector: 'main-location-and-data-header',
  templateUrl: './location-and-data-header.component.html',
  styleUrls: ['./location-and-data-header.component.scss']
})
export class LocationAndDataHeaderComponent implements OnInit {

  hospitalList : Array<String> = ["Hospital 1","Hospital 2"]

  constructor(protected _storageService:StorageService) { }

  ngOnInit(): void {
  }

}
