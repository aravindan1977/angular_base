import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/core/service/files.service';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public _fileservice: FilesService
  ) { }

  ngOnInit(): void {
  }

}
